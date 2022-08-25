import { DECORATORS } from '@nestjs/swagger/dist/constants'
import { extendMetadata } from '@nestjs/swagger/dist/utils/extend-metadata.util'

type GloApiSecurityParameters = {
  includeOriginatorEmail?: boolean
  names?: string[]
}
export const GloApiSecurity = (
  { includeOriginatorEmail, names }: GloApiSecurityParameters = {
    includeOriginatorEmail: false,
    names: ['user', 'email', 'role'],
  },
): any => {
  if (includeOriginatorEmail) names.push('originatorEmail')
  let metadata = names.map((name) => ({ [name]: [] }))
  return (target, key, descriptor): any => {
    if (descriptor) {
      metadata = extendMetadata(
        metadata,
        DECORATORS.API_SECURITY,
        descriptor.value,
      )
      Reflect.defineMetadata(
        DECORATORS.API_SECURITY,
        metadata,
        descriptor.value,
      )
      return descriptor
    }
    metadata = extendMetadata(metadata, DECORATORS.API_SECURITY, target)
    Reflect.defineMetadata(DECORATORS.API_SECURITY, metadata, target)
    return target
  }
}
