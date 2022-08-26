import { ApiModule } from './root/api/api.module'
import { CommonModule } from './root/common/common.module'
import { bootstrap } from './shared/bootstrap'

bootstrap({
  module: ApiModule.forRoot({
    imports: [
      CommonModule.forRoot(),
      ApiModule.forRoot(),
      // GraphQLModule.forRoot({
      //   debug: true,
      //   playground: true,
      //   autoSchemaFile: join(process.cwd(), 'schema.gql'),
      //   path: 'api/nestjs-prisma-template/gql',
      // }),
    ],
  }),
})
