
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model JenisSampah
 * 
 */
export type JenisSampah = $Result.DefaultSelection<Prisma.$JenisSampahPayload>
/**
 * Model Wilayah
 * 
 */
export type Wilayah = $Result.DefaultSelection<Prisma.$WilayahPayload>
/**
 * Model LaporanSampah
 * 
 */
export type LaporanSampah = $Result.DefaultSelection<Prisma.$LaporanSampahPayload>
/**
 * Model FotoSampah
 * 
 */
export type FotoSampah = $Result.DefaultSelection<Prisma.$FotoSampahPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jenisSampah`: Exposes CRUD operations for the **JenisSampah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JenisSampahs
    * const jenisSampahs = await prisma.jenisSampah.findMany()
    * ```
    */
  get jenisSampah(): Prisma.JenisSampahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wilayah`: Exposes CRUD operations for the **Wilayah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wilayahs
    * const wilayahs = await prisma.wilayah.findMany()
    * ```
    */
  get wilayah(): Prisma.WilayahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laporanSampah`: Exposes CRUD operations for the **LaporanSampah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LaporanSampahs
    * const laporanSampahs = await prisma.laporanSampah.findMany()
    * ```
    */
  get laporanSampah(): Prisma.LaporanSampahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fotoSampah`: Exposes CRUD operations for the **FotoSampah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FotoSampahs
    * const fotoSampahs = await prisma.fotoSampah.findMany()
    * ```
    */
  get fotoSampah(): Prisma.FotoSampahDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    JenisSampah: 'JenisSampah',
    Wilayah: 'Wilayah',
    LaporanSampah: 'LaporanSampah',
    FotoSampah: 'FotoSampah'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "jenisSampah" | "wilayah" | "laporanSampah" | "fotoSampah"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      JenisSampah: {
        payload: Prisma.$JenisSampahPayload<ExtArgs>
        fields: Prisma.JenisSampahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JenisSampahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisSampahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JenisSampahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisSampahPayload>
          }
          findFirst: {
            args: Prisma.JenisSampahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisSampahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JenisSampahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisSampahPayload>
          }
          findMany: {
            args: Prisma.JenisSampahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisSampahPayload>[]
          }
          create: {
            args: Prisma.JenisSampahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisSampahPayload>
          }
          createMany: {
            args: Prisma.JenisSampahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JenisSampahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisSampahPayload>[]
          }
          delete: {
            args: Prisma.JenisSampahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisSampahPayload>
          }
          update: {
            args: Prisma.JenisSampahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisSampahPayload>
          }
          deleteMany: {
            args: Prisma.JenisSampahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JenisSampahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JenisSampahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisSampahPayload>[]
          }
          upsert: {
            args: Prisma.JenisSampahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisSampahPayload>
          }
          aggregate: {
            args: Prisma.JenisSampahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJenisSampah>
          }
          groupBy: {
            args: Prisma.JenisSampahGroupByArgs<ExtArgs>
            result: $Utils.Optional<JenisSampahGroupByOutputType>[]
          }
          count: {
            args: Prisma.JenisSampahCountArgs<ExtArgs>
            result: $Utils.Optional<JenisSampahCountAggregateOutputType> | number
          }
        }
      }
      Wilayah: {
        payload: Prisma.$WilayahPayload<ExtArgs>
        fields: Prisma.WilayahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WilayahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WilayahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayahPayload>
          }
          findFirst: {
            args: Prisma.WilayahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WilayahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayahPayload>
          }
          findMany: {
            args: Prisma.WilayahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayahPayload>[]
          }
          create: {
            args: Prisma.WilayahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayahPayload>
          }
          createMany: {
            args: Prisma.WilayahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WilayahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayahPayload>[]
          }
          delete: {
            args: Prisma.WilayahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayahPayload>
          }
          update: {
            args: Prisma.WilayahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayahPayload>
          }
          deleteMany: {
            args: Prisma.WilayahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WilayahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WilayahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayahPayload>[]
          }
          upsert: {
            args: Prisma.WilayahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayahPayload>
          }
          aggregate: {
            args: Prisma.WilayahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWilayah>
          }
          groupBy: {
            args: Prisma.WilayahGroupByArgs<ExtArgs>
            result: $Utils.Optional<WilayahGroupByOutputType>[]
          }
          count: {
            args: Prisma.WilayahCountArgs<ExtArgs>
            result: $Utils.Optional<WilayahCountAggregateOutputType> | number
          }
        }
      }
      LaporanSampah: {
        payload: Prisma.$LaporanSampahPayload<ExtArgs>
        fields: Prisma.LaporanSampahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaporanSampahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanSampahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaporanSampahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanSampahPayload>
          }
          findFirst: {
            args: Prisma.LaporanSampahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanSampahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaporanSampahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanSampahPayload>
          }
          findMany: {
            args: Prisma.LaporanSampahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanSampahPayload>[]
          }
          create: {
            args: Prisma.LaporanSampahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanSampahPayload>
          }
          createMany: {
            args: Prisma.LaporanSampahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaporanSampahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanSampahPayload>[]
          }
          delete: {
            args: Prisma.LaporanSampahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanSampahPayload>
          }
          update: {
            args: Prisma.LaporanSampahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanSampahPayload>
          }
          deleteMany: {
            args: Prisma.LaporanSampahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaporanSampahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaporanSampahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanSampahPayload>[]
          }
          upsert: {
            args: Prisma.LaporanSampahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanSampahPayload>
          }
          aggregate: {
            args: Prisma.LaporanSampahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporanSampah>
          }
          groupBy: {
            args: Prisma.LaporanSampahGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaporanSampahGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaporanSampahCountArgs<ExtArgs>
            result: $Utils.Optional<LaporanSampahCountAggregateOutputType> | number
          }
        }
      }
      FotoSampah: {
        payload: Prisma.$FotoSampahPayload<ExtArgs>
        fields: Prisma.FotoSampahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoSampahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoSampahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoSampahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoSampahPayload>
          }
          findFirst: {
            args: Prisma.FotoSampahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoSampahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoSampahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoSampahPayload>
          }
          findMany: {
            args: Prisma.FotoSampahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoSampahPayload>[]
          }
          create: {
            args: Prisma.FotoSampahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoSampahPayload>
          }
          createMany: {
            args: Prisma.FotoSampahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FotoSampahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoSampahPayload>[]
          }
          delete: {
            args: Prisma.FotoSampahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoSampahPayload>
          }
          update: {
            args: Prisma.FotoSampahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoSampahPayload>
          }
          deleteMany: {
            args: Prisma.FotoSampahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoSampahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FotoSampahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoSampahPayload>[]
          }
          upsert: {
            args: Prisma.FotoSampahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoSampahPayload>
          }
          aggregate: {
            args: Prisma.FotoSampahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFotoSampah>
          }
          groupBy: {
            args: Prisma.FotoSampahGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoSampahGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoSampahCountArgs<ExtArgs>
            result: $Utils.Optional<FotoSampahCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    jenisSampah?: JenisSampahOmit
    wilayah?: WilayahOmit
    laporanSampah?: LaporanSampahOmit
    fotoSampah?: FotoSampahOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    laporan: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | UserCountOutputTypeCountLaporanArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLaporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanSampahWhereInput
  }


  /**
   * Count Type JenisSampahCountOutputType
   */

  export type JenisSampahCountOutputType = {
    laporan: number
  }

  export type JenisSampahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | JenisSampahCountOutputTypeCountLaporanArgs
  }

  // Custom InputTypes
  /**
   * JenisSampahCountOutputType without action
   */
  export type JenisSampahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampahCountOutputType
     */
    select?: JenisSampahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JenisSampahCountOutputType without action
   */
  export type JenisSampahCountOutputTypeCountLaporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanSampahWhereInput
  }


  /**
   * Count Type WilayahCountOutputType
   */

  export type WilayahCountOutputType = {
    laporan: number
  }

  export type WilayahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | WilayahCountOutputTypeCountLaporanArgs
  }

  // Custom InputTypes
  /**
   * WilayahCountOutputType without action
   */
  export type WilayahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WilayahCountOutputType
     */
    select?: WilayahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WilayahCountOutputType without action
   */
  export type WilayahCountOutputTypeCountLaporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanSampahWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    noHp: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    noHp: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    noHp: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    noHp?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    noHp?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    noHp?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nama: string
    email: string
    noHp: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
    laporan?: boolean | User$laporanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "noHp", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | User$laporanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      laporan: Prisma.$LaporanSampahPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string
      noHp: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laporan<T extends User$laporanArgs<ExtArgs> = {}>(args?: Subset<T, User$laporanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nama: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly noHp: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.laporan
   */
  export type User$laporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    where?: LaporanSampahWhereInput
    orderBy?: LaporanSampahOrderByWithRelationInput | LaporanSampahOrderByWithRelationInput[]
    cursor?: LaporanSampahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanSampahScalarFieldEnum | LaporanSampahScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model JenisSampah
   */

  export type AggregateJenisSampah = {
    _count: JenisSampahCountAggregateOutputType | null
    _min: JenisSampahMinAggregateOutputType | null
    _max: JenisSampahMaxAggregateOutputType | null
  }

  export type JenisSampahMinAggregateOutputType = {
    id: string | null
    namaJenis: string | null
  }

  export type JenisSampahMaxAggregateOutputType = {
    id: string | null
    namaJenis: string | null
  }

  export type JenisSampahCountAggregateOutputType = {
    id: number
    namaJenis: number
    _all: number
  }


  export type JenisSampahMinAggregateInputType = {
    id?: true
    namaJenis?: true
  }

  export type JenisSampahMaxAggregateInputType = {
    id?: true
    namaJenis?: true
  }

  export type JenisSampahCountAggregateInputType = {
    id?: true
    namaJenis?: true
    _all?: true
  }

  export type JenisSampahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisSampah to aggregate.
     */
    where?: JenisSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisSampahs to fetch.
     */
    orderBy?: JenisSampahOrderByWithRelationInput | JenisSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JenisSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JenisSampahs
    **/
    _count?: true | JenisSampahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JenisSampahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JenisSampahMaxAggregateInputType
  }

  export type GetJenisSampahAggregateType<T extends JenisSampahAggregateArgs> = {
        [P in keyof T & keyof AggregateJenisSampah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJenisSampah[P]>
      : GetScalarType<T[P], AggregateJenisSampah[P]>
  }




  export type JenisSampahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JenisSampahWhereInput
    orderBy?: JenisSampahOrderByWithAggregationInput | JenisSampahOrderByWithAggregationInput[]
    by: JenisSampahScalarFieldEnum[] | JenisSampahScalarFieldEnum
    having?: JenisSampahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JenisSampahCountAggregateInputType | true
    _min?: JenisSampahMinAggregateInputType
    _max?: JenisSampahMaxAggregateInputType
  }

  export type JenisSampahGroupByOutputType = {
    id: string
    namaJenis: string
    _count: JenisSampahCountAggregateOutputType | null
    _min: JenisSampahMinAggregateOutputType | null
    _max: JenisSampahMaxAggregateOutputType | null
  }

  type GetJenisSampahGroupByPayload<T extends JenisSampahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JenisSampahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JenisSampahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JenisSampahGroupByOutputType[P]>
            : GetScalarType<T[P], JenisSampahGroupByOutputType[P]>
        }
      >
    >


  export type JenisSampahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaJenis?: boolean
    laporan?: boolean | JenisSampah$laporanArgs<ExtArgs>
    _count?: boolean | JenisSampahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jenisSampah"]>

  export type JenisSampahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaJenis?: boolean
  }, ExtArgs["result"]["jenisSampah"]>

  export type JenisSampahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaJenis?: boolean
  }, ExtArgs["result"]["jenisSampah"]>

  export type JenisSampahSelectScalar = {
    id?: boolean
    namaJenis?: boolean
  }

  export type JenisSampahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaJenis", ExtArgs["result"]["jenisSampah"]>
  export type JenisSampahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | JenisSampah$laporanArgs<ExtArgs>
    _count?: boolean | JenisSampahCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JenisSampahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JenisSampahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JenisSampahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JenisSampah"
    objects: {
      laporan: Prisma.$LaporanSampahPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaJenis: string
    }, ExtArgs["result"]["jenisSampah"]>
    composites: {}
  }

  type JenisSampahGetPayload<S extends boolean | null | undefined | JenisSampahDefaultArgs> = $Result.GetResult<Prisma.$JenisSampahPayload, S>

  type JenisSampahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JenisSampahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JenisSampahCountAggregateInputType | true
    }

  export interface JenisSampahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JenisSampah'], meta: { name: 'JenisSampah' } }
    /**
     * Find zero or one JenisSampah that matches the filter.
     * @param {JenisSampahFindUniqueArgs} args - Arguments to find a JenisSampah
     * @example
     * // Get one JenisSampah
     * const jenisSampah = await prisma.jenisSampah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JenisSampahFindUniqueArgs>(args: SelectSubset<T, JenisSampahFindUniqueArgs<ExtArgs>>): Prisma__JenisSampahClient<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JenisSampah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JenisSampahFindUniqueOrThrowArgs} args - Arguments to find a JenisSampah
     * @example
     * // Get one JenisSampah
     * const jenisSampah = await prisma.jenisSampah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JenisSampahFindUniqueOrThrowArgs>(args: SelectSubset<T, JenisSampahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JenisSampahClient<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisSampah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisSampahFindFirstArgs} args - Arguments to find a JenisSampah
     * @example
     * // Get one JenisSampah
     * const jenisSampah = await prisma.jenisSampah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JenisSampahFindFirstArgs>(args?: SelectSubset<T, JenisSampahFindFirstArgs<ExtArgs>>): Prisma__JenisSampahClient<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisSampah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisSampahFindFirstOrThrowArgs} args - Arguments to find a JenisSampah
     * @example
     * // Get one JenisSampah
     * const jenisSampah = await prisma.jenisSampah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JenisSampahFindFirstOrThrowArgs>(args?: SelectSubset<T, JenisSampahFindFirstOrThrowArgs<ExtArgs>>): Prisma__JenisSampahClient<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JenisSampahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisSampahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JenisSampahs
     * const jenisSampahs = await prisma.jenisSampah.findMany()
     * 
     * // Get first 10 JenisSampahs
     * const jenisSampahs = await prisma.jenisSampah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jenisSampahWithIdOnly = await prisma.jenisSampah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JenisSampahFindManyArgs>(args?: SelectSubset<T, JenisSampahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JenisSampah.
     * @param {JenisSampahCreateArgs} args - Arguments to create a JenisSampah.
     * @example
     * // Create one JenisSampah
     * const JenisSampah = await prisma.jenisSampah.create({
     *   data: {
     *     // ... data to create a JenisSampah
     *   }
     * })
     * 
     */
    create<T extends JenisSampahCreateArgs>(args: SelectSubset<T, JenisSampahCreateArgs<ExtArgs>>): Prisma__JenisSampahClient<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JenisSampahs.
     * @param {JenisSampahCreateManyArgs} args - Arguments to create many JenisSampahs.
     * @example
     * // Create many JenisSampahs
     * const jenisSampah = await prisma.jenisSampah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JenisSampahCreateManyArgs>(args?: SelectSubset<T, JenisSampahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JenisSampahs and returns the data saved in the database.
     * @param {JenisSampahCreateManyAndReturnArgs} args - Arguments to create many JenisSampahs.
     * @example
     * // Create many JenisSampahs
     * const jenisSampah = await prisma.jenisSampah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JenisSampahs and only return the `id`
     * const jenisSampahWithIdOnly = await prisma.jenisSampah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JenisSampahCreateManyAndReturnArgs>(args?: SelectSubset<T, JenisSampahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JenisSampah.
     * @param {JenisSampahDeleteArgs} args - Arguments to delete one JenisSampah.
     * @example
     * // Delete one JenisSampah
     * const JenisSampah = await prisma.jenisSampah.delete({
     *   where: {
     *     // ... filter to delete one JenisSampah
     *   }
     * })
     * 
     */
    delete<T extends JenisSampahDeleteArgs>(args: SelectSubset<T, JenisSampahDeleteArgs<ExtArgs>>): Prisma__JenisSampahClient<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JenisSampah.
     * @param {JenisSampahUpdateArgs} args - Arguments to update one JenisSampah.
     * @example
     * // Update one JenisSampah
     * const jenisSampah = await prisma.jenisSampah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JenisSampahUpdateArgs>(args: SelectSubset<T, JenisSampahUpdateArgs<ExtArgs>>): Prisma__JenisSampahClient<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JenisSampahs.
     * @param {JenisSampahDeleteManyArgs} args - Arguments to filter JenisSampahs to delete.
     * @example
     * // Delete a few JenisSampahs
     * const { count } = await prisma.jenisSampah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JenisSampahDeleteManyArgs>(args?: SelectSubset<T, JenisSampahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisSampahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisSampahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JenisSampahs
     * const jenisSampah = await prisma.jenisSampah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JenisSampahUpdateManyArgs>(args: SelectSubset<T, JenisSampahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisSampahs and returns the data updated in the database.
     * @param {JenisSampahUpdateManyAndReturnArgs} args - Arguments to update many JenisSampahs.
     * @example
     * // Update many JenisSampahs
     * const jenisSampah = await prisma.jenisSampah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JenisSampahs and only return the `id`
     * const jenisSampahWithIdOnly = await prisma.jenisSampah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JenisSampahUpdateManyAndReturnArgs>(args: SelectSubset<T, JenisSampahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JenisSampah.
     * @param {JenisSampahUpsertArgs} args - Arguments to update or create a JenisSampah.
     * @example
     * // Update or create a JenisSampah
     * const jenisSampah = await prisma.jenisSampah.upsert({
     *   create: {
     *     // ... data to create a JenisSampah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JenisSampah we want to update
     *   }
     * })
     */
    upsert<T extends JenisSampahUpsertArgs>(args: SelectSubset<T, JenisSampahUpsertArgs<ExtArgs>>): Prisma__JenisSampahClient<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JenisSampahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisSampahCountArgs} args - Arguments to filter JenisSampahs to count.
     * @example
     * // Count the number of JenisSampahs
     * const count = await prisma.jenisSampah.count({
     *   where: {
     *     // ... the filter for the JenisSampahs we want to count
     *   }
     * })
    **/
    count<T extends JenisSampahCountArgs>(
      args?: Subset<T, JenisSampahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JenisSampahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JenisSampah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisSampahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JenisSampahAggregateArgs>(args: Subset<T, JenisSampahAggregateArgs>): Prisma.PrismaPromise<GetJenisSampahAggregateType<T>>

    /**
     * Group by JenisSampah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisSampahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JenisSampahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JenisSampahGroupByArgs['orderBy'] }
        : { orderBy?: JenisSampahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JenisSampahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJenisSampahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JenisSampah model
   */
  readonly fields: JenisSampahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JenisSampah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JenisSampahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laporan<T extends JenisSampah$laporanArgs<ExtArgs> = {}>(args?: Subset<T, JenisSampah$laporanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JenisSampah model
   */
  interface JenisSampahFieldRefs {
    readonly id: FieldRef<"JenisSampah", 'String'>
    readonly namaJenis: FieldRef<"JenisSampah", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JenisSampah findUnique
   */
  export type JenisSampahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisSampahInclude<ExtArgs> | null
    /**
     * Filter, which JenisSampah to fetch.
     */
    where: JenisSampahWhereUniqueInput
  }

  /**
   * JenisSampah findUniqueOrThrow
   */
  export type JenisSampahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisSampahInclude<ExtArgs> | null
    /**
     * Filter, which JenisSampah to fetch.
     */
    where: JenisSampahWhereUniqueInput
  }

  /**
   * JenisSampah findFirst
   */
  export type JenisSampahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisSampahInclude<ExtArgs> | null
    /**
     * Filter, which JenisSampah to fetch.
     */
    where?: JenisSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisSampahs to fetch.
     */
    orderBy?: JenisSampahOrderByWithRelationInput | JenisSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisSampahs.
     */
    cursor?: JenisSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisSampahs.
     */
    distinct?: JenisSampahScalarFieldEnum | JenisSampahScalarFieldEnum[]
  }

  /**
   * JenisSampah findFirstOrThrow
   */
  export type JenisSampahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisSampahInclude<ExtArgs> | null
    /**
     * Filter, which JenisSampah to fetch.
     */
    where?: JenisSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisSampahs to fetch.
     */
    orderBy?: JenisSampahOrderByWithRelationInput | JenisSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisSampahs.
     */
    cursor?: JenisSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisSampahs.
     */
    distinct?: JenisSampahScalarFieldEnum | JenisSampahScalarFieldEnum[]
  }

  /**
   * JenisSampah findMany
   */
  export type JenisSampahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisSampahInclude<ExtArgs> | null
    /**
     * Filter, which JenisSampahs to fetch.
     */
    where?: JenisSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisSampahs to fetch.
     */
    orderBy?: JenisSampahOrderByWithRelationInput | JenisSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JenisSampahs.
     */
    cursor?: JenisSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisSampahs.
     */
    distinct?: JenisSampahScalarFieldEnum | JenisSampahScalarFieldEnum[]
  }

  /**
   * JenisSampah create
   */
  export type JenisSampahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisSampahInclude<ExtArgs> | null
    /**
     * The data needed to create a JenisSampah.
     */
    data: XOR<JenisSampahCreateInput, JenisSampahUncheckedCreateInput>
  }

  /**
   * JenisSampah createMany
   */
  export type JenisSampahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JenisSampahs.
     */
    data: JenisSampahCreateManyInput | JenisSampahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisSampah createManyAndReturn
   */
  export type JenisSampahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * The data used to create many JenisSampahs.
     */
    data: JenisSampahCreateManyInput | JenisSampahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisSampah update
   */
  export type JenisSampahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisSampahInclude<ExtArgs> | null
    /**
     * The data needed to update a JenisSampah.
     */
    data: XOR<JenisSampahUpdateInput, JenisSampahUncheckedUpdateInput>
    /**
     * Choose, which JenisSampah to update.
     */
    where: JenisSampahWhereUniqueInput
  }

  /**
   * JenisSampah updateMany
   */
  export type JenisSampahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JenisSampahs.
     */
    data: XOR<JenisSampahUpdateManyMutationInput, JenisSampahUncheckedUpdateManyInput>
    /**
     * Filter which JenisSampahs to update
     */
    where?: JenisSampahWhereInput
    /**
     * Limit how many JenisSampahs to update.
     */
    limit?: number
  }

  /**
   * JenisSampah updateManyAndReturn
   */
  export type JenisSampahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * The data used to update JenisSampahs.
     */
    data: XOR<JenisSampahUpdateManyMutationInput, JenisSampahUncheckedUpdateManyInput>
    /**
     * Filter which JenisSampahs to update
     */
    where?: JenisSampahWhereInput
    /**
     * Limit how many JenisSampahs to update.
     */
    limit?: number
  }

  /**
   * JenisSampah upsert
   */
  export type JenisSampahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisSampahInclude<ExtArgs> | null
    /**
     * The filter to search for the JenisSampah to update in case it exists.
     */
    where: JenisSampahWhereUniqueInput
    /**
     * In case the JenisSampah found by the `where` argument doesn't exist, create a new JenisSampah with this data.
     */
    create: XOR<JenisSampahCreateInput, JenisSampahUncheckedCreateInput>
    /**
     * In case the JenisSampah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JenisSampahUpdateInput, JenisSampahUncheckedUpdateInput>
  }

  /**
   * JenisSampah delete
   */
  export type JenisSampahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisSampahInclude<ExtArgs> | null
    /**
     * Filter which JenisSampah to delete.
     */
    where: JenisSampahWhereUniqueInput
  }

  /**
   * JenisSampah deleteMany
   */
  export type JenisSampahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisSampahs to delete
     */
    where?: JenisSampahWhereInput
    /**
     * Limit how many JenisSampahs to delete.
     */
    limit?: number
  }

  /**
   * JenisSampah.laporan
   */
  export type JenisSampah$laporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    where?: LaporanSampahWhereInput
    orderBy?: LaporanSampahOrderByWithRelationInput | LaporanSampahOrderByWithRelationInput[]
    cursor?: LaporanSampahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanSampahScalarFieldEnum | LaporanSampahScalarFieldEnum[]
  }

  /**
   * JenisSampah without action
   */
  export type JenisSampahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisSampah
     */
    select?: JenisSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisSampah
     */
    omit?: JenisSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisSampahInclude<ExtArgs> | null
  }


  /**
   * Model Wilayah
   */

  export type AggregateWilayah = {
    _count: WilayahCountAggregateOutputType | null
    _min: WilayahMinAggregateOutputType | null
    _max: WilayahMaxAggregateOutputType | null
  }

  export type WilayahMinAggregateOutputType = {
    id: string | null
    namaWilayah: string | null
  }

  export type WilayahMaxAggregateOutputType = {
    id: string | null
    namaWilayah: string | null
  }

  export type WilayahCountAggregateOutputType = {
    id: number
    namaWilayah: number
    _all: number
  }


  export type WilayahMinAggregateInputType = {
    id?: true
    namaWilayah?: true
  }

  export type WilayahMaxAggregateInputType = {
    id?: true
    namaWilayah?: true
  }

  export type WilayahCountAggregateInputType = {
    id?: true
    namaWilayah?: true
    _all?: true
  }

  export type WilayahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wilayah to aggregate.
     */
    where?: WilayahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wilayahs to fetch.
     */
    orderBy?: WilayahOrderByWithRelationInput | WilayahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WilayahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wilayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wilayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wilayahs
    **/
    _count?: true | WilayahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WilayahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WilayahMaxAggregateInputType
  }

  export type GetWilayahAggregateType<T extends WilayahAggregateArgs> = {
        [P in keyof T & keyof AggregateWilayah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWilayah[P]>
      : GetScalarType<T[P], AggregateWilayah[P]>
  }




  export type WilayahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WilayahWhereInput
    orderBy?: WilayahOrderByWithAggregationInput | WilayahOrderByWithAggregationInput[]
    by: WilayahScalarFieldEnum[] | WilayahScalarFieldEnum
    having?: WilayahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WilayahCountAggregateInputType | true
    _min?: WilayahMinAggregateInputType
    _max?: WilayahMaxAggregateInputType
  }

  export type WilayahGroupByOutputType = {
    id: string
    namaWilayah: string
    _count: WilayahCountAggregateOutputType | null
    _min: WilayahMinAggregateOutputType | null
    _max: WilayahMaxAggregateOutputType | null
  }

  type GetWilayahGroupByPayload<T extends WilayahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WilayahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WilayahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WilayahGroupByOutputType[P]>
            : GetScalarType<T[P], WilayahGroupByOutputType[P]>
        }
      >
    >


  export type WilayahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaWilayah?: boolean
    laporan?: boolean | Wilayah$laporanArgs<ExtArgs>
    _count?: boolean | WilayahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wilayah"]>

  export type WilayahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaWilayah?: boolean
  }, ExtArgs["result"]["wilayah"]>

  export type WilayahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaWilayah?: boolean
  }, ExtArgs["result"]["wilayah"]>

  export type WilayahSelectScalar = {
    id?: boolean
    namaWilayah?: boolean
  }

  export type WilayahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaWilayah", ExtArgs["result"]["wilayah"]>
  export type WilayahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | Wilayah$laporanArgs<ExtArgs>
    _count?: boolean | WilayahCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WilayahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WilayahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WilayahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wilayah"
    objects: {
      laporan: Prisma.$LaporanSampahPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaWilayah: string
    }, ExtArgs["result"]["wilayah"]>
    composites: {}
  }

  type WilayahGetPayload<S extends boolean | null | undefined | WilayahDefaultArgs> = $Result.GetResult<Prisma.$WilayahPayload, S>

  type WilayahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WilayahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WilayahCountAggregateInputType | true
    }

  export interface WilayahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wilayah'], meta: { name: 'Wilayah' } }
    /**
     * Find zero or one Wilayah that matches the filter.
     * @param {WilayahFindUniqueArgs} args - Arguments to find a Wilayah
     * @example
     * // Get one Wilayah
     * const wilayah = await prisma.wilayah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WilayahFindUniqueArgs>(args: SelectSubset<T, WilayahFindUniqueArgs<ExtArgs>>): Prisma__WilayahClient<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wilayah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WilayahFindUniqueOrThrowArgs} args - Arguments to find a Wilayah
     * @example
     * // Get one Wilayah
     * const wilayah = await prisma.wilayah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WilayahFindUniqueOrThrowArgs>(args: SelectSubset<T, WilayahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WilayahClient<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wilayah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayahFindFirstArgs} args - Arguments to find a Wilayah
     * @example
     * // Get one Wilayah
     * const wilayah = await prisma.wilayah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WilayahFindFirstArgs>(args?: SelectSubset<T, WilayahFindFirstArgs<ExtArgs>>): Prisma__WilayahClient<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wilayah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayahFindFirstOrThrowArgs} args - Arguments to find a Wilayah
     * @example
     * // Get one Wilayah
     * const wilayah = await prisma.wilayah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WilayahFindFirstOrThrowArgs>(args?: SelectSubset<T, WilayahFindFirstOrThrowArgs<ExtArgs>>): Prisma__WilayahClient<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wilayahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wilayahs
     * const wilayahs = await prisma.wilayah.findMany()
     * 
     * // Get first 10 Wilayahs
     * const wilayahs = await prisma.wilayah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wilayahWithIdOnly = await prisma.wilayah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WilayahFindManyArgs>(args?: SelectSubset<T, WilayahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wilayah.
     * @param {WilayahCreateArgs} args - Arguments to create a Wilayah.
     * @example
     * // Create one Wilayah
     * const Wilayah = await prisma.wilayah.create({
     *   data: {
     *     // ... data to create a Wilayah
     *   }
     * })
     * 
     */
    create<T extends WilayahCreateArgs>(args: SelectSubset<T, WilayahCreateArgs<ExtArgs>>): Prisma__WilayahClient<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wilayahs.
     * @param {WilayahCreateManyArgs} args - Arguments to create many Wilayahs.
     * @example
     * // Create many Wilayahs
     * const wilayah = await prisma.wilayah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WilayahCreateManyArgs>(args?: SelectSubset<T, WilayahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wilayahs and returns the data saved in the database.
     * @param {WilayahCreateManyAndReturnArgs} args - Arguments to create many Wilayahs.
     * @example
     * // Create many Wilayahs
     * const wilayah = await prisma.wilayah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wilayahs and only return the `id`
     * const wilayahWithIdOnly = await prisma.wilayah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WilayahCreateManyAndReturnArgs>(args?: SelectSubset<T, WilayahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wilayah.
     * @param {WilayahDeleteArgs} args - Arguments to delete one Wilayah.
     * @example
     * // Delete one Wilayah
     * const Wilayah = await prisma.wilayah.delete({
     *   where: {
     *     // ... filter to delete one Wilayah
     *   }
     * })
     * 
     */
    delete<T extends WilayahDeleteArgs>(args: SelectSubset<T, WilayahDeleteArgs<ExtArgs>>): Prisma__WilayahClient<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wilayah.
     * @param {WilayahUpdateArgs} args - Arguments to update one Wilayah.
     * @example
     * // Update one Wilayah
     * const wilayah = await prisma.wilayah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WilayahUpdateArgs>(args: SelectSubset<T, WilayahUpdateArgs<ExtArgs>>): Prisma__WilayahClient<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wilayahs.
     * @param {WilayahDeleteManyArgs} args - Arguments to filter Wilayahs to delete.
     * @example
     * // Delete a few Wilayahs
     * const { count } = await prisma.wilayah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WilayahDeleteManyArgs>(args?: SelectSubset<T, WilayahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wilayahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wilayahs
     * const wilayah = await prisma.wilayah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WilayahUpdateManyArgs>(args: SelectSubset<T, WilayahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wilayahs and returns the data updated in the database.
     * @param {WilayahUpdateManyAndReturnArgs} args - Arguments to update many Wilayahs.
     * @example
     * // Update many Wilayahs
     * const wilayah = await prisma.wilayah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wilayahs and only return the `id`
     * const wilayahWithIdOnly = await prisma.wilayah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WilayahUpdateManyAndReturnArgs>(args: SelectSubset<T, WilayahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wilayah.
     * @param {WilayahUpsertArgs} args - Arguments to update or create a Wilayah.
     * @example
     * // Update or create a Wilayah
     * const wilayah = await prisma.wilayah.upsert({
     *   create: {
     *     // ... data to create a Wilayah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wilayah we want to update
     *   }
     * })
     */
    upsert<T extends WilayahUpsertArgs>(args: SelectSubset<T, WilayahUpsertArgs<ExtArgs>>): Prisma__WilayahClient<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wilayahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayahCountArgs} args - Arguments to filter Wilayahs to count.
     * @example
     * // Count the number of Wilayahs
     * const count = await prisma.wilayah.count({
     *   where: {
     *     // ... the filter for the Wilayahs we want to count
     *   }
     * })
    **/
    count<T extends WilayahCountArgs>(
      args?: Subset<T, WilayahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WilayahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wilayah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WilayahAggregateArgs>(args: Subset<T, WilayahAggregateArgs>): Prisma.PrismaPromise<GetWilayahAggregateType<T>>

    /**
     * Group by Wilayah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WilayahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WilayahGroupByArgs['orderBy'] }
        : { orderBy?: WilayahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WilayahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWilayahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wilayah model
   */
  readonly fields: WilayahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wilayah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WilayahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laporan<T extends Wilayah$laporanArgs<ExtArgs> = {}>(args?: Subset<T, Wilayah$laporanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wilayah model
   */
  interface WilayahFieldRefs {
    readonly id: FieldRef<"Wilayah", 'String'>
    readonly namaWilayah: FieldRef<"Wilayah", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Wilayah findUnique
   */
  export type WilayahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayahInclude<ExtArgs> | null
    /**
     * Filter, which Wilayah to fetch.
     */
    where: WilayahWhereUniqueInput
  }

  /**
   * Wilayah findUniqueOrThrow
   */
  export type WilayahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayahInclude<ExtArgs> | null
    /**
     * Filter, which Wilayah to fetch.
     */
    where: WilayahWhereUniqueInput
  }

  /**
   * Wilayah findFirst
   */
  export type WilayahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayahInclude<ExtArgs> | null
    /**
     * Filter, which Wilayah to fetch.
     */
    where?: WilayahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wilayahs to fetch.
     */
    orderBy?: WilayahOrderByWithRelationInput | WilayahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wilayahs.
     */
    cursor?: WilayahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wilayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wilayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wilayahs.
     */
    distinct?: WilayahScalarFieldEnum | WilayahScalarFieldEnum[]
  }

  /**
   * Wilayah findFirstOrThrow
   */
  export type WilayahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayahInclude<ExtArgs> | null
    /**
     * Filter, which Wilayah to fetch.
     */
    where?: WilayahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wilayahs to fetch.
     */
    orderBy?: WilayahOrderByWithRelationInput | WilayahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wilayahs.
     */
    cursor?: WilayahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wilayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wilayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wilayahs.
     */
    distinct?: WilayahScalarFieldEnum | WilayahScalarFieldEnum[]
  }

  /**
   * Wilayah findMany
   */
  export type WilayahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayahInclude<ExtArgs> | null
    /**
     * Filter, which Wilayahs to fetch.
     */
    where?: WilayahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wilayahs to fetch.
     */
    orderBy?: WilayahOrderByWithRelationInput | WilayahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wilayahs.
     */
    cursor?: WilayahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wilayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wilayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wilayahs.
     */
    distinct?: WilayahScalarFieldEnum | WilayahScalarFieldEnum[]
  }

  /**
   * Wilayah create
   */
  export type WilayahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayahInclude<ExtArgs> | null
    /**
     * The data needed to create a Wilayah.
     */
    data: XOR<WilayahCreateInput, WilayahUncheckedCreateInput>
  }

  /**
   * Wilayah createMany
   */
  export type WilayahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wilayahs.
     */
    data: WilayahCreateManyInput | WilayahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wilayah createManyAndReturn
   */
  export type WilayahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * The data used to create many Wilayahs.
     */
    data: WilayahCreateManyInput | WilayahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wilayah update
   */
  export type WilayahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayahInclude<ExtArgs> | null
    /**
     * The data needed to update a Wilayah.
     */
    data: XOR<WilayahUpdateInput, WilayahUncheckedUpdateInput>
    /**
     * Choose, which Wilayah to update.
     */
    where: WilayahWhereUniqueInput
  }

  /**
   * Wilayah updateMany
   */
  export type WilayahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wilayahs.
     */
    data: XOR<WilayahUpdateManyMutationInput, WilayahUncheckedUpdateManyInput>
    /**
     * Filter which Wilayahs to update
     */
    where?: WilayahWhereInput
    /**
     * Limit how many Wilayahs to update.
     */
    limit?: number
  }

  /**
   * Wilayah updateManyAndReturn
   */
  export type WilayahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * The data used to update Wilayahs.
     */
    data: XOR<WilayahUpdateManyMutationInput, WilayahUncheckedUpdateManyInput>
    /**
     * Filter which Wilayahs to update
     */
    where?: WilayahWhereInput
    /**
     * Limit how many Wilayahs to update.
     */
    limit?: number
  }

  /**
   * Wilayah upsert
   */
  export type WilayahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayahInclude<ExtArgs> | null
    /**
     * The filter to search for the Wilayah to update in case it exists.
     */
    where: WilayahWhereUniqueInput
    /**
     * In case the Wilayah found by the `where` argument doesn't exist, create a new Wilayah with this data.
     */
    create: XOR<WilayahCreateInput, WilayahUncheckedCreateInput>
    /**
     * In case the Wilayah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WilayahUpdateInput, WilayahUncheckedUpdateInput>
  }

  /**
   * Wilayah delete
   */
  export type WilayahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayahInclude<ExtArgs> | null
    /**
     * Filter which Wilayah to delete.
     */
    where: WilayahWhereUniqueInput
  }

  /**
   * Wilayah deleteMany
   */
  export type WilayahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wilayahs to delete
     */
    where?: WilayahWhereInput
    /**
     * Limit how many Wilayahs to delete.
     */
    limit?: number
  }

  /**
   * Wilayah.laporan
   */
  export type Wilayah$laporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    where?: LaporanSampahWhereInput
    orderBy?: LaporanSampahOrderByWithRelationInput | LaporanSampahOrderByWithRelationInput[]
    cursor?: LaporanSampahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanSampahScalarFieldEnum | LaporanSampahScalarFieldEnum[]
  }

  /**
   * Wilayah without action
   */
  export type WilayahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilayah
     */
    select?: WilayahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilayah
     */
    omit?: WilayahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayahInclude<ExtArgs> | null
  }


  /**
   * Model LaporanSampah
   */

  export type AggregateLaporanSampah = {
    _count: LaporanSampahCountAggregateOutputType | null
    _avg: LaporanSampahAvgAggregateOutputType | null
    _sum: LaporanSampahSumAggregateOutputType | null
    _min: LaporanSampahMinAggregateOutputType | null
    _max: LaporanSampahMaxAggregateOutputType | null
  }

  export type LaporanSampahAvgAggregateOutputType = {
    berat: number | null
  }

  export type LaporanSampahSumAggregateOutputType = {
    berat: number | null
  }

  export type LaporanSampahMinAggregateOutputType = {
    id: string | null
    berat: number | null
    tanggalLapor: Date | null
    userId: string | null
    jenisSampahId: string | null
    wilayahId: string | null
  }

  export type LaporanSampahMaxAggregateOutputType = {
    id: string | null
    berat: number | null
    tanggalLapor: Date | null
    userId: string | null
    jenisSampahId: string | null
    wilayahId: string | null
  }

  export type LaporanSampahCountAggregateOutputType = {
    id: number
    berat: number
    tanggalLapor: number
    userId: number
    jenisSampahId: number
    wilayahId: number
    _all: number
  }


  export type LaporanSampahAvgAggregateInputType = {
    berat?: true
  }

  export type LaporanSampahSumAggregateInputType = {
    berat?: true
  }

  export type LaporanSampahMinAggregateInputType = {
    id?: true
    berat?: true
    tanggalLapor?: true
    userId?: true
    jenisSampahId?: true
    wilayahId?: true
  }

  export type LaporanSampahMaxAggregateInputType = {
    id?: true
    berat?: true
    tanggalLapor?: true
    userId?: true
    jenisSampahId?: true
    wilayahId?: true
  }

  export type LaporanSampahCountAggregateInputType = {
    id?: true
    berat?: true
    tanggalLapor?: true
    userId?: true
    jenisSampahId?: true
    wilayahId?: true
    _all?: true
  }

  export type LaporanSampahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanSampah to aggregate.
     */
    where?: LaporanSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanSampahs to fetch.
     */
    orderBy?: LaporanSampahOrderByWithRelationInput | LaporanSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaporanSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LaporanSampahs
    **/
    _count?: true | LaporanSampahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaporanSampahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaporanSampahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaporanSampahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaporanSampahMaxAggregateInputType
  }

  export type GetLaporanSampahAggregateType<T extends LaporanSampahAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporanSampah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporanSampah[P]>
      : GetScalarType<T[P], AggregateLaporanSampah[P]>
  }




  export type LaporanSampahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanSampahWhereInput
    orderBy?: LaporanSampahOrderByWithAggregationInput | LaporanSampahOrderByWithAggregationInput[]
    by: LaporanSampahScalarFieldEnum[] | LaporanSampahScalarFieldEnum
    having?: LaporanSampahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaporanSampahCountAggregateInputType | true
    _avg?: LaporanSampahAvgAggregateInputType
    _sum?: LaporanSampahSumAggregateInputType
    _min?: LaporanSampahMinAggregateInputType
    _max?: LaporanSampahMaxAggregateInputType
  }

  export type LaporanSampahGroupByOutputType = {
    id: string
    berat: number
    tanggalLapor: Date
    userId: string
    jenisSampahId: string
    wilayahId: string
    _count: LaporanSampahCountAggregateOutputType | null
    _avg: LaporanSampahAvgAggregateOutputType | null
    _sum: LaporanSampahSumAggregateOutputType | null
    _min: LaporanSampahMinAggregateOutputType | null
    _max: LaporanSampahMaxAggregateOutputType | null
  }

  type GetLaporanSampahGroupByPayload<T extends LaporanSampahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaporanSampahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaporanSampahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaporanSampahGroupByOutputType[P]>
            : GetScalarType<T[P], LaporanSampahGroupByOutputType[P]>
        }
      >
    >


  export type LaporanSampahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    berat?: boolean
    tanggalLapor?: boolean
    userId?: boolean
    jenisSampahId?: boolean
    wilayahId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jenisSampah?: boolean | JenisSampahDefaultArgs<ExtArgs>
    wilayah?: boolean | WilayahDefaultArgs<ExtArgs>
    foto?: boolean | LaporanSampah$fotoArgs<ExtArgs>
  }, ExtArgs["result"]["laporanSampah"]>

  export type LaporanSampahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    berat?: boolean
    tanggalLapor?: boolean
    userId?: boolean
    jenisSampahId?: boolean
    wilayahId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jenisSampah?: boolean | JenisSampahDefaultArgs<ExtArgs>
    wilayah?: boolean | WilayahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporanSampah"]>

  export type LaporanSampahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    berat?: boolean
    tanggalLapor?: boolean
    userId?: boolean
    jenisSampahId?: boolean
    wilayahId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jenisSampah?: boolean | JenisSampahDefaultArgs<ExtArgs>
    wilayah?: boolean | WilayahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporanSampah"]>

  export type LaporanSampahSelectScalar = {
    id?: boolean
    berat?: boolean
    tanggalLapor?: boolean
    userId?: boolean
    jenisSampahId?: boolean
    wilayahId?: boolean
  }

  export type LaporanSampahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "berat" | "tanggalLapor" | "userId" | "jenisSampahId" | "wilayahId", ExtArgs["result"]["laporanSampah"]>
  export type LaporanSampahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jenisSampah?: boolean | JenisSampahDefaultArgs<ExtArgs>
    wilayah?: boolean | WilayahDefaultArgs<ExtArgs>
    foto?: boolean | LaporanSampah$fotoArgs<ExtArgs>
  }
  export type LaporanSampahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jenisSampah?: boolean | JenisSampahDefaultArgs<ExtArgs>
    wilayah?: boolean | WilayahDefaultArgs<ExtArgs>
  }
  export type LaporanSampahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jenisSampah?: boolean | JenisSampahDefaultArgs<ExtArgs>
    wilayah?: boolean | WilayahDefaultArgs<ExtArgs>
  }

  export type $LaporanSampahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LaporanSampah"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jenisSampah: Prisma.$JenisSampahPayload<ExtArgs>
      wilayah: Prisma.$WilayahPayload<ExtArgs>
      foto: Prisma.$FotoSampahPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      berat: number
      tanggalLapor: Date
      userId: string
      jenisSampahId: string
      wilayahId: string
    }, ExtArgs["result"]["laporanSampah"]>
    composites: {}
  }

  type LaporanSampahGetPayload<S extends boolean | null | undefined | LaporanSampahDefaultArgs> = $Result.GetResult<Prisma.$LaporanSampahPayload, S>

  type LaporanSampahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaporanSampahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaporanSampahCountAggregateInputType | true
    }

  export interface LaporanSampahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LaporanSampah'], meta: { name: 'LaporanSampah' } }
    /**
     * Find zero or one LaporanSampah that matches the filter.
     * @param {LaporanSampahFindUniqueArgs} args - Arguments to find a LaporanSampah
     * @example
     * // Get one LaporanSampah
     * const laporanSampah = await prisma.laporanSampah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanSampahFindUniqueArgs>(args: SelectSubset<T, LaporanSampahFindUniqueArgs<ExtArgs>>): Prisma__LaporanSampahClient<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LaporanSampah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaporanSampahFindUniqueOrThrowArgs} args - Arguments to find a LaporanSampah
     * @example
     * // Get one LaporanSampah
     * const laporanSampah = await prisma.laporanSampah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanSampahFindUniqueOrThrowArgs>(args: SelectSubset<T, LaporanSampahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaporanSampahClient<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LaporanSampah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanSampahFindFirstArgs} args - Arguments to find a LaporanSampah
     * @example
     * // Get one LaporanSampah
     * const laporanSampah = await prisma.laporanSampah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanSampahFindFirstArgs>(args?: SelectSubset<T, LaporanSampahFindFirstArgs<ExtArgs>>): Prisma__LaporanSampahClient<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LaporanSampah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanSampahFindFirstOrThrowArgs} args - Arguments to find a LaporanSampah
     * @example
     * // Get one LaporanSampah
     * const laporanSampah = await prisma.laporanSampah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanSampahFindFirstOrThrowArgs>(args?: SelectSubset<T, LaporanSampahFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaporanSampahClient<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LaporanSampahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanSampahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LaporanSampahs
     * const laporanSampahs = await prisma.laporanSampah.findMany()
     * 
     * // Get first 10 LaporanSampahs
     * const laporanSampahs = await prisma.laporanSampah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laporanSampahWithIdOnly = await prisma.laporanSampah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaporanSampahFindManyArgs>(args?: SelectSubset<T, LaporanSampahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LaporanSampah.
     * @param {LaporanSampahCreateArgs} args - Arguments to create a LaporanSampah.
     * @example
     * // Create one LaporanSampah
     * const LaporanSampah = await prisma.laporanSampah.create({
     *   data: {
     *     // ... data to create a LaporanSampah
     *   }
     * })
     * 
     */
    create<T extends LaporanSampahCreateArgs>(args: SelectSubset<T, LaporanSampahCreateArgs<ExtArgs>>): Prisma__LaporanSampahClient<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LaporanSampahs.
     * @param {LaporanSampahCreateManyArgs} args - Arguments to create many LaporanSampahs.
     * @example
     * // Create many LaporanSampahs
     * const laporanSampah = await prisma.laporanSampah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaporanSampahCreateManyArgs>(args?: SelectSubset<T, LaporanSampahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LaporanSampahs and returns the data saved in the database.
     * @param {LaporanSampahCreateManyAndReturnArgs} args - Arguments to create many LaporanSampahs.
     * @example
     * // Create many LaporanSampahs
     * const laporanSampah = await prisma.laporanSampah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LaporanSampahs and only return the `id`
     * const laporanSampahWithIdOnly = await prisma.laporanSampah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaporanSampahCreateManyAndReturnArgs>(args?: SelectSubset<T, LaporanSampahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LaporanSampah.
     * @param {LaporanSampahDeleteArgs} args - Arguments to delete one LaporanSampah.
     * @example
     * // Delete one LaporanSampah
     * const LaporanSampah = await prisma.laporanSampah.delete({
     *   where: {
     *     // ... filter to delete one LaporanSampah
     *   }
     * })
     * 
     */
    delete<T extends LaporanSampahDeleteArgs>(args: SelectSubset<T, LaporanSampahDeleteArgs<ExtArgs>>): Prisma__LaporanSampahClient<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LaporanSampah.
     * @param {LaporanSampahUpdateArgs} args - Arguments to update one LaporanSampah.
     * @example
     * // Update one LaporanSampah
     * const laporanSampah = await prisma.laporanSampah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaporanSampahUpdateArgs>(args: SelectSubset<T, LaporanSampahUpdateArgs<ExtArgs>>): Prisma__LaporanSampahClient<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LaporanSampahs.
     * @param {LaporanSampahDeleteManyArgs} args - Arguments to filter LaporanSampahs to delete.
     * @example
     * // Delete a few LaporanSampahs
     * const { count } = await prisma.laporanSampah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaporanSampahDeleteManyArgs>(args?: SelectSubset<T, LaporanSampahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaporanSampahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanSampahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LaporanSampahs
     * const laporanSampah = await prisma.laporanSampah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaporanSampahUpdateManyArgs>(args: SelectSubset<T, LaporanSampahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaporanSampahs and returns the data updated in the database.
     * @param {LaporanSampahUpdateManyAndReturnArgs} args - Arguments to update many LaporanSampahs.
     * @example
     * // Update many LaporanSampahs
     * const laporanSampah = await prisma.laporanSampah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LaporanSampahs and only return the `id`
     * const laporanSampahWithIdOnly = await prisma.laporanSampah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LaporanSampahUpdateManyAndReturnArgs>(args: SelectSubset<T, LaporanSampahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LaporanSampah.
     * @param {LaporanSampahUpsertArgs} args - Arguments to update or create a LaporanSampah.
     * @example
     * // Update or create a LaporanSampah
     * const laporanSampah = await prisma.laporanSampah.upsert({
     *   create: {
     *     // ... data to create a LaporanSampah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LaporanSampah we want to update
     *   }
     * })
     */
    upsert<T extends LaporanSampahUpsertArgs>(args: SelectSubset<T, LaporanSampahUpsertArgs<ExtArgs>>): Prisma__LaporanSampahClient<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LaporanSampahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanSampahCountArgs} args - Arguments to filter LaporanSampahs to count.
     * @example
     * // Count the number of LaporanSampahs
     * const count = await prisma.laporanSampah.count({
     *   where: {
     *     // ... the filter for the LaporanSampahs we want to count
     *   }
     * })
    **/
    count<T extends LaporanSampahCountArgs>(
      args?: Subset<T, LaporanSampahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaporanSampahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LaporanSampah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanSampahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaporanSampahAggregateArgs>(args: Subset<T, LaporanSampahAggregateArgs>): Prisma.PrismaPromise<GetLaporanSampahAggregateType<T>>

    /**
     * Group by LaporanSampah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanSampahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaporanSampahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaporanSampahGroupByArgs['orderBy'] }
        : { orderBy?: LaporanSampahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaporanSampahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanSampahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LaporanSampah model
   */
  readonly fields: LaporanSampahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LaporanSampah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaporanSampahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jenisSampah<T extends JenisSampahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JenisSampahDefaultArgs<ExtArgs>>): Prisma__JenisSampahClient<$Result.GetResult<Prisma.$JenisSampahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wilayah<T extends WilayahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WilayahDefaultArgs<ExtArgs>>): Prisma__WilayahClient<$Result.GetResult<Prisma.$WilayahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foto<T extends LaporanSampah$fotoArgs<ExtArgs> = {}>(args?: Subset<T, LaporanSampah$fotoArgs<ExtArgs>>): Prisma__FotoSampahClient<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LaporanSampah model
   */
  interface LaporanSampahFieldRefs {
    readonly id: FieldRef<"LaporanSampah", 'String'>
    readonly berat: FieldRef<"LaporanSampah", 'Float'>
    readonly tanggalLapor: FieldRef<"LaporanSampah", 'DateTime'>
    readonly userId: FieldRef<"LaporanSampah", 'String'>
    readonly jenisSampahId: FieldRef<"LaporanSampah", 'String'>
    readonly wilayahId: FieldRef<"LaporanSampah", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LaporanSampah findUnique
   */
  export type LaporanSampahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    /**
     * Filter, which LaporanSampah to fetch.
     */
    where: LaporanSampahWhereUniqueInput
  }

  /**
   * LaporanSampah findUniqueOrThrow
   */
  export type LaporanSampahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    /**
     * Filter, which LaporanSampah to fetch.
     */
    where: LaporanSampahWhereUniqueInput
  }

  /**
   * LaporanSampah findFirst
   */
  export type LaporanSampahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    /**
     * Filter, which LaporanSampah to fetch.
     */
    where?: LaporanSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanSampahs to fetch.
     */
    orderBy?: LaporanSampahOrderByWithRelationInput | LaporanSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaporanSampahs.
     */
    cursor?: LaporanSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaporanSampahs.
     */
    distinct?: LaporanSampahScalarFieldEnum | LaporanSampahScalarFieldEnum[]
  }

  /**
   * LaporanSampah findFirstOrThrow
   */
  export type LaporanSampahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    /**
     * Filter, which LaporanSampah to fetch.
     */
    where?: LaporanSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanSampahs to fetch.
     */
    orderBy?: LaporanSampahOrderByWithRelationInput | LaporanSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaporanSampahs.
     */
    cursor?: LaporanSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaporanSampahs.
     */
    distinct?: LaporanSampahScalarFieldEnum | LaporanSampahScalarFieldEnum[]
  }

  /**
   * LaporanSampah findMany
   */
  export type LaporanSampahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    /**
     * Filter, which LaporanSampahs to fetch.
     */
    where?: LaporanSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanSampahs to fetch.
     */
    orderBy?: LaporanSampahOrderByWithRelationInput | LaporanSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LaporanSampahs.
     */
    cursor?: LaporanSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaporanSampahs.
     */
    distinct?: LaporanSampahScalarFieldEnum | LaporanSampahScalarFieldEnum[]
  }

  /**
   * LaporanSampah create
   */
  export type LaporanSampahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    /**
     * The data needed to create a LaporanSampah.
     */
    data: XOR<LaporanSampahCreateInput, LaporanSampahUncheckedCreateInput>
  }

  /**
   * LaporanSampah createMany
   */
  export type LaporanSampahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LaporanSampahs.
     */
    data: LaporanSampahCreateManyInput | LaporanSampahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LaporanSampah createManyAndReturn
   */
  export type LaporanSampahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * The data used to create many LaporanSampahs.
     */
    data: LaporanSampahCreateManyInput | LaporanSampahCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LaporanSampah update
   */
  export type LaporanSampahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    /**
     * The data needed to update a LaporanSampah.
     */
    data: XOR<LaporanSampahUpdateInput, LaporanSampahUncheckedUpdateInput>
    /**
     * Choose, which LaporanSampah to update.
     */
    where: LaporanSampahWhereUniqueInput
  }

  /**
   * LaporanSampah updateMany
   */
  export type LaporanSampahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LaporanSampahs.
     */
    data: XOR<LaporanSampahUpdateManyMutationInput, LaporanSampahUncheckedUpdateManyInput>
    /**
     * Filter which LaporanSampahs to update
     */
    where?: LaporanSampahWhereInput
    /**
     * Limit how many LaporanSampahs to update.
     */
    limit?: number
  }

  /**
   * LaporanSampah updateManyAndReturn
   */
  export type LaporanSampahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * The data used to update LaporanSampahs.
     */
    data: XOR<LaporanSampahUpdateManyMutationInput, LaporanSampahUncheckedUpdateManyInput>
    /**
     * Filter which LaporanSampahs to update
     */
    where?: LaporanSampahWhereInput
    /**
     * Limit how many LaporanSampahs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LaporanSampah upsert
   */
  export type LaporanSampahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    /**
     * The filter to search for the LaporanSampah to update in case it exists.
     */
    where: LaporanSampahWhereUniqueInput
    /**
     * In case the LaporanSampah found by the `where` argument doesn't exist, create a new LaporanSampah with this data.
     */
    create: XOR<LaporanSampahCreateInput, LaporanSampahUncheckedCreateInput>
    /**
     * In case the LaporanSampah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaporanSampahUpdateInput, LaporanSampahUncheckedUpdateInput>
  }

  /**
   * LaporanSampah delete
   */
  export type LaporanSampahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
    /**
     * Filter which LaporanSampah to delete.
     */
    where: LaporanSampahWhereUniqueInput
  }

  /**
   * LaporanSampah deleteMany
   */
  export type LaporanSampahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanSampahs to delete
     */
    where?: LaporanSampahWhereInput
    /**
     * Limit how many LaporanSampahs to delete.
     */
    limit?: number
  }

  /**
   * LaporanSampah.foto
   */
  export type LaporanSampah$fotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahInclude<ExtArgs> | null
    where?: FotoSampahWhereInput
  }

  /**
   * LaporanSampah without action
   */
  export type LaporanSampahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanSampah
     */
    select?: LaporanSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanSampah
     */
    omit?: LaporanSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanSampahInclude<ExtArgs> | null
  }


  /**
   * Model FotoSampah
   */

  export type AggregateFotoSampah = {
    _count: FotoSampahCountAggregateOutputType | null
    _min: FotoSampahMinAggregateOutputType | null
    _max: FotoSampahMaxAggregateOutputType | null
  }

  export type FotoSampahMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    laporanId: string | null
  }

  export type FotoSampahMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    laporanId: string | null
  }

  export type FotoSampahCountAggregateOutputType = {
    id: number
    imageUrl: number
    laporanId: number
    _all: number
  }


  export type FotoSampahMinAggregateInputType = {
    id?: true
    imageUrl?: true
    laporanId?: true
  }

  export type FotoSampahMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    laporanId?: true
  }

  export type FotoSampahCountAggregateInputType = {
    id?: true
    imageUrl?: true
    laporanId?: true
    _all?: true
  }

  export type FotoSampahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoSampah to aggregate.
     */
    where?: FotoSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoSampahs to fetch.
     */
    orderBy?: FotoSampahOrderByWithRelationInput | FotoSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FotoSampahs
    **/
    _count?: true | FotoSampahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoSampahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoSampahMaxAggregateInputType
  }

  export type GetFotoSampahAggregateType<T extends FotoSampahAggregateArgs> = {
        [P in keyof T & keyof AggregateFotoSampah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFotoSampah[P]>
      : GetScalarType<T[P], AggregateFotoSampah[P]>
  }




  export type FotoSampahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoSampahWhereInput
    orderBy?: FotoSampahOrderByWithAggregationInput | FotoSampahOrderByWithAggregationInput[]
    by: FotoSampahScalarFieldEnum[] | FotoSampahScalarFieldEnum
    having?: FotoSampahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoSampahCountAggregateInputType | true
    _min?: FotoSampahMinAggregateInputType
    _max?: FotoSampahMaxAggregateInputType
  }

  export type FotoSampahGroupByOutputType = {
    id: string
    imageUrl: string
    laporanId: string
    _count: FotoSampahCountAggregateOutputType | null
    _min: FotoSampahMinAggregateOutputType | null
    _max: FotoSampahMaxAggregateOutputType | null
  }

  type GetFotoSampahGroupByPayload<T extends FotoSampahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoSampahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoSampahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoSampahGroupByOutputType[P]>
            : GetScalarType<T[P], FotoSampahGroupByOutputType[P]>
        }
      >
    >


  export type FotoSampahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    laporanId?: boolean
    laporan?: boolean | LaporanSampahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoSampah"]>

  export type FotoSampahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    laporanId?: boolean
    laporan?: boolean | LaporanSampahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoSampah"]>

  export type FotoSampahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    laporanId?: boolean
    laporan?: boolean | LaporanSampahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoSampah"]>

  export type FotoSampahSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    laporanId?: boolean
  }

  export type FotoSampahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "laporanId", ExtArgs["result"]["fotoSampah"]>
  export type FotoSampahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | LaporanSampahDefaultArgs<ExtArgs>
  }
  export type FotoSampahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | LaporanSampahDefaultArgs<ExtArgs>
  }
  export type FotoSampahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | LaporanSampahDefaultArgs<ExtArgs>
  }

  export type $FotoSampahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FotoSampah"
    objects: {
      laporan: Prisma.$LaporanSampahPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      laporanId: string
    }, ExtArgs["result"]["fotoSampah"]>
    composites: {}
  }

  type FotoSampahGetPayload<S extends boolean | null | undefined | FotoSampahDefaultArgs> = $Result.GetResult<Prisma.$FotoSampahPayload, S>

  type FotoSampahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotoSampahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotoSampahCountAggregateInputType | true
    }

  export interface FotoSampahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FotoSampah'], meta: { name: 'FotoSampah' } }
    /**
     * Find zero or one FotoSampah that matches the filter.
     * @param {FotoSampahFindUniqueArgs} args - Arguments to find a FotoSampah
     * @example
     * // Get one FotoSampah
     * const fotoSampah = await prisma.fotoSampah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoSampahFindUniqueArgs>(args: SelectSubset<T, FotoSampahFindUniqueArgs<ExtArgs>>): Prisma__FotoSampahClient<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FotoSampah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotoSampahFindUniqueOrThrowArgs} args - Arguments to find a FotoSampah
     * @example
     * // Get one FotoSampah
     * const fotoSampah = await prisma.fotoSampah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoSampahFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoSampahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoSampahClient<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoSampah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoSampahFindFirstArgs} args - Arguments to find a FotoSampah
     * @example
     * // Get one FotoSampah
     * const fotoSampah = await prisma.fotoSampah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoSampahFindFirstArgs>(args?: SelectSubset<T, FotoSampahFindFirstArgs<ExtArgs>>): Prisma__FotoSampahClient<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoSampah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoSampahFindFirstOrThrowArgs} args - Arguments to find a FotoSampah
     * @example
     * // Get one FotoSampah
     * const fotoSampah = await prisma.fotoSampah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoSampahFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoSampahFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoSampahClient<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FotoSampahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoSampahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FotoSampahs
     * const fotoSampahs = await prisma.fotoSampah.findMany()
     * 
     * // Get first 10 FotoSampahs
     * const fotoSampahs = await prisma.fotoSampah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoSampahWithIdOnly = await prisma.fotoSampah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoSampahFindManyArgs>(args?: SelectSubset<T, FotoSampahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FotoSampah.
     * @param {FotoSampahCreateArgs} args - Arguments to create a FotoSampah.
     * @example
     * // Create one FotoSampah
     * const FotoSampah = await prisma.fotoSampah.create({
     *   data: {
     *     // ... data to create a FotoSampah
     *   }
     * })
     * 
     */
    create<T extends FotoSampahCreateArgs>(args: SelectSubset<T, FotoSampahCreateArgs<ExtArgs>>): Prisma__FotoSampahClient<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FotoSampahs.
     * @param {FotoSampahCreateManyArgs} args - Arguments to create many FotoSampahs.
     * @example
     * // Create many FotoSampahs
     * const fotoSampah = await prisma.fotoSampah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoSampahCreateManyArgs>(args?: SelectSubset<T, FotoSampahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FotoSampahs and returns the data saved in the database.
     * @param {FotoSampahCreateManyAndReturnArgs} args - Arguments to create many FotoSampahs.
     * @example
     * // Create many FotoSampahs
     * const fotoSampah = await prisma.fotoSampah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FotoSampahs and only return the `id`
     * const fotoSampahWithIdOnly = await prisma.fotoSampah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FotoSampahCreateManyAndReturnArgs>(args?: SelectSubset<T, FotoSampahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FotoSampah.
     * @param {FotoSampahDeleteArgs} args - Arguments to delete one FotoSampah.
     * @example
     * // Delete one FotoSampah
     * const FotoSampah = await prisma.fotoSampah.delete({
     *   where: {
     *     // ... filter to delete one FotoSampah
     *   }
     * })
     * 
     */
    delete<T extends FotoSampahDeleteArgs>(args: SelectSubset<T, FotoSampahDeleteArgs<ExtArgs>>): Prisma__FotoSampahClient<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FotoSampah.
     * @param {FotoSampahUpdateArgs} args - Arguments to update one FotoSampah.
     * @example
     * // Update one FotoSampah
     * const fotoSampah = await prisma.fotoSampah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoSampahUpdateArgs>(args: SelectSubset<T, FotoSampahUpdateArgs<ExtArgs>>): Prisma__FotoSampahClient<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FotoSampahs.
     * @param {FotoSampahDeleteManyArgs} args - Arguments to filter FotoSampahs to delete.
     * @example
     * // Delete a few FotoSampahs
     * const { count } = await prisma.fotoSampah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoSampahDeleteManyArgs>(args?: SelectSubset<T, FotoSampahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotoSampahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoSampahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FotoSampahs
     * const fotoSampah = await prisma.fotoSampah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoSampahUpdateManyArgs>(args: SelectSubset<T, FotoSampahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotoSampahs and returns the data updated in the database.
     * @param {FotoSampahUpdateManyAndReturnArgs} args - Arguments to update many FotoSampahs.
     * @example
     * // Update many FotoSampahs
     * const fotoSampah = await prisma.fotoSampah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FotoSampahs and only return the `id`
     * const fotoSampahWithIdOnly = await prisma.fotoSampah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FotoSampahUpdateManyAndReturnArgs>(args: SelectSubset<T, FotoSampahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FotoSampah.
     * @param {FotoSampahUpsertArgs} args - Arguments to update or create a FotoSampah.
     * @example
     * // Update or create a FotoSampah
     * const fotoSampah = await prisma.fotoSampah.upsert({
     *   create: {
     *     // ... data to create a FotoSampah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FotoSampah we want to update
     *   }
     * })
     */
    upsert<T extends FotoSampahUpsertArgs>(args: SelectSubset<T, FotoSampahUpsertArgs<ExtArgs>>): Prisma__FotoSampahClient<$Result.GetResult<Prisma.$FotoSampahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FotoSampahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoSampahCountArgs} args - Arguments to filter FotoSampahs to count.
     * @example
     * // Count the number of FotoSampahs
     * const count = await prisma.fotoSampah.count({
     *   where: {
     *     // ... the filter for the FotoSampahs we want to count
     *   }
     * })
    **/
    count<T extends FotoSampahCountArgs>(
      args?: Subset<T, FotoSampahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoSampahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FotoSampah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoSampahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FotoSampahAggregateArgs>(args: Subset<T, FotoSampahAggregateArgs>): Prisma.PrismaPromise<GetFotoSampahAggregateType<T>>

    /**
     * Group by FotoSampah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoSampahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FotoSampahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoSampahGroupByArgs['orderBy'] }
        : { orderBy?: FotoSampahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FotoSampahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoSampahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FotoSampah model
   */
  readonly fields: FotoSampahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FotoSampah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoSampahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laporan<T extends LaporanSampahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LaporanSampahDefaultArgs<ExtArgs>>): Prisma__LaporanSampahClient<$Result.GetResult<Prisma.$LaporanSampahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FotoSampah model
   */
  interface FotoSampahFieldRefs {
    readonly id: FieldRef<"FotoSampah", 'String'>
    readonly imageUrl: FieldRef<"FotoSampah", 'String'>
    readonly laporanId: FieldRef<"FotoSampah", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FotoSampah findUnique
   */
  export type FotoSampahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahInclude<ExtArgs> | null
    /**
     * Filter, which FotoSampah to fetch.
     */
    where: FotoSampahWhereUniqueInput
  }

  /**
   * FotoSampah findUniqueOrThrow
   */
  export type FotoSampahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahInclude<ExtArgs> | null
    /**
     * Filter, which FotoSampah to fetch.
     */
    where: FotoSampahWhereUniqueInput
  }

  /**
   * FotoSampah findFirst
   */
  export type FotoSampahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahInclude<ExtArgs> | null
    /**
     * Filter, which FotoSampah to fetch.
     */
    where?: FotoSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoSampahs to fetch.
     */
    orderBy?: FotoSampahOrderByWithRelationInput | FotoSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoSampahs.
     */
    cursor?: FotoSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoSampahs.
     */
    distinct?: FotoSampahScalarFieldEnum | FotoSampahScalarFieldEnum[]
  }

  /**
   * FotoSampah findFirstOrThrow
   */
  export type FotoSampahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahInclude<ExtArgs> | null
    /**
     * Filter, which FotoSampah to fetch.
     */
    where?: FotoSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoSampahs to fetch.
     */
    orderBy?: FotoSampahOrderByWithRelationInput | FotoSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoSampahs.
     */
    cursor?: FotoSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoSampahs.
     */
    distinct?: FotoSampahScalarFieldEnum | FotoSampahScalarFieldEnum[]
  }

  /**
   * FotoSampah findMany
   */
  export type FotoSampahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahInclude<ExtArgs> | null
    /**
     * Filter, which FotoSampahs to fetch.
     */
    where?: FotoSampahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoSampahs to fetch.
     */
    orderBy?: FotoSampahOrderByWithRelationInput | FotoSampahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FotoSampahs.
     */
    cursor?: FotoSampahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoSampahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoSampahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoSampahs.
     */
    distinct?: FotoSampahScalarFieldEnum | FotoSampahScalarFieldEnum[]
  }

  /**
   * FotoSampah create
   */
  export type FotoSampahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahInclude<ExtArgs> | null
    /**
     * The data needed to create a FotoSampah.
     */
    data: XOR<FotoSampahCreateInput, FotoSampahUncheckedCreateInput>
  }

  /**
   * FotoSampah createMany
   */
  export type FotoSampahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FotoSampahs.
     */
    data: FotoSampahCreateManyInput | FotoSampahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FotoSampah createManyAndReturn
   */
  export type FotoSampahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * The data used to create many FotoSampahs.
     */
    data: FotoSampahCreateManyInput | FotoSampahCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FotoSampah update
   */
  export type FotoSampahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahInclude<ExtArgs> | null
    /**
     * The data needed to update a FotoSampah.
     */
    data: XOR<FotoSampahUpdateInput, FotoSampahUncheckedUpdateInput>
    /**
     * Choose, which FotoSampah to update.
     */
    where: FotoSampahWhereUniqueInput
  }

  /**
   * FotoSampah updateMany
   */
  export type FotoSampahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FotoSampahs.
     */
    data: XOR<FotoSampahUpdateManyMutationInput, FotoSampahUncheckedUpdateManyInput>
    /**
     * Filter which FotoSampahs to update
     */
    where?: FotoSampahWhereInput
    /**
     * Limit how many FotoSampahs to update.
     */
    limit?: number
  }

  /**
   * FotoSampah updateManyAndReturn
   */
  export type FotoSampahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * The data used to update FotoSampahs.
     */
    data: XOR<FotoSampahUpdateManyMutationInput, FotoSampahUncheckedUpdateManyInput>
    /**
     * Filter which FotoSampahs to update
     */
    where?: FotoSampahWhereInput
    /**
     * Limit how many FotoSampahs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FotoSampah upsert
   */
  export type FotoSampahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahInclude<ExtArgs> | null
    /**
     * The filter to search for the FotoSampah to update in case it exists.
     */
    where: FotoSampahWhereUniqueInput
    /**
     * In case the FotoSampah found by the `where` argument doesn't exist, create a new FotoSampah with this data.
     */
    create: XOR<FotoSampahCreateInput, FotoSampahUncheckedCreateInput>
    /**
     * In case the FotoSampah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoSampahUpdateInput, FotoSampahUncheckedUpdateInput>
  }

  /**
   * FotoSampah delete
   */
  export type FotoSampahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahInclude<ExtArgs> | null
    /**
     * Filter which FotoSampah to delete.
     */
    where: FotoSampahWhereUniqueInput
  }

  /**
   * FotoSampah deleteMany
   */
  export type FotoSampahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoSampahs to delete
     */
    where?: FotoSampahWhereInput
    /**
     * Limit how many FotoSampahs to delete.
     */
    limit?: number
  }

  /**
   * FotoSampah without action
   */
  export type FotoSampahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoSampah
     */
    select?: FotoSampahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoSampah
     */
    omit?: FotoSampahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoSampahInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    noHp: 'noHp'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JenisSampahScalarFieldEnum: {
    id: 'id',
    namaJenis: 'namaJenis'
  };

  export type JenisSampahScalarFieldEnum = (typeof JenisSampahScalarFieldEnum)[keyof typeof JenisSampahScalarFieldEnum]


  export const WilayahScalarFieldEnum: {
    id: 'id',
    namaWilayah: 'namaWilayah'
  };

  export type WilayahScalarFieldEnum = (typeof WilayahScalarFieldEnum)[keyof typeof WilayahScalarFieldEnum]


  export const LaporanSampahScalarFieldEnum: {
    id: 'id',
    berat: 'berat',
    tanggalLapor: 'tanggalLapor',
    userId: 'userId',
    jenisSampahId: 'jenisSampahId',
    wilayahId: 'wilayahId'
  };

  export type LaporanSampahScalarFieldEnum = (typeof LaporanSampahScalarFieldEnum)[keyof typeof LaporanSampahScalarFieldEnum]


  export const FotoSampahScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    laporanId: 'laporanId'
  };

  export type FotoSampahScalarFieldEnum = (typeof FotoSampahScalarFieldEnum)[keyof typeof FotoSampahScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    noHp?: StringFilter<"User"> | string
    laporan?: LaporanSampahListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    laporan?: LaporanSampahOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    noHp?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    laporan?: LaporanSampahListRelationFilter
  }, "id" | "email" | "noHp">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nama?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    noHp?: StringWithAggregatesFilter<"User"> | string
  }

  export type JenisSampahWhereInput = {
    AND?: JenisSampahWhereInput | JenisSampahWhereInput[]
    OR?: JenisSampahWhereInput[]
    NOT?: JenisSampahWhereInput | JenisSampahWhereInput[]
    id?: StringFilter<"JenisSampah"> | string
    namaJenis?: StringFilter<"JenisSampah"> | string
    laporan?: LaporanSampahListRelationFilter
  }

  export type JenisSampahOrderByWithRelationInput = {
    id?: SortOrder
    namaJenis?: SortOrder
    laporan?: LaporanSampahOrderByRelationAggregateInput
  }

  export type JenisSampahWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    namaJenis?: string
    AND?: JenisSampahWhereInput | JenisSampahWhereInput[]
    OR?: JenisSampahWhereInput[]
    NOT?: JenisSampahWhereInput | JenisSampahWhereInput[]
    laporan?: LaporanSampahListRelationFilter
  }, "id" | "namaJenis">

  export type JenisSampahOrderByWithAggregationInput = {
    id?: SortOrder
    namaJenis?: SortOrder
    _count?: JenisSampahCountOrderByAggregateInput
    _max?: JenisSampahMaxOrderByAggregateInput
    _min?: JenisSampahMinOrderByAggregateInput
  }

  export type JenisSampahScalarWhereWithAggregatesInput = {
    AND?: JenisSampahScalarWhereWithAggregatesInput | JenisSampahScalarWhereWithAggregatesInput[]
    OR?: JenisSampahScalarWhereWithAggregatesInput[]
    NOT?: JenisSampahScalarWhereWithAggregatesInput | JenisSampahScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JenisSampah"> | string
    namaJenis?: StringWithAggregatesFilter<"JenisSampah"> | string
  }

  export type WilayahWhereInput = {
    AND?: WilayahWhereInput | WilayahWhereInput[]
    OR?: WilayahWhereInput[]
    NOT?: WilayahWhereInput | WilayahWhereInput[]
    id?: StringFilter<"Wilayah"> | string
    namaWilayah?: StringFilter<"Wilayah"> | string
    laporan?: LaporanSampahListRelationFilter
  }

  export type WilayahOrderByWithRelationInput = {
    id?: SortOrder
    namaWilayah?: SortOrder
    laporan?: LaporanSampahOrderByRelationAggregateInput
  }

  export type WilayahWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    namaWilayah?: string
    AND?: WilayahWhereInput | WilayahWhereInput[]
    OR?: WilayahWhereInput[]
    NOT?: WilayahWhereInput | WilayahWhereInput[]
    laporan?: LaporanSampahListRelationFilter
  }, "id" | "namaWilayah">

  export type WilayahOrderByWithAggregationInput = {
    id?: SortOrder
    namaWilayah?: SortOrder
    _count?: WilayahCountOrderByAggregateInput
    _max?: WilayahMaxOrderByAggregateInput
    _min?: WilayahMinOrderByAggregateInput
  }

  export type WilayahScalarWhereWithAggregatesInput = {
    AND?: WilayahScalarWhereWithAggregatesInput | WilayahScalarWhereWithAggregatesInput[]
    OR?: WilayahScalarWhereWithAggregatesInput[]
    NOT?: WilayahScalarWhereWithAggregatesInput | WilayahScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wilayah"> | string
    namaWilayah?: StringWithAggregatesFilter<"Wilayah"> | string
  }

  export type LaporanSampahWhereInput = {
    AND?: LaporanSampahWhereInput | LaporanSampahWhereInput[]
    OR?: LaporanSampahWhereInput[]
    NOT?: LaporanSampahWhereInput | LaporanSampahWhereInput[]
    id?: StringFilter<"LaporanSampah"> | string
    berat?: FloatFilter<"LaporanSampah"> | number
    tanggalLapor?: DateTimeFilter<"LaporanSampah"> | Date | string
    userId?: StringFilter<"LaporanSampah"> | string
    jenisSampahId?: StringFilter<"LaporanSampah"> | string
    wilayahId?: StringFilter<"LaporanSampah"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jenisSampah?: XOR<JenisSampahScalarRelationFilter, JenisSampahWhereInput>
    wilayah?: XOR<WilayahScalarRelationFilter, WilayahWhereInput>
    foto?: XOR<FotoSampahNullableScalarRelationFilter, FotoSampahWhereInput> | null
  }

  export type LaporanSampahOrderByWithRelationInput = {
    id?: SortOrder
    berat?: SortOrder
    tanggalLapor?: SortOrder
    userId?: SortOrder
    jenisSampahId?: SortOrder
    wilayahId?: SortOrder
    user?: UserOrderByWithRelationInput
    jenisSampah?: JenisSampahOrderByWithRelationInput
    wilayah?: WilayahOrderByWithRelationInput
    foto?: FotoSampahOrderByWithRelationInput
  }

  export type LaporanSampahWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LaporanSampahWhereInput | LaporanSampahWhereInput[]
    OR?: LaporanSampahWhereInput[]
    NOT?: LaporanSampahWhereInput | LaporanSampahWhereInput[]
    berat?: FloatFilter<"LaporanSampah"> | number
    tanggalLapor?: DateTimeFilter<"LaporanSampah"> | Date | string
    userId?: StringFilter<"LaporanSampah"> | string
    jenisSampahId?: StringFilter<"LaporanSampah"> | string
    wilayahId?: StringFilter<"LaporanSampah"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jenisSampah?: XOR<JenisSampahScalarRelationFilter, JenisSampahWhereInput>
    wilayah?: XOR<WilayahScalarRelationFilter, WilayahWhereInput>
    foto?: XOR<FotoSampahNullableScalarRelationFilter, FotoSampahWhereInput> | null
  }, "id">

  export type LaporanSampahOrderByWithAggregationInput = {
    id?: SortOrder
    berat?: SortOrder
    tanggalLapor?: SortOrder
    userId?: SortOrder
    jenisSampahId?: SortOrder
    wilayahId?: SortOrder
    _count?: LaporanSampahCountOrderByAggregateInput
    _avg?: LaporanSampahAvgOrderByAggregateInput
    _max?: LaporanSampahMaxOrderByAggregateInput
    _min?: LaporanSampahMinOrderByAggregateInput
    _sum?: LaporanSampahSumOrderByAggregateInput
  }

  export type LaporanSampahScalarWhereWithAggregatesInput = {
    AND?: LaporanSampahScalarWhereWithAggregatesInput | LaporanSampahScalarWhereWithAggregatesInput[]
    OR?: LaporanSampahScalarWhereWithAggregatesInput[]
    NOT?: LaporanSampahScalarWhereWithAggregatesInput | LaporanSampahScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LaporanSampah"> | string
    berat?: FloatWithAggregatesFilter<"LaporanSampah"> | number
    tanggalLapor?: DateTimeWithAggregatesFilter<"LaporanSampah"> | Date | string
    userId?: StringWithAggregatesFilter<"LaporanSampah"> | string
    jenisSampahId?: StringWithAggregatesFilter<"LaporanSampah"> | string
    wilayahId?: StringWithAggregatesFilter<"LaporanSampah"> | string
  }

  export type FotoSampahWhereInput = {
    AND?: FotoSampahWhereInput | FotoSampahWhereInput[]
    OR?: FotoSampahWhereInput[]
    NOT?: FotoSampahWhereInput | FotoSampahWhereInput[]
    id?: StringFilter<"FotoSampah"> | string
    imageUrl?: StringFilter<"FotoSampah"> | string
    laporanId?: StringFilter<"FotoSampah"> | string
    laporan?: XOR<LaporanSampahScalarRelationFilter, LaporanSampahWhereInput>
  }

  export type FotoSampahOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    laporanId?: SortOrder
    laporan?: LaporanSampahOrderByWithRelationInput
  }

  export type FotoSampahWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    laporanId?: string
    AND?: FotoSampahWhereInput | FotoSampahWhereInput[]
    OR?: FotoSampahWhereInput[]
    NOT?: FotoSampahWhereInput | FotoSampahWhereInput[]
    imageUrl?: StringFilter<"FotoSampah"> | string
    laporan?: XOR<LaporanSampahScalarRelationFilter, LaporanSampahWhereInput>
  }, "id" | "laporanId">

  export type FotoSampahOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    laporanId?: SortOrder
    _count?: FotoSampahCountOrderByAggregateInput
    _max?: FotoSampahMaxOrderByAggregateInput
    _min?: FotoSampahMinOrderByAggregateInput
  }

  export type FotoSampahScalarWhereWithAggregatesInput = {
    AND?: FotoSampahScalarWhereWithAggregatesInput | FotoSampahScalarWhereWithAggregatesInput[]
    OR?: FotoSampahScalarWhereWithAggregatesInput[]
    NOT?: FotoSampahScalarWhereWithAggregatesInput | FotoSampahScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FotoSampah"> | string
    imageUrl?: StringWithAggregatesFilter<"FotoSampah"> | string
    laporanId?: StringWithAggregatesFilter<"FotoSampah"> | string
  }

  export type UserCreateInput = {
    id?: string
    nama: string
    email: string
    noHp: string
    laporan?: LaporanSampahCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nama: string
    email: string
    noHp: string
    laporan?: LaporanSampahUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    laporan?: LaporanSampahUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    laporan?: LaporanSampahUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nama: string
    email: string
    noHp: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
  }

  export type JenisSampahCreateInput = {
    id?: string
    namaJenis: string
    laporan?: LaporanSampahCreateNestedManyWithoutJenisSampahInput
  }

  export type JenisSampahUncheckedCreateInput = {
    id?: string
    namaJenis: string
    laporan?: LaporanSampahUncheckedCreateNestedManyWithoutJenisSampahInput
  }

  export type JenisSampahUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
    laporan?: LaporanSampahUpdateManyWithoutJenisSampahNestedInput
  }

  export type JenisSampahUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
    laporan?: LaporanSampahUncheckedUpdateManyWithoutJenisSampahNestedInput
  }

  export type JenisSampahCreateManyInput = {
    id?: string
    namaJenis: string
  }

  export type JenisSampahUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
  }

  export type JenisSampahUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
  }

  export type WilayahCreateInput = {
    id?: string
    namaWilayah: string
    laporan?: LaporanSampahCreateNestedManyWithoutWilayahInput
  }

  export type WilayahUncheckedCreateInput = {
    id?: string
    namaWilayah: string
    laporan?: LaporanSampahUncheckedCreateNestedManyWithoutWilayahInput
  }

  export type WilayahUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaWilayah?: StringFieldUpdateOperationsInput | string
    laporan?: LaporanSampahUpdateManyWithoutWilayahNestedInput
  }

  export type WilayahUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaWilayah?: StringFieldUpdateOperationsInput | string
    laporan?: LaporanSampahUncheckedUpdateManyWithoutWilayahNestedInput
  }

  export type WilayahCreateManyInput = {
    id?: string
    namaWilayah: string
  }

  export type WilayahUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaWilayah?: StringFieldUpdateOperationsInput | string
  }

  export type WilayahUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaWilayah?: StringFieldUpdateOperationsInput | string
  }

  export type LaporanSampahCreateInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    user: UserCreateNestedOneWithoutLaporanInput
    jenisSampah: JenisSampahCreateNestedOneWithoutLaporanInput
    wilayah: WilayahCreateNestedOneWithoutLaporanInput
    foto?: FotoSampahCreateNestedOneWithoutLaporanInput
  }

  export type LaporanSampahUncheckedCreateInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    userId: string
    jenisSampahId: string
    wilayahId: string
    foto?: FotoSampahUncheckedCreateNestedOneWithoutLaporanInput
  }

  export type LaporanSampahUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaporanNestedInput
    jenisSampah?: JenisSampahUpdateOneRequiredWithoutLaporanNestedInput
    wilayah?: WilayahUpdateOneRequiredWithoutLaporanNestedInput
    foto?: FotoSampahUpdateOneWithoutLaporanNestedInput
  }

  export type LaporanSampahUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    jenisSampahId?: StringFieldUpdateOperationsInput | string
    wilayahId?: StringFieldUpdateOperationsInput | string
    foto?: FotoSampahUncheckedUpdateOneWithoutLaporanNestedInput
  }

  export type LaporanSampahCreateManyInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    userId: string
    jenisSampahId: string
    wilayahId: string
  }

  export type LaporanSampahUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanSampahUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    jenisSampahId?: StringFieldUpdateOperationsInput | string
    wilayahId?: StringFieldUpdateOperationsInput | string
  }

  export type FotoSampahCreateInput = {
    id?: string
    imageUrl: string
    laporan: LaporanSampahCreateNestedOneWithoutFotoInput
  }

  export type FotoSampahUncheckedCreateInput = {
    id?: string
    imageUrl: string
    laporanId: string
  }

  export type FotoSampahUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    laporan?: LaporanSampahUpdateOneRequiredWithoutFotoNestedInput
  }

  export type FotoSampahUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    laporanId?: StringFieldUpdateOperationsInput | string
  }

  export type FotoSampahCreateManyInput = {
    id?: string
    imageUrl: string
    laporanId: string
  }

  export type FotoSampahUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type FotoSampahUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    laporanId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type LaporanSampahListRelationFilter = {
    every?: LaporanSampahWhereInput
    some?: LaporanSampahWhereInput
    none?: LaporanSampahWhereInput
  }

  export type LaporanSampahOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type JenisSampahCountOrderByAggregateInput = {
    id?: SortOrder
    namaJenis?: SortOrder
  }

  export type JenisSampahMaxOrderByAggregateInput = {
    id?: SortOrder
    namaJenis?: SortOrder
  }

  export type JenisSampahMinOrderByAggregateInput = {
    id?: SortOrder
    namaJenis?: SortOrder
  }

  export type WilayahCountOrderByAggregateInput = {
    id?: SortOrder
    namaWilayah?: SortOrder
  }

  export type WilayahMaxOrderByAggregateInput = {
    id?: SortOrder
    namaWilayah?: SortOrder
  }

  export type WilayahMinOrderByAggregateInput = {
    id?: SortOrder
    namaWilayah?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JenisSampahScalarRelationFilter = {
    is?: JenisSampahWhereInput
    isNot?: JenisSampahWhereInput
  }

  export type WilayahScalarRelationFilter = {
    is?: WilayahWhereInput
    isNot?: WilayahWhereInput
  }

  export type FotoSampahNullableScalarRelationFilter = {
    is?: FotoSampahWhereInput | null
    isNot?: FotoSampahWhereInput | null
  }

  export type LaporanSampahCountOrderByAggregateInput = {
    id?: SortOrder
    berat?: SortOrder
    tanggalLapor?: SortOrder
    userId?: SortOrder
    jenisSampahId?: SortOrder
    wilayahId?: SortOrder
  }

  export type LaporanSampahAvgOrderByAggregateInput = {
    berat?: SortOrder
  }

  export type LaporanSampahMaxOrderByAggregateInput = {
    id?: SortOrder
    berat?: SortOrder
    tanggalLapor?: SortOrder
    userId?: SortOrder
    jenisSampahId?: SortOrder
    wilayahId?: SortOrder
  }

  export type LaporanSampahMinOrderByAggregateInput = {
    id?: SortOrder
    berat?: SortOrder
    tanggalLapor?: SortOrder
    userId?: SortOrder
    jenisSampahId?: SortOrder
    wilayahId?: SortOrder
  }

  export type LaporanSampahSumOrderByAggregateInput = {
    berat?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LaporanSampahScalarRelationFilter = {
    is?: LaporanSampahWhereInput
    isNot?: LaporanSampahWhereInput
  }

  export type FotoSampahCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    laporanId?: SortOrder
  }

  export type FotoSampahMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    laporanId?: SortOrder
  }

  export type FotoSampahMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    laporanId?: SortOrder
  }

  export type LaporanSampahCreateNestedManyWithoutUserInput = {
    create?: XOR<LaporanSampahCreateWithoutUserInput, LaporanSampahUncheckedCreateWithoutUserInput> | LaporanSampahCreateWithoutUserInput[] | LaporanSampahUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutUserInput | LaporanSampahCreateOrConnectWithoutUserInput[]
    createMany?: LaporanSampahCreateManyUserInputEnvelope
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
  }

  export type LaporanSampahUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LaporanSampahCreateWithoutUserInput, LaporanSampahUncheckedCreateWithoutUserInput> | LaporanSampahCreateWithoutUserInput[] | LaporanSampahUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutUserInput | LaporanSampahCreateOrConnectWithoutUserInput[]
    createMany?: LaporanSampahCreateManyUserInputEnvelope
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LaporanSampahUpdateManyWithoutUserNestedInput = {
    create?: XOR<LaporanSampahCreateWithoutUserInput, LaporanSampahUncheckedCreateWithoutUserInput> | LaporanSampahCreateWithoutUserInput[] | LaporanSampahUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutUserInput | LaporanSampahCreateOrConnectWithoutUserInput[]
    upsert?: LaporanSampahUpsertWithWhereUniqueWithoutUserInput | LaporanSampahUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LaporanSampahCreateManyUserInputEnvelope
    set?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    disconnect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    delete?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    update?: LaporanSampahUpdateWithWhereUniqueWithoutUserInput | LaporanSampahUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LaporanSampahUpdateManyWithWhereWithoutUserInput | LaporanSampahUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LaporanSampahScalarWhereInput | LaporanSampahScalarWhereInput[]
  }

  export type LaporanSampahUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LaporanSampahCreateWithoutUserInput, LaporanSampahUncheckedCreateWithoutUserInput> | LaporanSampahCreateWithoutUserInput[] | LaporanSampahUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutUserInput | LaporanSampahCreateOrConnectWithoutUserInput[]
    upsert?: LaporanSampahUpsertWithWhereUniqueWithoutUserInput | LaporanSampahUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LaporanSampahCreateManyUserInputEnvelope
    set?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    disconnect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    delete?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    update?: LaporanSampahUpdateWithWhereUniqueWithoutUserInput | LaporanSampahUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LaporanSampahUpdateManyWithWhereWithoutUserInput | LaporanSampahUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LaporanSampahScalarWhereInput | LaporanSampahScalarWhereInput[]
  }

  export type LaporanSampahCreateNestedManyWithoutJenisSampahInput = {
    create?: XOR<LaporanSampahCreateWithoutJenisSampahInput, LaporanSampahUncheckedCreateWithoutJenisSampahInput> | LaporanSampahCreateWithoutJenisSampahInput[] | LaporanSampahUncheckedCreateWithoutJenisSampahInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutJenisSampahInput | LaporanSampahCreateOrConnectWithoutJenisSampahInput[]
    createMany?: LaporanSampahCreateManyJenisSampahInputEnvelope
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
  }

  export type LaporanSampahUncheckedCreateNestedManyWithoutJenisSampahInput = {
    create?: XOR<LaporanSampahCreateWithoutJenisSampahInput, LaporanSampahUncheckedCreateWithoutJenisSampahInput> | LaporanSampahCreateWithoutJenisSampahInput[] | LaporanSampahUncheckedCreateWithoutJenisSampahInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutJenisSampahInput | LaporanSampahCreateOrConnectWithoutJenisSampahInput[]
    createMany?: LaporanSampahCreateManyJenisSampahInputEnvelope
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
  }

  export type LaporanSampahUpdateManyWithoutJenisSampahNestedInput = {
    create?: XOR<LaporanSampahCreateWithoutJenisSampahInput, LaporanSampahUncheckedCreateWithoutJenisSampahInput> | LaporanSampahCreateWithoutJenisSampahInput[] | LaporanSampahUncheckedCreateWithoutJenisSampahInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutJenisSampahInput | LaporanSampahCreateOrConnectWithoutJenisSampahInput[]
    upsert?: LaporanSampahUpsertWithWhereUniqueWithoutJenisSampahInput | LaporanSampahUpsertWithWhereUniqueWithoutJenisSampahInput[]
    createMany?: LaporanSampahCreateManyJenisSampahInputEnvelope
    set?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    disconnect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    delete?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    update?: LaporanSampahUpdateWithWhereUniqueWithoutJenisSampahInput | LaporanSampahUpdateWithWhereUniqueWithoutJenisSampahInput[]
    updateMany?: LaporanSampahUpdateManyWithWhereWithoutJenisSampahInput | LaporanSampahUpdateManyWithWhereWithoutJenisSampahInput[]
    deleteMany?: LaporanSampahScalarWhereInput | LaporanSampahScalarWhereInput[]
  }

  export type LaporanSampahUncheckedUpdateManyWithoutJenisSampahNestedInput = {
    create?: XOR<LaporanSampahCreateWithoutJenisSampahInput, LaporanSampahUncheckedCreateWithoutJenisSampahInput> | LaporanSampahCreateWithoutJenisSampahInput[] | LaporanSampahUncheckedCreateWithoutJenisSampahInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutJenisSampahInput | LaporanSampahCreateOrConnectWithoutJenisSampahInput[]
    upsert?: LaporanSampahUpsertWithWhereUniqueWithoutJenisSampahInput | LaporanSampahUpsertWithWhereUniqueWithoutJenisSampahInput[]
    createMany?: LaporanSampahCreateManyJenisSampahInputEnvelope
    set?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    disconnect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    delete?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    update?: LaporanSampahUpdateWithWhereUniqueWithoutJenisSampahInput | LaporanSampahUpdateWithWhereUniqueWithoutJenisSampahInput[]
    updateMany?: LaporanSampahUpdateManyWithWhereWithoutJenisSampahInput | LaporanSampahUpdateManyWithWhereWithoutJenisSampahInput[]
    deleteMany?: LaporanSampahScalarWhereInput | LaporanSampahScalarWhereInput[]
  }

  export type LaporanSampahCreateNestedManyWithoutWilayahInput = {
    create?: XOR<LaporanSampahCreateWithoutWilayahInput, LaporanSampahUncheckedCreateWithoutWilayahInput> | LaporanSampahCreateWithoutWilayahInput[] | LaporanSampahUncheckedCreateWithoutWilayahInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutWilayahInput | LaporanSampahCreateOrConnectWithoutWilayahInput[]
    createMany?: LaporanSampahCreateManyWilayahInputEnvelope
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
  }

  export type LaporanSampahUncheckedCreateNestedManyWithoutWilayahInput = {
    create?: XOR<LaporanSampahCreateWithoutWilayahInput, LaporanSampahUncheckedCreateWithoutWilayahInput> | LaporanSampahCreateWithoutWilayahInput[] | LaporanSampahUncheckedCreateWithoutWilayahInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutWilayahInput | LaporanSampahCreateOrConnectWithoutWilayahInput[]
    createMany?: LaporanSampahCreateManyWilayahInputEnvelope
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
  }

  export type LaporanSampahUpdateManyWithoutWilayahNestedInput = {
    create?: XOR<LaporanSampahCreateWithoutWilayahInput, LaporanSampahUncheckedCreateWithoutWilayahInput> | LaporanSampahCreateWithoutWilayahInput[] | LaporanSampahUncheckedCreateWithoutWilayahInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutWilayahInput | LaporanSampahCreateOrConnectWithoutWilayahInput[]
    upsert?: LaporanSampahUpsertWithWhereUniqueWithoutWilayahInput | LaporanSampahUpsertWithWhereUniqueWithoutWilayahInput[]
    createMany?: LaporanSampahCreateManyWilayahInputEnvelope
    set?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    disconnect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    delete?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    update?: LaporanSampahUpdateWithWhereUniqueWithoutWilayahInput | LaporanSampahUpdateWithWhereUniqueWithoutWilayahInput[]
    updateMany?: LaporanSampahUpdateManyWithWhereWithoutWilayahInput | LaporanSampahUpdateManyWithWhereWithoutWilayahInput[]
    deleteMany?: LaporanSampahScalarWhereInput | LaporanSampahScalarWhereInput[]
  }

  export type LaporanSampahUncheckedUpdateManyWithoutWilayahNestedInput = {
    create?: XOR<LaporanSampahCreateWithoutWilayahInput, LaporanSampahUncheckedCreateWithoutWilayahInput> | LaporanSampahCreateWithoutWilayahInput[] | LaporanSampahUncheckedCreateWithoutWilayahInput[]
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutWilayahInput | LaporanSampahCreateOrConnectWithoutWilayahInput[]
    upsert?: LaporanSampahUpsertWithWhereUniqueWithoutWilayahInput | LaporanSampahUpsertWithWhereUniqueWithoutWilayahInput[]
    createMany?: LaporanSampahCreateManyWilayahInputEnvelope
    set?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    disconnect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    delete?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    connect?: LaporanSampahWhereUniqueInput | LaporanSampahWhereUniqueInput[]
    update?: LaporanSampahUpdateWithWhereUniqueWithoutWilayahInput | LaporanSampahUpdateWithWhereUniqueWithoutWilayahInput[]
    updateMany?: LaporanSampahUpdateManyWithWhereWithoutWilayahInput | LaporanSampahUpdateManyWithWhereWithoutWilayahInput[]
    deleteMany?: LaporanSampahScalarWhereInput | LaporanSampahScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLaporanInput = {
    create?: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaporanInput
    connect?: UserWhereUniqueInput
  }

  export type JenisSampahCreateNestedOneWithoutLaporanInput = {
    create?: XOR<JenisSampahCreateWithoutLaporanInput, JenisSampahUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: JenisSampahCreateOrConnectWithoutLaporanInput
    connect?: JenisSampahWhereUniqueInput
  }

  export type WilayahCreateNestedOneWithoutLaporanInput = {
    create?: XOR<WilayahCreateWithoutLaporanInput, WilayahUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: WilayahCreateOrConnectWithoutLaporanInput
    connect?: WilayahWhereUniqueInput
  }

  export type FotoSampahCreateNestedOneWithoutLaporanInput = {
    create?: XOR<FotoSampahCreateWithoutLaporanInput, FotoSampahUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: FotoSampahCreateOrConnectWithoutLaporanInput
    connect?: FotoSampahWhereUniqueInput
  }

  export type FotoSampahUncheckedCreateNestedOneWithoutLaporanInput = {
    create?: XOR<FotoSampahCreateWithoutLaporanInput, FotoSampahUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: FotoSampahCreateOrConnectWithoutLaporanInput
    connect?: FotoSampahWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutLaporanNestedInput = {
    create?: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaporanInput
    upsert?: UserUpsertWithoutLaporanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLaporanInput, UserUpdateWithoutLaporanInput>, UserUncheckedUpdateWithoutLaporanInput>
  }

  export type JenisSampahUpdateOneRequiredWithoutLaporanNestedInput = {
    create?: XOR<JenisSampahCreateWithoutLaporanInput, JenisSampahUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: JenisSampahCreateOrConnectWithoutLaporanInput
    upsert?: JenisSampahUpsertWithoutLaporanInput
    connect?: JenisSampahWhereUniqueInput
    update?: XOR<XOR<JenisSampahUpdateToOneWithWhereWithoutLaporanInput, JenisSampahUpdateWithoutLaporanInput>, JenisSampahUncheckedUpdateWithoutLaporanInput>
  }

  export type WilayahUpdateOneRequiredWithoutLaporanNestedInput = {
    create?: XOR<WilayahCreateWithoutLaporanInput, WilayahUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: WilayahCreateOrConnectWithoutLaporanInput
    upsert?: WilayahUpsertWithoutLaporanInput
    connect?: WilayahWhereUniqueInput
    update?: XOR<XOR<WilayahUpdateToOneWithWhereWithoutLaporanInput, WilayahUpdateWithoutLaporanInput>, WilayahUncheckedUpdateWithoutLaporanInput>
  }

  export type FotoSampahUpdateOneWithoutLaporanNestedInput = {
    create?: XOR<FotoSampahCreateWithoutLaporanInput, FotoSampahUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: FotoSampahCreateOrConnectWithoutLaporanInput
    upsert?: FotoSampahUpsertWithoutLaporanInput
    disconnect?: FotoSampahWhereInput | boolean
    delete?: FotoSampahWhereInput | boolean
    connect?: FotoSampahWhereUniqueInput
    update?: XOR<XOR<FotoSampahUpdateToOneWithWhereWithoutLaporanInput, FotoSampahUpdateWithoutLaporanInput>, FotoSampahUncheckedUpdateWithoutLaporanInput>
  }

  export type FotoSampahUncheckedUpdateOneWithoutLaporanNestedInput = {
    create?: XOR<FotoSampahCreateWithoutLaporanInput, FotoSampahUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: FotoSampahCreateOrConnectWithoutLaporanInput
    upsert?: FotoSampahUpsertWithoutLaporanInput
    disconnect?: FotoSampahWhereInput | boolean
    delete?: FotoSampahWhereInput | boolean
    connect?: FotoSampahWhereUniqueInput
    update?: XOR<XOR<FotoSampahUpdateToOneWithWhereWithoutLaporanInput, FotoSampahUpdateWithoutLaporanInput>, FotoSampahUncheckedUpdateWithoutLaporanInput>
  }

  export type LaporanSampahCreateNestedOneWithoutFotoInput = {
    create?: XOR<LaporanSampahCreateWithoutFotoInput, LaporanSampahUncheckedCreateWithoutFotoInput>
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutFotoInput
    connect?: LaporanSampahWhereUniqueInput
  }

  export type LaporanSampahUpdateOneRequiredWithoutFotoNestedInput = {
    create?: XOR<LaporanSampahCreateWithoutFotoInput, LaporanSampahUncheckedCreateWithoutFotoInput>
    connectOrCreate?: LaporanSampahCreateOrConnectWithoutFotoInput
    upsert?: LaporanSampahUpsertWithoutFotoInput
    connect?: LaporanSampahWhereUniqueInput
    update?: XOR<XOR<LaporanSampahUpdateToOneWithWhereWithoutFotoInput, LaporanSampahUpdateWithoutFotoInput>, LaporanSampahUncheckedUpdateWithoutFotoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LaporanSampahCreateWithoutUserInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    jenisSampah: JenisSampahCreateNestedOneWithoutLaporanInput
    wilayah: WilayahCreateNestedOneWithoutLaporanInput
    foto?: FotoSampahCreateNestedOneWithoutLaporanInput
  }

  export type LaporanSampahUncheckedCreateWithoutUserInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    jenisSampahId: string
    wilayahId: string
    foto?: FotoSampahUncheckedCreateNestedOneWithoutLaporanInput
  }

  export type LaporanSampahCreateOrConnectWithoutUserInput = {
    where: LaporanSampahWhereUniqueInput
    create: XOR<LaporanSampahCreateWithoutUserInput, LaporanSampahUncheckedCreateWithoutUserInput>
  }

  export type LaporanSampahCreateManyUserInputEnvelope = {
    data: LaporanSampahCreateManyUserInput | LaporanSampahCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LaporanSampahUpsertWithWhereUniqueWithoutUserInput = {
    where: LaporanSampahWhereUniqueInput
    update: XOR<LaporanSampahUpdateWithoutUserInput, LaporanSampahUncheckedUpdateWithoutUserInput>
    create: XOR<LaporanSampahCreateWithoutUserInput, LaporanSampahUncheckedCreateWithoutUserInput>
  }

  export type LaporanSampahUpdateWithWhereUniqueWithoutUserInput = {
    where: LaporanSampahWhereUniqueInput
    data: XOR<LaporanSampahUpdateWithoutUserInput, LaporanSampahUncheckedUpdateWithoutUserInput>
  }

  export type LaporanSampahUpdateManyWithWhereWithoutUserInput = {
    where: LaporanSampahScalarWhereInput
    data: XOR<LaporanSampahUpdateManyMutationInput, LaporanSampahUncheckedUpdateManyWithoutUserInput>
  }

  export type LaporanSampahScalarWhereInput = {
    AND?: LaporanSampahScalarWhereInput | LaporanSampahScalarWhereInput[]
    OR?: LaporanSampahScalarWhereInput[]
    NOT?: LaporanSampahScalarWhereInput | LaporanSampahScalarWhereInput[]
    id?: StringFilter<"LaporanSampah"> | string
    berat?: FloatFilter<"LaporanSampah"> | number
    tanggalLapor?: DateTimeFilter<"LaporanSampah"> | Date | string
    userId?: StringFilter<"LaporanSampah"> | string
    jenisSampahId?: StringFilter<"LaporanSampah"> | string
    wilayahId?: StringFilter<"LaporanSampah"> | string
  }

  export type LaporanSampahCreateWithoutJenisSampahInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    user: UserCreateNestedOneWithoutLaporanInput
    wilayah: WilayahCreateNestedOneWithoutLaporanInput
    foto?: FotoSampahCreateNestedOneWithoutLaporanInput
  }

  export type LaporanSampahUncheckedCreateWithoutJenisSampahInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    userId: string
    wilayahId: string
    foto?: FotoSampahUncheckedCreateNestedOneWithoutLaporanInput
  }

  export type LaporanSampahCreateOrConnectWithoutJenisSampahInput = {
    where: LaporanSampahWhereUniqueInput
    create: XOR<LaporanSampahCreateWithoutJenisSampahInput, LaporanSampahUncheckedCreateWithoutJenisSampahInput>
  }

  export type LaporanSampahCreateManyJenisSampahInputEnvelope = {
    data: LaporanSampahCreateManyJenisSampahInput | LaporanSampahCreateManyJenisSampahInput[]
    skipDuplicates?: boolean
  }

  export type LaporanSampahUpsertWithWhereUniqueWithoutJenisSampahInput = {
    where: LaporanSampahWhereUniqueInput
    update: XOR<LaporanSampahUpdateWithoutJenisSampahInput, LaporanSampahUncheckedUpdateWithoutJenisSampahInput>
    create: XOR<LaporanSampahCreateWithoutJenisSampahInput, LaporanSampahUncheckedCreateWithoutJenisSampahInput>
  }

  export type LaporanSampahUpdateWithWhereUniqueWithoutJenisSampahInput = {
    where: LaporanSampahWhereUniqueInput
    data: XOR<LaporanSampahUpdateWithoutJenisSampahInput, LaporanSampahUncheckedUpdateWithoutJenisSampahInput>
  }

  export type LaporanSampahUpdateManyWithWhereWithoutJenisSampahInput = {
    where: LaporanSampahScalarWhereInput
    data: XOR<LaporanSampahUpdateManyMutationInput, LaporanSampahUncheckedUpdateManyWithoutJenisSampahInput>
  }

  export type LaporanSampahCreateWithoutWilayahInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    user: UserCreateNestedOneWithoutLaporanInput
    jenisSampah: JenisSampahCreateNestedOneWithoutLaporanInput
    foto?: FotoSampahCreateNestedOneWithoutLaporanInput
  }

  export type LaporanSampahUncheckedCreateWithoutWilayahInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    userId: string
    jenisSampahId: string
    foto?: FotoSampahUncheckedCreateNestedOneWithoutLaporanInput
  }

  export type LaporanSampahCreateOrConnectWithoutWilayahInput = {
    where: LaporanSampahWhereUniqueInput
    create: XOR<LaporanSampahCreateWithoutWilayahInput, LaporanSampahUncheckedCreateWithoutWilayahInput>
  }

  export type LaporanSampahCreateManyWilayahInputEnvelope = {
    data: LaporanSampahCreateManyWilayahInput | LaporanSampahCreateManyWilayahInput[]
    skipDuplicates?: boolean
  }

  export type LaporanSampahUpsertWithWhereUniqueWithoutWilayahInput = {
    where: LaporanSampahWhereUniqueInput
    update: XOR<LaporanSampahUpdateWithoutWilayahInput, LaporanSampahUncheckedUpdateWithoutWilayahInput>
    create: XOR<LaporanSampahCreateWithoutWilayahInput, LaporanSampahUncheckedCreateWithoutWilayahInput>
  }

  export type LaporanSampahUpdateWithWhereUniqueWithoutWilayahInput = {
    where: LaporanSampahWhereUniqueInput
    data: XOR<LaporanSampahUpdateWithoutWilayahInput, LaporanSampahUncheckedUpdateWithoutWilayahInput>
  }

  export type LaporanSampahUpdateManyWithWhereWithoutWilayahInput = {
    where: LaporanSampahScalarWhereInput
    data: XOR<LaporanSampahUpdateManyMutationInput, LaporanSampahUncheckedUpdateManyWithoutWilayahInput>
  }

  export type UserCreateWithoutLaporanInput = {
    id?: string
    nama: string
    email: string
    noHp: string
  }

  export type UserUncheckedCreateWithoutLaporanInput = {
    id?: string
    nama: string
    email: string
    noHp: string
  }

  export type UserCreateOrConnectWithoutLaporanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
  }

  export type JenisSampahCreateWithoutLaporanInput = {
    id?: string
    namaJenis: string
  }

  export type JenisSampahUncheckedCreateWithoutLaporanInput = {
    id?: string
    namaJenis: string
  }

  export type JenisSampahCreateOrConnectWithoutLaporanInput = {
    where: JenisSampahWhereUniqueInput
    create: XOR<JenisSampahCreateWithoutLaporanInput, JenisSampahUncheckedCreateWithoutLaporanInput>
  }

  export type WilayahCreateWithoutLaporanInput = {
    id?: string
    namaWilayah: string
  }

  export type WilayahUncheckedCreateWithoutLaporanInput = {
    id?: string
    namaWilayah: string
  }

  export type WilayahCreateOrConnectWithoutLaporanInput = {
    where: WilayahWhereUniqueInput
    create: XOR<WilayahCreateWithoutLaporanInput, WilayahUncheckedCreateWithoutLaporanInput>
  }

  export type FotoSampahCreateWithoutLaporanInput = {
    id?: string
    imageUrl: string
  }

  export type FotoSampahUncheckedCreateWithoutLaporanInput = {
    id?: string
    imageUrl: string
  }

  export type FotoSampahCreateOrConnectWithoutLaporanInput = {
    where: FotoSampahWhereUniqueInput
    create: XOR<FotoSampahCreateWithoutLaporanInput, FotoSampahUncheckedCreateWithoutLaporanInput>
  }

  export type UserUpsertWithoutLaporanInput = {
    update: XOR<UserUpdateWithoutLaporanInput, UserUncheckedUpdateWithoutLaporanInput>
    create: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLaporanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLaporanInput, UserUncheckedUpdateWithoutLaporanInput>
  }

  export type UserUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
  }

  export type JenisSampahUpsertWithoutLaporanInput = {
    update: XOR<JenisSampahUpdateWithoutLaporanInput, JenisSampahUncheckedUpdateWithoutLaporanInput>
    create: XOR<JenisSampahCreateWithoutLaporanInput, JenisSampahUncheckedCreateWithoutLaporanInput>
    where?: JenisSampahWhereInput
  }

  export type JenisSampahUpdateToOneWithWhereWithoutLaporanInput = {
    where?: JenisSampahWhereInput
    data: XOR<JenisSampahUpdateWithoutLaporanInput, JenisSampahUncheckedUpdateWithoutLaporanInput>
  }

  export type JenisSampahUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
  }

  export type JenisSampahUncheckedUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
  }

  export type WilayahUpsertWithoutLaporanInput = {
    update: XOR<WilayahUpdateWithoutLaporanInput, WilayahUncheckedUpdateWithoutLaporanInput>
    create: XOR<WilayahCreateWithoutLaporanInput, WilayahUncheckedCreateWithoutLaporanInput>
    where?: WilayahWhereInput
  }

  export type WilayahUpdateToOneWithWhereWithoutLaporanInput = {
    where?: WilayahWhereInput
    data: XOR<WilayahUpdateWithoutLaporanInput, WilayahUncheckedUpdateWithoutLaporanInput>
  }

  export type WilayahUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaWilayah?: StringFieldUpdateOperationsInput | string
  }

  export type WilayahUncheckedUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaWilayah?: StringFieldUpdateOperationsInput | string
  }

  export type FotoSampahUpsertWithoutLaporanInput = {
    update: XOR<FotoSampahUpdateWithoutLaporanInput, FotoSampahUncheckedUpdateWithoutLaporanInput>
    create: XOR<FotoSampahCreateWithoutLaporanInput, FotoSampahUncheckedCreateWithoutLaporanInput>
    where?: FotoSampahWhereInput
  }

  export type FotoSampahUpdateToOneWithWhereWithoutLaporanInput = {
    where?: FotoSampahWhereInput
    data: XOR<FotoSampahUpdateWithoutLaporanInput, FotoSampahUncheckedUpdateWithoutLaporanInput>
  }

  export type FotoSampahUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type FotoSampahUncheckedUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type LaporanSampahCreateWithoutFotoInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    user: UserCreateNestedOneWithoutLaporanInput
    jenisSampah: JenisSampahCreateNestedOneWithoutLaporanInput
    wilayah: WilayahCreateNestedOneWithoutLaporanInput
  }

  export type LaporanSampahUncheckedCreateWithoutFotoInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    userId: string
    jenisSampahId: string
    wilayahId: string
  }

  export type LaporanSampahCreateOrConnectWithoutFotoInput = {
    where: LaporanSampahWhereUniqueInput
    create: XOR<LaporanSampahCreateWithoutFotoInput, LaporanSampahUncheckedCreateWithoutFotoInput>
  }

  export type LaporanSampahUpsertWithoutFotoInput = {
    update: XOR<LaporanSampahUpdateWithoutFotoInput, LaporanSampahUncheckedUpdateWithoutFotoInput>
    create: XOR<LaporanSampahCreateWithoutFotoInput, LaporanSampahUncheckedCreateWithoutFotoInput>
    where?: LaporanSampahWhereInput
  }

  export type LaporanSampahUpdateToOneWithWhereWithoutFotoInput = {
    where?: LaporanSampahWhereInput
    data: XOR<LaporanSampahUpdateWithoutFotoInput, LaporanSampahUncheckedUpdateWithoutFotoInput>
  }

  export type LaporanSampahUpdateWithoutFotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaporanNestedInput
    jenisSampah?: JenisSampahUpdateOneRequiredWithoutLaporanNestedInput
    wilayah?: WilayahUpdateOneRequiredWithoutLaporanNestedInput
  }

  export type LaporanSampahUncheckedUpdateWithoutFotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    jenisSampahId?: StringFieldUpdateOperationsInput | string
    wilayahId?: StringFieldUpdateOperationsInput | string
  }

  export type LaporanSampahCreateManyUserInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    jenisSampahId: string
    wilayahId: string
  }

  export type LaporanSampahUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisSampah?: JenisSampahUpdateOneRequiredWithoutLaporanNestedInput
    wilayah?: WilayahUpdateOneRequiredWithoutLaporanNestedInput
    foto?: FotoSampahUpdateOneWithoutLaporanNestedInput
  }

  export type LaporanSampahUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisSampahId?: StringFieldUpdateOperationsInput | string
    wilayahId?: StringFieldUpdateOperationsInput | string
    foto?: FotoSampahUncheckedUpdateOneWithoutLaporanNestedInput
  }

  export type LaporanSampahUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisSampahId?: StringFieldUpdateOperationsInput | string
    wilayahId?: StringFieldUpdateOperationsInput | string
  }

  export type LaporanSampahCreateManyJenisSampahInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    userId: string
    wilayahId: string
  }

  export type LaporanSampahUpdateWithoutJenisSampahInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaporanNestedInput
    wilayah?: WilayahUpdateOneRequiredWithoutLaporanNestedInput
    foto?: FotoSampahUpdateOneWithoutLaporanNestedInput
  }

  export type LaporanSampahUncheckedUpdateWithoutJenisSampahInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    wilayahId?: StringFieldUpdateOperationsInput | string
    foto?: FotoSampahUncheckedUpdateOneWithoutLaporanNestedInput
  }

  export type LaporanSampahUncheckedUpdateManyWithoutJenisSampahInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    wilayahId?: StringFieldUpdateOperationsInput | string
  }

  export type LaporanSampahCreateManyWilayahInput = {
    id?: string
    berat: number
    tanggalLapor?: Date | string
    userId: string
    jenisSampahId: string
  }

  export type LaporanSampahUpdateWithoutWilayahInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaporanNestedInput
    jenisSampah?: JenisSampahUpdateOneRequiredWithoutLaporanNestedInput
    foto?: FotoSampahUpdateOneWithoutLaporanNestedInput
  }

  export type LaporanSampahUncheckedUpdateWithoutWilayahInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    jenisSampahId?: StringFieldUpdateOperationsInput | string
    foto?: FotoSampahUncheckedUpdateOneWithoutLaporanNestedInput
  }

  export type LaporanSampahUncheckedUpdateManyWithoutWilayahInput = {
    id?: StringFieldUpdateOperationsInput | string
    berat?: FloatFieldUpdateOperationsInput | number
    tanggalLapor?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    jenisSampahId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}