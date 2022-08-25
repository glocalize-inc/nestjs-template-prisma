import { ApiModule } from './api/api.module'
import { BaseModule } from './base/base.module'
import { bootstrap } from './shared/bootstrap'

bootstrap({
  module: ApiModule.forRoot({
    imports: [
      BaseModule.forRoot(),
      // GraphQLModule.forRoot({
      //   debug: true,
      //   playground: true,
      //   autoSchemaFile: join(process.cwd(), 'schema.gql'),
      //   path: 'api/nestjs-prisma-template/gql',
      // }),
    ],
  }),
})
