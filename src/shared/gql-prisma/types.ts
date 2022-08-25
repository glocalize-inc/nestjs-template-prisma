// export const QueryMode = { default: 'default', insensitive: 'insensitive' }
// export type QueryMode = typeof QueryMode[keyof typeof QueryMode]

export type DateTimeNullableFilter = {
  equals?: Date | string | null
  in?: Array<Date> | Array<string> | null
  notIn?: Array<Date> | Array<string> | null
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: NestedDateTimeNullableFilter | Date | string | null
}

export type NestedDateTimeNullableFilter = {
  equals?: Date | string | null
  in?: Array<Date> | Array<string> | null
  notIn?: Array<Date> | Array<string> | null
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: NestedDateTimeNullableFilter | Date | string | null
}

export type DateTimeFilter = {
  equals?: Date | string
  in?: Array<Date> | Array<string>
  notIn?: Array<Date> | Array<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: NestedDateTimeFilter | Date | string
}

type NestedDateTimeFilter = {
  equals?: Date | string
  in?: Array<Date> | Array<string>
  notIn?: Array<Date> | Array<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: NestedDateTimeFilter | Date | string
}

export type Filter<T = string> = {
  equals?: T
  in?: Array<T>
  notIn?: Array<T>
  lt?: T
  lte?: T
  gt?: T
  gte?: T
  contains?: T
  startsWith?: T
  endsWith?: T
  // mode?: QueryMode
  not?: NestedFilter | T
}

type NestedFilter<T = string> = {
  equals?: T
  in?: Array<T>
  notIn?: Array<T>
  lt?: T
  lte?: T
  gt?: T
  gte?: T
  contains?: T
  startsWith?: T
  endsWith?: T
  // mode?: QueryMode
  not?: NestedFilter | T
}

export type NullableFilter<T = string> = {
  equals?: T | null
  in?: Array<T> | null
  notIn?: Array<T> | null
  lt?: T
  lte?: T
  gt?: T
  gte?: T
  contains?: T
  startsWith?: T
  endsWith?: T
  // mode?: QueryMode
  not?: NestedNullableFilter | T | null
}
type NestedNullableFilter<T = string> = {
  equals?: T | null
  in?: Array<T> | null
  notIn?: Array<T> | null
  lt?: T
  lte?: T
  gt?: T
  gte?: T
  contains?: T
  startsWith?: T
  endsWith?: T
  // mode?: QueryMode
  not?: NestedNullableFilter | T | null
}
