import { INestApplication, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface'
import { readFileSync } from 'fs'
import { AllExceptionsFilter } from './filter'

type PackageJson = {
  name: string
  version?: string
  description?: string
  dependencies?: any
  devDependencies?: any
  scripts?: any
  license?: any
} & any
const packageJson: PackageJson = JSON.parse(
  readFileSync('package.json', 'utf-8'),
)

type ApiKeyOptions = {
  securitySchemeObject: SecuritySchemeObject
  name: string
}

type BuildSwaggerParams = {
  app: INestApplication
  serviceName?: string
  srcRepositoryName?: string
  apiKeyOptions?: Array<ApiKeyOptions>
}

type BootstrapParams = {
  module: any
  serviceName?: string
  srcRepositoryName?: string
  port?: number | string
  host?: string
}

function buildSwagger({
  app,
  serviceName,
  apiKeyOptions,
  srcRepositoryName = packageJson.name,
}: BuildSwaggerParams) {
  const docsBuilder = new DocumentBuilder().setTitle(
    (serviceName ?? srcRepositoryName).toUpperCase(),
  )
  apiKeyOptions.forEach((options) => {
    docsBuilder.addApiKey(options.securitySchemeObject, options.name)
  })
  SwaggerModule.setup(
    [`docs/${srcRepositoryName}`, serviceName].filter(Boolean).join('/'),
    app,
    SwaggerModule.createDocument(app, docsBuilder.build()),
  )
}

export async function apiServerBootstrap({
  module,
  serviceName,
  srcRepositoryName = packageJson.name,
  port = process.env.PORT ?? 3000,
  host = process.env.HOST ?? '0.0.0.0',
}: BootstrapParams) {
  const app: INestApplication = await NestFactory.create(
    module,
    new FastifyAdapter(),
  )
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
  app.useGlobalFilters(new AllExceptionsFilter(app.getHttpAdapter()))
  app.setGlobalPrefix(
    [`api/${srcRepositoryName}`, serviceName].filter(Boolean).join('/'),
  )
  app.useGlobalPipes(
    new ValidationPipe({
      validationError: { target: false, value: false },
      transform: true,
      forbidUnknownValues: true,
      whitelist: true,
    }),
  )

  buildSwagger({
    app,
    srcRepositoryName,
    serviceName,
    apiKeyOptions: [
      {
        securitySchemeObject: { type: 'apiKey', name: 'Authorization' },
        name: 'token',
      },
    ],
  })

  await app.listen(port, host)
}
