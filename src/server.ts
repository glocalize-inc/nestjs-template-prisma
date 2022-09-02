import { ApiModule } from './root/api/api.module'
import { apiServerBootstrap } from './shared/api-server-bootstrap'

apiServerBootstrap({
  module: ApiModule.forRoot({
    imports: [
      // GraphQLModule.forRoot({
      //   debug: true,
      //   playground: true,
      //   autoSchemaFile: join(process.cwd(), 'schema.gql'),
      //   path: 'api/nestjs-prisma-template/gql',
      // }),
    ],
  }),
})
