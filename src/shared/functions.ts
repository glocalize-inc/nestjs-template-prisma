import { UnknownElementException } from '@nestjs/core/errors/exceptions/unknown-element.exception'
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface'
import { BinaryLike, createHash, Encoding } from 'crypto'
import { PaginatedResult } from './types'

type ApiKeyOptions = {
  securitySchemeObject: SecuritySchemeObject
  name: string
}

const h = createHash('md5').update

function createMD5Hash(data: BinaryLike)
function createMD5Hash(data: string, inputEncoding: Encoding)
function createMD5Hash(a, b?) {
  return h(a, b)
}

export function createMD5HexHash(data: BinaryLike)
export function createMD5HexHash(data: string, inputEncoding: Encoding)
export function createMD5HexHash(a, b?) {
  return createMD5HexHash(a, b).digest('hex')
}

export function getSunday(date: Date = new Date()) {
  const sunday = new Date(date)
  sunday.setDate(date.getDate() + ((7 - date.getDay()) % 7))
  return sunday
}

export function getMonday(date: Date = new Date()) {
  const monday = new Date(date)
  monday.setDate(date.getDate() - ((date.getDay() + 6) % 7))
  return monday
}

/**
 *
 * @param week // -1 then 1 week ago, -2 then 2 weeks ago...
 * @private
 */
export function getMondayAndSunday(week: number = 0) {
  const date = new Date()
  date.setDate(date.getDate() + week * 7)
  return [getMonday(date), getSunday(date)]
}

export function getYesterDay(date = new Date()) {
  const yesterday = new Date(date)
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday
}

export function get1WeekAgo(date = new Date()) {
  const lastWeek = new Date(date)
  lastWeek.setDate(lastWeek.getDate() - 7)
  return lastWeek
}

export function get1YearAgo(startDate?: number | string | Date): Date {
  const copied = new Date(startDate)
  copied.setFullYear(copied.getFullYear() - 1)
  return copied
}

export function getDiffDate(a: string | Date, b: string | Date) {
  switch (typeof a) {
    case 'string':
      a = new Date(a)
    case 'object':
      break
    default:
      throw new UnknownElementException(typeof a)
  }
  switch (typeof b) {
    case 'string':
      b = new Date(b)
    case 'object':
      break
    default:
      throw new UnknownElementException(typeof b)
  }
  return (a.valueOf() - b.valueOf()) / 86400000
}

export function paginate<T = any>([data, count]: [
  T[],
  number,
]): PaginatedResult<T> {
  return { data, count }
}

export function safeRequire<T = any>(path: string, loader?: () => T): T | null {
  try {
    /* istanbul ignore next */
    const pack = loader ? loader() : require(path)
    return pack
  } catch (_) {
    /* istanbul ignore next */
    return null
  }
}
