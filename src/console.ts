import { BootstrapConsole } from 'nestjs-console'
import { ConsoleModule } from './root/console/console.module'

const bootstrap = new BootstrapConsole({
  module: ConsoleModule,
  useDecorators: true,
})
bootstrap.init().then(async (app) => {
  try {
    // init your app
    await app.init()
    // boot the cli
    await bootstrap.boot()
    await app.close()
  } catch (e) {
    console.log(e)
    await app.close()
    process.exit(1)
  }
})
