import { ConfigFactory } from '@nestjs/config'
import { IBaseConfig } from './i-base.config'

const nodeEnv = process.env.NODE_ENV || 'local'

export function loadConfig(): ConfigFactory<IBaseConfig> {
  return require(`./env.${nodeEnv}`).default
}
