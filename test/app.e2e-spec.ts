import { Test, TestingModule } from '@nestjs/testing'
import { CommonModule } from 'src/root/common/common.module'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { ApiModule } from 'src/root/api/api.module'

describe('ApiController (e2e)', () => {
  let app: NestFastifyApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CommonModule.forRoot(), ApiModule.forRoot()],
    }).compile()

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    )
    await app.init()
    // app.setGlobalPrefix('/api/nestjs-prisma-template')
    await app.getHttpAdapter().getInstance().ready()
  })

  it('/healthz (GET)', () => {
    return app
      .inject({
        method: 'GET',
        url: '/healthz',
      })
      .then((response) => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual('OK')
      })
  })

  afterAll(async () => {
    await app.close()
  })
})
