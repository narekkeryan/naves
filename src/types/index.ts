export type GenericFunction<T extends unknown[], R> = (...args: T) => R;

export type PlainObject = Record<string, unknown>;

export type PrimitiveType = number | bigint | string | boolean | null | undefined | symbol;

export type ReferenceType = PlainObject | GenericFunction<unknown[], unknown>;
