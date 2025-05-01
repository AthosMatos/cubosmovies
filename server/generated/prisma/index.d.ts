
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Movies
 * 
 */
export type Movies = $Result.DefaultSelection<Prisma.$MoviesPayload>
/**
 * Model MovieGenres
 * 
 */
export type MovieGenres = $Result.DefaultSelection<Prisma.$MovieGenresPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.movies`: Exposes CRUD operations for the **Movies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movies.findMany()
    * ```
    */
  get movies(): Prisma.MoviesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieGenres`: Exposes CRUD operations for the **MovieGenres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieGenres
    * const movieGenres = await prisma.movieGenres.findMany()
    * ```
    */
  get movieGenres(): Prisma.MovieGenresDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Movies: 'Movies',
    MovieGenres: 'MovieGenres'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "movies" | "movieGenres"
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
      Movies: {
        payload: Prisma.$MoviesPayload<ExtArgs>
        fields: Prisma.MoviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoviesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoviesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findFirst: {
            args: Prisma.MoviesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoviesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findMany: {
            args: Prisma.MoviesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          create: {
            args: Prisma.MoviesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          createMany: {
            args: Prisma.MoviesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoviesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          delete: {
            args: Prisma.MoviesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          update: {
            args: Prisma.MoviesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          deleteMany: {
            args: Prisma.MoviesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoviesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoviesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          upsert: {
            args: Prisma.MoviesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovies>
          }
          groupBy: {
            args: Prisma.MoviesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoviesCountArgs<ExtArgs>
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number
          }
        }
      }
      MovieGenres: {
        payload: Prisma.$MovieGenresPayload<ExtArgs>
        fields: Prisma.MovieGenresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieGenresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieGenresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenresPayload>
          }
          findFirst: {
            args: Prisma.MovieGenresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieGenresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenresPayload>
          }
          findMany: {
            args: Prisma.MovieGenresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenresPayload>[]
          }
          create: {
            args: Prisma.MovieGenresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenresPayload>
          }
          createMany: {
            args: Prisma.MovieGenresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieGenresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenresPayload>[]
          }
          delete: {
            args: Prisma.MovieGenresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenresPayload>
          }
          update: {
            args: Prisma.MovieGenresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenresPayload>
          }
          deleteMany: {
            args: Prisma.MovieGenresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieGenresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieGenresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenresPayload>[]
          }
          upsert: {
            args: Prisma.MovieGenresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenresPayload>
          }
          aggregate: {
            args: Prisma.MovieGenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieGenres>
          }
          groupBy: {
            args: Prisma.MovieGenresGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieGenresCountArgs<ExtArgs>
            result: $Utils.Optional<MovieGenresCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    movies?: MoviesOmit
    movieGenres?: MovieGenresOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type MoviesCountOutputType
   */

  export type MoviesCountOutputType = {
    genre: number
  }

  export type MoviesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | MoviesCountOutputTypeCountGenreArgs
  }

  // Custom InputTypes
  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCountOutputType
     */
    select?: MoviesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountGenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieGenresWhereInput
  }


  /**
   * Count Type MovieGenresCountOutputType
   */

  export type MovieGenresCountOutputType = {
    movies: number
  }

  export type MovieGenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MovieGenresCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * MovieGenresCountOutputType without action
   */
  export type MovieGenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenresCountOutputType
     */
    select?: MovieGenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieGenresCountOutputType without action
   */
  export type MovieGenresCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    password: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      password: string | null
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
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
  }


  /**
   * Model Movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  export type MoviesAvgAggregateOutputType = {
    id: number | null
    popularity: number | null
    vote_average: number | null
    vote_count: number | null
    duration: number | null
    budget: number | null
    revenue: number | null
    profit: number | null
  }

  export type MoviesSumAggregateOutputType = {
    id: number | null
    popularity: number | null
    vote_average: number | null
    vote_count: number | null
    duration: number | null
    budget: number | null
    revenue: number | null
    profit: number | null
  }

  export type MoviesMinAggregateOutputType = {
    id: number | null
    title: string | null
    original_title: string | null
    subtitle: string | null
    synopsis: string | null
    popularity: number | null
    vote_average: number | null
    vote_count: number | null
    release_date: Date | null
    duration: number | null
    situation: string | null
    language: string | null
    budget: number | null
    revenue: number | null
    profit: number | null
    poster: string | null
    backdrop: string | null
    trailer: string | null
  }

  export type MoviesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    original_title: string | null
    subtitle: string | null
    synopsis: string | null
    popularity: number | null
    vote_average: number | null
    vote_count: number | null
    release_date: Date | null
    duration: number | null
    situation: string | null
    language: string | null
    budget: number | null
    revenue: number | null
    profit: number | null
    poster: string | null
    backdrop: string | null
    trailer: string | null
  }

  export type MoviesCountAggregateOutputType = {
    id: number
    title: number
    original_title: number
    subtitle: number
    synopsis: number
    popularity: number
    vote_average: number
    vote_count: number
    release_date: number
    duration: number
    situation: number
    language: number
    budget: number
    revenue: number
    profit: number
    poster: number
    backdrop: number
    trailer: number
    _all: number
  }


  export type MoviesAvgAggregateInputType = {
    id?: true
    popularity?: true
    vote_average?: true
    vote_count?: true
    duration?: true
    budget?: true
    revenue?: true
    profit?: true
  }

  export type MoviesSumAggregateInputType = {
    id?: true
    popularity?: true
    vote_average?: true
    vote_count?: true
    duration?: true
    budget?: true
    revenue?: true
    profit?: true
  }

  export type MoviesMinAggregateInputType = {
    id?: true
    title?: true
    original_title?: true
    subtitle?: true
    synopsis?: true
    popularity?: true
    vote_average?: true
    vote_count?: true
    release_date?: true
    duration?: true
    situation?: true
    language?: true
    budget?: true
    revenue?: true
    profit?: true
    poster?: true
    backdrop?: true
    trailer?: true
  }

  export type MoviesMaxAggregateInputType = {
    id?: true
    title?: true
    original_title?: true
    subtitle?: true
    synopsis?: true
    popularity?: true
    vote_average?: true
    vote_count?: true
    release_date?: true
    duration?: true
    situation?: true
    language?: true
    budget?: true
    revenue?: true
    profit?: true
    poster?: true
    backdrop?: true
    trailer?: true
  }

  export type MoviesCountAggregateInputType = {
    id?: true
    title?: true
    original_title?: true
    subtitle?: true
    synopsis?: true
    popularity?: true
    vote_average?: true
    vote_count?: true
    release_date?: true
    duration?: true
    situation?: true
    language?: true
    budget?: true
    revenue?: true
    profit?: true
    poster?: true
    backdrop?: true
    trailer?: true
    _all?: true
  }

  export type MoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to aggregate.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesMaxAggregateInputType
  }

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>
  }




  export type MoviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithAggregationInput | MoviesOrderByWithAggregationInput[]
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum
    having?: MoviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCountAggregateInputType | true
    _avg?: MoviesAvgAggregateInputType
    _sum?: MoviesSumAggregateInputType
    _min?: MoviesMinAggregateInputType
    _max?: MoviesMaxAggregateInputType
  }

  export type MoviesGroupByOutputType = {
    id: number
    title: string
    original_title: string
    subtitle: string | null
    synopsis: string | null
    popularity: number | null
    vote_average: number | null
    vote_count: number | null
    release_date: Date | null
    duration: number | null
    situation: string | null
    language: string | null
    budget: number | null
    revenue: number | null
    profit: number | null
    poster: string | null
    backdrop: string | null
    trailer: string | null
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  type GetMoviesGroupByPayload<T extends MoviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>
        }
      >
    >


  export type MoviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    original_title?: boolean
    subtitle?: boolean
    synopsis?: boolean
    popularity?: boolean
    vote_average?: boolean
    vote_count?: boolean
    release_date?: boolean
    duration?: boolean
    situation?: boolean
    language?: boolean
    budget?: boolean
    revenue?: boolean
    profit?: boolean
    poster?: boolean
    backdrop?: boolean
    trailer?: boolean
    genre?: boolean | Movies$genreArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    original_title?: boolean
    subtitle?: boolean
    synopsis?: boolean
    popularity?: boolean
    vote_average?: boolean
    vote_count?: boolean
    release_date?: boolean
    duration?: boolean
    situation?: boolean
    language?: boolean
    budget?: boolean
    revenue?: boolean
    profit?: boolean
    poster?: boolean
    backdrop?: boolean
    trailer?: boolean
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    original_title?: boolean
    subtitle?: boolean
    synopsis?: boolean
    popularity?: boolean
    vote_average?: boolean
    vote_count?: boolean
    release_date?: boolean
    duration?: boolean
    situation?: boolean
    language?: boolean
    budget?: boolean
    revenue?: boolean
    profit?: boolean
    poster?: boolean
    backdrop?: boolean
    trailer?: boolean
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectScalar = {
    id?: boolean
    title?: boolean
    original_title?: boolean
    subtitle?: boolean
    synopsis?: boolean
    popularity?: boolean
    vote_average?: boolean
    vote_count?: boolean
    release_date?: boolean
    duration?: boolean
    situation?: boolean
    language?: boolean
    budget?: boolean
    revenue?: boolean
    profit?: boolean
    poster?: boolean
    backdrop?: boolean
    trailer?: boolean
  }

  export type MoviesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "original_title" | "subtitle" | "synopsis" | "popularity" | "vote_average" | "vote_count" | "release_date" | "duration" | "situation" | "language" | "budget" | "revenue" | "profit" | "poster" | "backdrop" | "trailer", ExtArgs["result"]["movies"]>
  export type MoviesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | Movies$genreArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MoviesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MoviesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MoviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movies"
    objects: {
      genre: Prisma.$MovieGenresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      original_title: string
      subtitle: string | null
      synopsis: string | null
      popularity: number | null
      vote_average: number | null
      vote_count: number | null
      release_date: Date | null
      duration: number | null
      situation: string | null
      language: string | null
      budget: number | null
      revenue: number | null
      profit: number | null
      poster: string | null
      backdrop: string | null
      trailer: string | null
    }, ExtArgs["result"]["movies"]>
    composites: {}
  }

  type MoviesGetPayload<S extends boolean | null | undefined | MoviesDefaultArgs> = $Result.GetResult<Prisma.$MoviesPayload, S>

  type MoviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoviesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoviesCountAggregateInputType | true
    }

  export interface MoviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movies'], meta: { name: 'Movies' } }
    /**
     * Find zero or one Movies that matches the filter.
     * @param {MoviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoviesFindUniqueArgs>(args: SelectSubset<T, MoviesFindUniqueArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoviesFindUniqueOrThrowArgs>(args: SelectSubset<T, MoviesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoviesFindFirstArgs>(args?: SelectSubset<T, MoviesFindFirstArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoviesFindFirstOrThrowArgs>(args?: SelectSubset<T, MoviesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoviesFindManyArgs>(args?: SelectSubset<T, MoviesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movies.
     * @param {MoviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     * 
     */
    create<T extends MoviesCreateArgs>(args: SelectSubset<T, MoviesCreateArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MoviesCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoviesCreateManyArgs>(args?: SelectSubset<T, MoviesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MoviesCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoviesCreateManyAndReturnArgs>(args?: SelectSubset<T, MoviesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movies.
     * @param {MoviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     * 
     */
    delete<T extends MoviesDeleteArgs>(args: SelectSubset<T, MoviesDeleteArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movies.
     * @param {MoviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoviesUpdateArgs>(args: SelectSubset<T, MoviesUpdateArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MoviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoviesDeleteManyArgs>(args?: SelectSubset<T, MoviesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoviesUpdateManyArgs>(args: SelectSubset<T, MoviesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {MoviesUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.updateManyAndReturn({
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
    updateManyAndReturn<T extends MoviesUpdateManyAndReturnArgs>(args: SelectSubset<T, MoviesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movies.
     * @param {MoviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
     */
    upsert<T extends MoviesUpsertArgs>(args: SelectSubset<T, MoviesUpsertArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MoviesCountArgs>(
      args?: Subset<T, MoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoviesAggregateArgs>(args: Subset<T, MoviesAggregateArgs>): Prisma.PrismaPromise<GetMoviesAggregateType<T>>

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesGroupByArgs} args - Group by arguments.
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
      T extends MoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoviesGroupByArgs['orderBy'] }
        : { orderBy?: MoviesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movies model
   */
  readonly fields: MoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genre<T extends Movies$genreArgs<ExtArgs> = {}>(args?: Subset<T, Movies$genreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Movies model
   */
  interface MoviesFieldRefs {
    readonly id: FieldRef<"Movies", 'Int'>
    readonly title: FieldRef<"Movies", 'String'>
    readonly original_title: FieldRef<"Movies", 'String'>
    readonly subtitle: FieldRef<"Movies", 'String'>
    readonly synopsis: FieldRef<"Movies", 'String'>
    readonly popularity: FieldRef<"Movies", 'Float'>
    readonly vote_average: FieldRef<"Movies", 'Float'>
    readonly vote_count: FieldRef<"Movies", 'Int'>
    readonly release_date: FieldRef<"Movies", 'DateTime'>
    readonly duration: FieldRef<"Movies", 'Int'>
    readonly situation: FieldRef<"Movies", 'String'>
    readonly language: FieldRef<"Movies", 'String'>
    readonly budget: FieldRef<"Movies", 'Float'>
    readonly revenue: FieldRef<"Movies", 'Float'>
    readonly profit: FieldRef<"Movies", 'Float'>
    readonly poster: FieldRef<"Movies", 'String'>
    readonly backdrop: FieldRef<"Movies", 'String'>
    readonly trailer: FieldRef<"Movies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Movies findUnique
   */
  export type MoviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies findUniqueOrThrow
   */
  export type MoviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies findFirst
   */
  export type MoviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies findFirstOrThrow
   */
  export type MoviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies findMany
   */
  export type MoviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies create
   */
  export type MoviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to create a Movies.
     */
    data: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
  }

  /**
   * Movies createMany
   */
  export type MoviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MoviesCreateManyInput | MoviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movies createManyAndReturn
   */
  export type MoviesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * The data used to create many Movies.
     */
    data: MoviesCreateManyInput | MoviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movies update
   */
  export type MoviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to update a Movies.
     */
    data: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
    /**
     * Choose, which Movies to update.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies updateMany
   */
  export type MoviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MoviesWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movies updateManyAndReturn
   */
  export type MoviesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * The data used to update Movies.
     */
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MoviesWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movies upsert
   */
  export type MoviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The filter to search for the Movies to update in case it exists.
     */
    where: MoviesWhereUniqueInput
    /**
     * In case the Movies found by the `where` argument doesn't exist, create a new Movies with this data.
     */
    create: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
    /**
     * In case the Movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
  }

  /**
   * Movies delete
   */
  export type MoviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter which Movies to delete.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies deleteMany
   */
  export type MoviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MoviesWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movies.genre
   */
  export type Movies$genreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenresInclude<ExtArgs> | null
    where?: MovieGenresWhereInput
    orderBy?: MovieGenresOrderByWithRelationInput | MovieGenresOrderByWithRelationInput[]
    cursor?: MovieGenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieGenresScalarFieldEnum | MovieGenresScalarFieldEnum[]
  }

  /**
   * Movies without action
   */
  export type MoviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
  }


  /**
   * Model MovieGenres
   */

  export type AggregateMovieGenres = {
    _count: MovieGenresCountAggregateOutputType | null
    _avg: MovieGenresAvgAggregateOutputType | null
    _sum: MovieGenresSumAggregateOutputType | null
    _min: MovieGenresMinAggregateOutputType | null
    _max: MovieGenresMaxAggregateOutputType | null
  }

  export type MovieGenresAvgAggregateOutputType = {
    id: number | null
  }

  export type MovieGenresSumAggregateOutputType = {
    id: number | null
  }

  export type MovieGenresMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MovieGenresMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MovieGenresCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MovieGenresAvgAggregateInputType = {
    id?: true
  }

  export type MovieGenresSumAggregateInputType = {
    id?: true
  }

  export type MovieGenresMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MovieGenresMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MovieGenresCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MovieGenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieGenres to aggregate.
     */
    where?: MovieGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenresOrderByWithRelationInput | MovieGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieGenres
    **/
    _count?: true | MovieGenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieGenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieGenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieGenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieGenresMaxAggregateInputType
  }

  export type GetMovieGenresAggregateType<T extends MovieGenresAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieGenres[P]>
      : GetScalarType<T[P], AggregateMovieGenres[P]>
  }




  export type MovieGenresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieGenresWhereInput
    orderBy?: MovieGenresOrderByWithAggregationInput | MovieGenresOrderByWithAggregationInput[]
    by: MovieGenresScalarFieldEnum[] | MovieGenresScalarFieldEnum
    having?: MovieGenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieGenresCountAggregateInputType | true
    _avg?: MovieGenresAvgAggregateInputType
    _sum?: MovieGenresSumAggregateInputType
    _min?: MovieGenresMinAggregateInputType
    _max?: MovieGenresMaxAggregateInputType
  }

  export type MovieGenresGroupByOutputType = {
    id: number
    name: string
    _count: MovieGenresCountAggregateOutputType | null
    _avg: MovieGenresAvgAggregateOutputType | null
    _sum: MovieGenresSumAggregateOutputType | null
    _min: MovieGenresMinAggregateOutputType | null
    _max: MovieGenresMaxAggregateOutputType | null
  }

  type GetMovieGenresGroupByPayload<T extends MovieGenresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGenresGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGenresGroupByOutputType[P]>
        }
      >
    >


  export type MovieGenresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    movies?: boolean | MovieGenres$moviesArgs<ExtArgs>
    _count?: boolean | MovieGenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieGenres"]>

  export type MovieGenresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["movieGenres"]>

  export type MovieGenresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["movieGenres"]>

  export type MovieGenresSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MovieGenresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["movieGenres"]>
  export type MovieGenresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MovieGenres$moviesArgs<ExtArgs>
    _count?: boolean | MovieGenresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieGenresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MovieGenresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MovieGenresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieGenres"
    objects: {
      movies: Prisma.$MoviesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["movieGenres"]>
    composites: {}
  }

  type MovieGenresGetPayload<S extends boolean | null | undefined | MovieGenresDefaultArgs> = $Result.GetResult<Prisma.$MovieGenresPayload, S>

  type MovieGenresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieGenresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieGenresCountAggregateInputType | true
    }

  export interface MovieGenresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieGenres'], meta: { name: 'MovieGenres' } }
    /**
     * Find zero or one MovieGenres that matches the filter.
     * @param {MovieGenresFindUniqueArgs} args - Arguments to find a MovieGenres
     * @example
     * // Get one MovieGenres
     * const movieGenres = await prisma.movieGenres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieGenresFindUniqueArgs>(args: SelectSubset<T, MovieGenresFindUniqueArgs<ExtArgs>>): Prisma__MovieGenresClient<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieGenres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieGenresFindUniqueOrThrowArgs} args - Arguments to find a MovieGenres
     * @example
     * // Get one MovieGenres
     * const movieGenres = await prisma.movieGenres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieGenresFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieGenresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieGenresClient<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenresFindFirstArgs} args - Arguments to find a MovieGenres
     * @example
     * // Get one MovieGenres
     * const movieGenres = await prisma.movieGenres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieGenresFindFirstArgs>(args?: SelectSubset<T, MovieGenresFindFirstArgs<ExtArgs>>): Prisma__MovieGenresClient<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieGenres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenresFindFirstOrThrowArgs} args - Arguments to find a MovieGenres
     * @example
     * // Get one MovieGenres
     * const movieGenres = await prisma.movieGenres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieGenresFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieGenresFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieGenresClient<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieGenres
     * const movieGenres = await prisma.movieGenres.findMany()
     * 
     * // Get first 10 MovieGenres
     * const movieGenres = await prisma.movieGenres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieGenresWithIdOnly = await prisma.movieGenres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieGenresFindManyArgs>(args?: SelectSubset<T, MovieGenresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieGenres.
     * @param {MovieGenresCreateArgs} args - Arguments to create a MovieGenres.
     * @example
     * // Create one MovieGenres
     * const MovieGenres = await prisma.movieGenres.create({
     *   data: {
     *     // ... data to create a MovieGenres
     *   }
     * })
     * 
     */
    create<T extends MovieGenresCreateArgs>(args: SelectSubset<T, MovieGenresCreateArgs<ExtArgs>>): Prisma__MovieGenresClient<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieGenres.
     * @param {MovieGenresCreateManyArgs} args - Arguments to create many MovieGenres.
     * @example
     * // Create many MovieGenres
     * const movieGenres = await prisma.movieGenres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieGenresCreateManyArgs>(args?: SelectSubset<T, MovieGenresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovieGenres and returns the data saved in the database.
     * @param {MovieGenresCreateManyAndReturnArgs} args - Arguments to create many MovieGenres.
     * @example
     * // Create many MovieGenres
     * const movieGenres = await prisma.movieGenres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovieGenres and only return the `id`
     * const movieGenresWithIdOnly = await prisma.movieGenres.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieGenresCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieGenresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovieGenres.
     * @param {MovieGenresDeleteArgs} args - Arguments to delete one MovieGenres.
     * @example
     * // Delete one MovieGenres
     * const MovieGenres = await prisma.movieGenres.delete({
     *   where: {
     *     // ... filter to delete one MovieGenres
     *   }
     * })
     * 
     */
    delete<T extends MovieGenresDeleteArgs>(args: SelectSubset<T, MovieGenresDeleteArgs<ExtArgs>>): Prisma__MovieGenresClient<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieGenres.
     * @param {MovieGenresUpdateArgs} args - Arguments to update one MovieGenres.
     * @example
     * // Update one MovieGenres
     * const movieGenres = await prisma.movieGenres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieGenresUpdateArgs>(args: SelectSubset<T, MovieGenresUpdateArgs<ExtArgs>>): Prisma__MovieGenresClient<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieGenres.
     * @param {MovieGenresDeleteManyArgs} args - Arguments to filter MovieGenres to delete.
     * @example
     * // Delete a few MovieGenres
     * const { count } = await prisma.movieGenres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieGenresDeleteManyArgs>(args?: SelectSubset<T, MovieGenresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieGenres
     * const movieGenres = await prisma.movieGenres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieGenresUpdateManyArgs>(args: SelectSubset<T, MovieGenresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieGenres and returns the data updated in the database.
     * @param {MovieGenresUpdateManyAndReturnArgs} args - Arguments to update many MovieGenres.
     * @example
     * // Update many MovieGenres
     * const movieGenres = await prisma.movieGenres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovieGenres and only return the `id`
     * const movieGenresWithIdOnly = await prisma.movieGenres.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovieGenresUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieGenresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovieGenres.
     * @param {MovieGenresUpsertArgs} args - Arguments to update or create a MovieGenres.
     * @example
     * // Update or create a MovieGenres
     * const movieGenres = await prisma.movieGenres.upsert({
     *   create: {
     *     // ... data to create a MovieGenres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieGenres we want to update
     *   }
     * })
     */
    upsert<T extends MovieGenresUpsertArgs>(args: SelectSubset<T, MovieGenresUpsertArgs<ExtArgs>>): Prisma__MovieGenresClient<$Result.GetResult<Prisma.$MovieGenresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenresCountArgs} args - Arguments to filter MovieGenres to count.
     * @example
     * // Count the number of MovieGenres
     * const count = await prisma.movieGenres.count({
     *   where: {
     *     // ... the filter for the MovieGenres we want to count
     *   }
     * })
    **/
    count<T extends MovieGenresCountArgs>(
      args?: Subset<T, MovieGenresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieGenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieGenresAggregateArgs>(args: Subset<T, MovieGenresAggregateArgs>): Prisma.PrismaPromise<GetMovieGenresAggregateType<T>>

    /**
     * Group by MovieGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenresGroupByArgs} args - Group by arguments.
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
      T extends MovieGenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGenresGroupByArgs['orderBy'] }
        : { orderBy?: MovieGenresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieGenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieGenres model
   */
  readonly fields: MovieGenresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieGenres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieGenresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends MovieGenres$moviesArgs<ExtArgs> = {}>(args?: Subset<T, MovieGenres$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MovieGenres model
   */
  interface MovieGenresFieldRefs {
    readonly id: FieldRef<"MovieGenres", 'Int'>
    readonly name: FieldRef<"MovieGenres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MovieGenres findUnique
   */
  export type MovieGenresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenresInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenres to fetch.
     */
    where: MovieGenresWhereUniqueInput
  }

  /**
   * MovieGenres findUniqueOrThrow
   */
  export type MovieGenresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenresInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenres to fetch.
     */
    where: MovieGenresWhereUniqueInput
  }

  /**
   * MovieGenres findFirst
   */
  export type MovieGenresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenresInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenres to fetch.
     */
    where?: MovieGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenresOrderByWithRelationInput | MovieGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieGenres.
     */
    cursor?: MovieGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieGenres.
     */
    distinct?: MovieGenresScalarFieldEnum | MovieGenresScalarFieldEnum[]
  }

  /**
   * MovieGenres findFirstOrThrow
   */
  export type MovieGenresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenresInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenres to fetch.
     */
    where?: MovieGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenresOrderByWithRelationInput | MovieGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieGenres.
     */
    cursor?: MovieGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieGenres.
     */
    distinct?: MovieGenresScalarFieldEnum | MovieGenresScalarFieldEnum[]
  }

  /**
   * MovieGenres findMany
   */
  export type MovieGenresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenresInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenres to fetch.
     */
    where?: MovieGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenresOrderByWithRelationInput | MovieGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieGenres.
     */
    cursor?: MovieGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    distinct?: MovieGenresScalarFieldEnum | MovieGenresScalarFieldEnum[]
  }

  /**
   * MovieGenres create
   */
  export type MovieGenresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenresInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieGenres.
     */
    data: XOR<MovieGenresCreateInput, MovieGenresUncheckedCreateInput>
  }

  /**
   * MovieGenres createMany
   */
  export type MovieGenresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieGenres.
     */
    data: MovieGenresCreateManyInput | MovieGenresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieGenres createManyAndReturn
   */
  export type MovieGenresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * The data used to create many MovieGenres.
     */
    data: MovieGenresCreateManyInput | MovieGenresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieGenres update
   */
  export type MovieGenresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenresInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieGenres.
     */
    data: XOR<MovieGenresUpdateInput, MovieGenresUncheckedUpdateInput>
    /**
     * Choose, which MovieGenres to update.
     */
    where: MovieGenresWhereUniqueInput
  }

  /**
   * MovieGenres updateMany
   */
  export type MovieGenresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieGenres.
     */
    data: XOR<MovieGenresUpdateManyMutationInput, MovieGenresUncheckedUpdateManyInput>
    /**
     * Filter which MovieGenres to update
     */
    where?: MovieGenresWhereInput
    /**
     * Limit how many MovieGenres to update.
     */
    limit?: number
  }

  /**
   * MovieGenres updateManyAndReturn
   */
  export type MovieGenresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * The data used to update MovieGenres.
     */
    data: XOR<MovieGenresUpdateManyMutationInput, MovieGenresUncheckedUpdateManyInput>
    /**
     * Filter which MovieGenres to update
     */
    where?: MovieGenresWhereInput
    /**
     * Limit how many MovieGenres to update.
     */
    limit?: number
  }

  /**
   * MovieGenres upsert
   */
  export type MovieGenresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenresInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieGenres to update in case it exists.
     */
    where: MovieGenresWhereUniqueInput
    /**
     * In case the MovieGenres found by the `where` argument doesn't exist, create a new MovieGenres with this data.
     */
    create: XOR<MovieGenresCreateInput, MovieGenresUncheckedCreateInput>
    /**
     * In case the MovieGenres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieGenresUpdateInput, MovieGenresUncheckedUpdateInput>
  }

  /**
   * MovieGenres delete
   */
  export type MovieGenresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenresInclude<ExtArgs> | null
    /**
     * Filter which MovieGenres to delete.
     */
    where: MovieGenresWhereUniqueInput
  }

  /**
   * MovieGenres deleteMany
   */
  export type MovieGenresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieGenres to delete
     */
    where?: MovieGenresWhereInput
    /**
     * Limit how many MovieGenres to delete.
     */
    limit?: number
  }

  /**
   * MovieGenres.movies
   */
  export type MovieGenres$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    cursor?: MoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * MovieGenres without action
   */
  export type MovieGenresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenres
     */
    select?: MovieGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenres
     */
    omit?: MovieGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenresInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MoviesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    original_title: 'original_title',
    subtitle: 'subtitle',
    synopsis: 'synopsis',
    popularity: 'popularity',
    vote_average: 'vote_average',
    vote_count: 'vote_count',
    release_date: 'release_date',
    duration: 'duration',
    situation: 'situation',
    language: 'language',
    budget: 'budget',
    revenue: 'revenue',
    profit: 'profit',
    poster: 'poster',
    backdrop: 'backdrop',
    trailer: 'trailer'
  };

  export type MoviesScalarFieldEnum = (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum]


  export const MovieGenresScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MovieGenresScalarFieldEnum = (typeof MovieGenresScalarFieldEnum)[keyof typeof MovieGenresScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type MoviesWhereInput = {
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    id?: IntFilter<"Movies"> | number
    title?: StringFilter<"Movies"> | string
    original_title?: StringFilter<"Movies"> | string
    subtitle?: StringNullableFilter<"Movies"> | string | null
    synopsis?: StringNullableFilter<"Movies"> | string | null
    popularity?: FloatNullableFilter<"Movies"> | number | null
    vote_average?: FloatNullableFilter<"Movies"> | number | null
    vote_count?: IntNullableFilter<"Movies"> | number | null
    release_date?: DateTimeNullableFilter<"Movies"> | Date | string | null
    duration?: IntNullableFilter<"Movies"> | number | null
    situation?: StringNullableFilter<"Movies"> | string | null
    language?: StringNullableFilter<"Movies"> | string | null
    budget?: FloatNullableFilter<"Movies"> | number | null
    revenue?: FloatNullableFilter<"Movies"> | number | null
    profit?: FloatNullableFilter<"Movies"> | number | null
    poster?: StringNullableFilter<"Movies"> | string | null
    backdrop?: StringNullableFilter<"Movies"> | string | null
    trailer?: StringNullableFilter<"Movies"> | string | null
    genre?: MovieGenresListRelationFilter
  }

  export type MoviesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    original_title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    synopsis?: SortOrderInput | SortOrder
    popularity?: SortOrderInput | SortOrder
    vote_average?: SortOrderInput | SortOrder
    vote_count?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    situation?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    revenue?: SortOrderInput | SortOrder
    profit?: SortOrderInput | SortOrder
    poster?: SortOrderInput | SortOrder
    backdrop?: SortOrderInput | SortOrder
    trailer?: SortOrderInput | SortOrder
    genre?: MovieGenresOrderByRelationAggregateInput
  }

  export type MoviesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    title?: StringFilter<"Movies"> | string
    original_title?: StringFilter<"Movies"> | string
    subtitle?: StringNullableFilter<"Movies"> | string | null
    synopsis?: StringNullableFilter<"Movies"> | string | null
    popularity?: FloatNullableFilter<"Movies"> | number | null
    vote_average?: FloatNullableFilter<"Movies"> | number | null
    vote_count?: IntNullableFilter<"Movies"> | number | null
    release_date?: DateTimeNullableFilter<"Movies"> | Date | string | null
    duration?: IntNullableFilter<"Movies"> | number | null
    situation?: StringNullableFilter<"Movies"> | string | null
    language?: StringNullableFilter<"Movies"> | string | null
    budget?: FloatNullableFilter<"Movies"> | number | null
    revenue?: FloatNullableFilter<"Movies"> | number | null
    profit?: FloatNullableFilter<"Movies"> | number | null
    poster?: StringNullableFilter<"Movies"> | string | null
    backdrop?: StringNullableFilter<"Movies"> | string | null
    trailer?: StringNullableFilter<"Movies"> | string | null
    genre?: MovieGenresListRelationFilter
  }, "id">

  export type MoviesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    original_title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    synopsis?: SortOrderInput | SortOrder
    popularity?: SortOrderInput | SortOrder
    vote_average?: SortOrderInput | SortOrder
    vote_count?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    situation?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    revenue?: SortOrderInput | SortOrder
    profit?: SortOrderInput | SortOrder
    poster?: SortOrderInput | SortOrder
    backdrop?: SortOrderInput | SortOrder
    trailer?: SortOrderInput | SortOrder
    _count?: MoviesCountOrderByAggregateInput
    _avg?: MoviesAvgOrderByAggregateInput
    _max?: MoviesMaxOrderByAggregateInput
    _min?: MoviesMinOrderByAggregateInput
    _sum?: MoviesSumOrderByAggregateInput
  }

  export type MoviesScalarWhereWithAggregatesInput = {
    AND?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    OR?: MoviesScalarWhereWithAggregatesInput[]
    NOT?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movies"> | number
    title?: StringWithAggregatesFilter<"Movies"> | string
    original_title?: StringWithAggregatesFilter<"Movies"> | string
    subtitle?: StringNullableWithAggregatesFilter<"Movies"> | string | null
    synopsis?: StringNullableWithAggregatesFilter<"Movies"> | string | null
    popularity?: FloatNullableWithAggregatesFilter<"Movies"> | number | null
    vote_average?: FloatNullableWithAggregatesFilter<"Movies"> | number | null
    vote_count?: IntNullableWithAggregatesFilter<"Movies"> | number | null
    release_date?: DateTimeNullableWithAggregatesFilter<"Movies"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"Movies"> | number | null
    situation?: StringNullableWithAggregatesFilter<"Movies"> | string | null
    language?: StringNullableWithAggregatesFilter<"Movies"> | string | null
    budget?: FloatNullableWithAggregatesFilter<"Movies"> | number | null
    revenue?: FloatNullableWithAggregatesFilter<"Movies"> | number | null
    profit?: FloatNullableWithAggregatesFilter<"Movies"> | number | null
    poster?: StringNullableWithAggregatesFilter<"Movies"> | string | null
    backdrop?: StringNullableWithAggregatesFilter<"Movies"> | string | null
    trailer?: StringNullableWithAggregatesFilter<"Movies"> | string | null
  }

  export type MovieGenresWhereInput = {
    AND?: MovieGenresWhereInput | MovieGenresWhereInput[]
    OR?: MovieGenresWhereInput[]
    NOT?: MovieGenresWhereInput | MovieGenresWhereInput[]
    id?: IntFilter<"MovieGenres"> | number
    name?: StringFilter<"MovieGenres"> | string
    movies?: MoviesListRelationFilter
  }

  export type MovieGenresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    movies?: MoviesOrderByRelationAggregateInput
  }

  export type MovieGenresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovieGenresWhereInput | MovieGenresWhereInput[]
    OR?: MovieGenresWhereInput[]
    NOT?: MovieGenresWhereInput | MovieGenresWhereInput[]
    name?: StringFilter<"MovieGenres"> | string
    movies?: MoviesListRelationFilter
  }, "id">

  export type MovieGenresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MovieGenresCountOrderByAggregateInput
    _avg?: MovieGenresAvgOrderByAggregateInput
    _max?: MovieGenresMaxOrderByAggregateInput
    _min?: MovieGenresMinOrderByAggregateInput
    _sum?: MovieGenresSumOrderByAggregateInput
  }

  export type MovieGenresScalarWhereWithAggregatesInput = {
    AND?: MovieGenresScalarWhereWithAggregatesInput | MovieGenresScalarWhereWithAggregatesInput[]
    OR?: MovieGenresScalarWhereWithAggregatesInput[]
    NOT?: MovieGenresScalarWhereWithAggregatesInput | MovieGenresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MovieGenres"> | number
    name?: StringWithAggregatesFilter<"MovieGenres"> | string
  }

  export type UserCreateInput = {
    name?: string | null
    email?: string | null
    password?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MoviesCreateInput = {
    title: string
    original_title: string
    subtitle?: string | null
    synopsis?: string | null
    popularity?: number | null
    vote_average?: number | null
    vote_count?: number | null
    release_date?: Date | string | null
    duration?: number | null
    situation?: string | null
    language?: string | null
    budget?: number | null
    revenue?: number | null
    profit?: number | null
    poster?: string | null
    backdrop?: string | null
    trailer?: string | null
    genre?: MovieGenresCreateNestedManyWithoutMoviesInput
  }

  export type MoviesUncheckedCreateInput = {
    id?: number
    title: string
    original_title: string
    subtitle?: string | null
    synopsis?: string | null
    popularity?: number | null
    vote_average?: number | null
    vote_count?: number | null
    release_date?: Date | string | null
    duration?: number | null
    situation?: string | null
    language?: string | null
    budget?: number | null
    revenue?: number | null
    profit?: number | null
    poster?: string | null
    backdrop?: string | null
    trailer?: string | null
    genre?: MovieGenresUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MoviesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    popularity?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_average?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: MovieGenresUpdateManyWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    popularity?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_average?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: MovieGenresUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MoviesCreateManyInput = {
    id?: number
    title: string
    original_title: string
    subtitle?: string | null
    synopsis?: string | null
    popularity?: number | null
    vote_average?: number | null
    vote_count?: number | null
    release_date?: Date | string | null
    duration?: number | null
    situation?: string | null
    language?: string | null
    budget?: number | null
    revenue?: number | null
    profit?: number | null
    poster?: string | null
    backdrop?: string | null
    trailer?: string | null
  }

  export type MoviesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    popularity?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_average?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MoviesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    popularity?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_average?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieGenresCreateInput = {
    name: string
    movies?: MoviesCreateNestedManyWithoutGenreInput
  }

  export type MovieGenresUncheckedCreateInput = {
    id?: number
    name: string
    movies?: MoviesUncheckedCreateNestedManyWithoutGenreInput
  }

  export type MovieGenresUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUpdateManyWithoutGenreNestedInput
  }

  export type MovieGenresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type MovieGenresCreateManyInput = {
    id?: number
    name: string
  }

  export type MovieGenresUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MovieGenresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MovieGenresListRelationFilter = {
    every?: MovieGenresWhereInput
    some?: MovieGenresWhereInput
    none?: MovieGenresWhereInput
  }

  export type MovieGenresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoviesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    original_title?: SortOrder
    subtitle?: SortOrder
    synopsis?: SortOrder
    popularity?: SortOrder
    vote_average?: SortOrder
    vote_count?: SortOrder
    release_date?: SortOrder
    duration?: SortOrder
    situation?: SortOrder
    language?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
    poster?: SortOrder
    backdrop?: SortOrder
    trailer?: SortOrder
  }

  export type MoviesAvgOrderByAggregateInput = {
    id?: SortOrder
    popularity?: SortOrder
    vote_average?: SortOrder
    vote_count?: SortOrder
    duration?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
  }

  export type MoviesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    original_title?: SortOrder
    subtitle?: SortOrder
    synopsis?: SortOrder
    popularity?: SortOrder
    vote_average?: SortOrder
    vote_count?: SortOrder
    release_date?: SortOrder
    duration?: SortOrder
    situation?: SortOrder
    language?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
    poster?: SortOrder
    backdrop?: SortOrder
    trailer?: SortOrder
  }

  export type MoviesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    original_title?: SortOrder
    subtitle?: SortOrder
    synopsis?: SortOrder
    popularity?: SortOrder
    vote_average?: SortOrder
    vote_count?: SortOrder
    release_date?: SortOrder
    duration?: SortOrder
    situation?: SortOrder
    language?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
    poster?: SortOrder
    backdrop?: SortOrder
    trailer?: SortOrder
  }

  export type MoviesSumOrderByAggregateInput = {
    id?: SortOrder
    popularity?: SortOrder
    vote_average?: SortOrder
    vote_count?: SortOrder
    duration?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MoviesListRelationFilter = {
    every?: MoviesWhereInput
    some?: MoviesWhereInput
    none?: MoviesWhereInput
  }

  export type MoviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieGenresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MovieGenresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MovieGenresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MovieGenresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MovieGenresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovieGenresCreateNestedManyWithoutMoviesInput = {
    create?: XOR<MovieGenresCreateWithoutMoviesInput, MovieGenresUncheckedCreateWithoutMoviesInput> | MovieGenresCreateWithoutMoviesInput[] | MovieGenresUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieGenresCreateOrConnectWithoutMoviesInput | MovieGenresCreateOrConnectWithoutMoviesInput[]
    connect?: MovieGenresWhereUniqueInput | MovieGenresWhereUniqueInput[]
  }

  export type MovieGenresUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<MovieGenresCreateWithoutMoviesInput, MovieGenresUncheckedCreateWithoutMoviesInput> | MovieGenresCreateWithoutMoviesInput[] | MovieGenresUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieGenresCreateOrConnectWithoutMoviesInput | MovieGenresCreateOrConnectWithoutMoviesInput[]
    connect?: MovieGenresWhereUniqueInput | MovieGenresWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MovieGenresUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<MovieGenresCreateWithoutMoviesInput, MovieGenresUncheckedCreateWithoutMoviesInput> | MovieGenresCreateWithoutMoviesInput[] | MovieGenresUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieGenresCreateOrConnectWithoutMoviesInput | MovieGenresCreateOrConnectWithoutMoviesInput[]
    upsert?: MovieGenresUpsertWithWhereUniqueWithoutMoviesInput | MovieGenresUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: MovieGenresWhereUniqueInput | MovieGenresWhereUniqueInput[]
    disconnect?: MovieGenresWhereUniqueInput | MovieGenresWhereUniqueInput[]
    delete?: MovieGenresWhereUniqueInput | MovieGenresWhereUniqueInput[]
    connect?: MovieGenresWhereUniqueInput | MovieGenresWhereUniqueInput[]
    update?: MovieGenresUpdateWithWhereUniqueWithoutMoviesInput | MovieGenresUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: MovieGenresUpdateManyWithWhereWithoutMoviesInput | MovieGenresUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: MovieGenresScalarWhereInput | MovieGenresScalarWhereInput[]
  }

  export type MovieGenresUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<MovieGenresCreateWithoutMoviesInput, MovieGenresUncheckedCreateWithoutMoviesInput> | MovieGenresCreateWithoutMoviesInput[] | MovieGenresUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieGenresCreateOrConnectWithoutMoviesInput | MovieGenresCreateOrConnectWithoutMoviesInput[]
    upsert?: MovieGenresUpsertWithWhereUniqueWithoutMoviesInput | MovieGenresUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: MovieGenresWhereUniqueInput | MovieGenresWhereUniqueInput[]
    disconnect?: MovieGenresWhereUniqueInput | MovieGenresWhereUniqueInput[]
    delete?: MovieGenresWhereUniqueInput | MovieGenresWhereUniqueInput[]
    connect?: MovieGenresWhereUniqueInput | MovieGenresWhereUniqueInput[]
    update?: MovieGenresUpdateWithWhereUniqueWithoutMoviesInput | MovieGenresUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: MovieGenresUpdateManyWithWhereWithoutMoviesInput | MovieGenresUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: MovieGenresScalarWhereInput | MovieGenresScalarWhereInput[]
  }

  export type MoviesCreateNestedManyWithoutGenreInput = {
    create?: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput> | MoviesCreateWithoutGenreInput[] | MoviesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutGenreInput | MoviesCreateOrConnectWithoutGenreInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type MoviesUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput> | MoviesCreateWithoutGenreInput[] | MoviesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutGenreInput | MoviesCreateOrConnectWithoutGenreInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type MoviesUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput> | MoviesCreateWithoutGenreInput[] | MoviesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutGenreInput | MoviesCreateOrConnectWithoutGenreInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutGenreInput | MoviesUpsertWithWhereUniqueWithoutGenreInput[]
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutGenreInput | MoviesUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutGenreInput | MoviesUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type MoviesUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput> | MoviesCreateWithoutGenreInput[] | MoviesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutGenreInput | MoviesCreateOrConnectWithoutGenreInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutGenreInput | MoviesUpsertWithWhereUniqueWithoutGenreInput[]
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutGenreInput | MoviesUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutGenreInput | MoviesUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MovieGenresCreateWithoutMoviesInput = {
    name: string
  }

  export type MovieGenresUncheckedCreateWithoutMoviesInput = {
    id?: number
    name: string
  }

  export type MovieGenresCreateOrConnectWithoutMoviesInput = {
    where: MovieGenresWhereUniqueInput
    create: XOR<MovieGenresCreateWithoutMoviesInput, MovieGenresUncheckedCreateWithoutMoviesInput>
  }

  export type MovieGenresUpsertWithWhereUniqueWithoutMoviesInput = {
    where: MovieGenresWhereUniqueInput
    update: XOR<MovieGenresUpdateWithoutMoviesInput, MovieGenresUncheckedUpdateWithoutMoviesInput>
    create: XOR<MovieGenresCreateWithoutMoviesInput, MovieGenresUncheckedCreateWithoutMoviesInput>
  }

  export type MovieGenresUpdateWithWhereUniqueWithoutMoviesInput = {
    where: MovieGenresWhereUniqueInput
    data: XOR<MovieGenresUpdateWithoutMoviesInput, MovieGenresUncheckedUpdateWithoutMoviesInput>
  }

  export type MovieGenresUpdateManyWithWhereWithoutMoviesInput = {
    where: MovieGenresScalarWhereInput
    data: XOR<MovieGenresUpdateManyMutationInput, MovieGenresUncheckedUpdateManyWithoutMoviesInput>
  }

  export type MovieGenresScalarWhereInput = {
    AND?: MovieGenresScalarWhereInput | MovieGenresScalarWhereInput[]
    OR?: MovieGenresScalarWhereInput[]
    NOT?: MovieGenresScalarWhereInput | MovieGenresScalarWhereInput[]
    id?: IntFilter<"MovieGenres"> | number
    name?: StringFilter<"MovieGenres"> | string
  }

  export type MoviesCreateWithoutGenreInput = {
    title: string
    original_title: string
    subtitle?: string | null
    synopsis?: string | null
    popularity?: number | null
    vote_average?: number | null
    vote_count?: number | null
    release_date?: Date | string | null
    duration?: number | null
    situation?: string | null
    language?: string | null
    budget?: number | null
    revenue?: number | null
    profit?: number | null
    poster?: string | null
    backdrop?: string | null
    trailer?: string | null
  }

  export type MoviesUncheckedCreateWithoutGenreInput = {
    id?: number
    title: string
    original_title: string
    subtitle?: string | null
    synopsis?: string | null
    popularity?: number | null
    vote_average?: number | null
    vote_count?: number | null
    release_date?: Date | string | null
    duration?: number | null
    situation?: string | null
    language?: string | null
    budget?: number | null
    revenue?: number | null
    profit?: number | null
    poster?: string | null
    backdrop?: string | null
    trailer?: string | null
  }

  export type MoviesCreateOrConnectWithoutGenreInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput>
  }

  export type MoviesUpsertWithWhereUniqueWithoutGenreInput = {
    where: MoviesWhereUniqueInput
    update: XOR<MoviesUpdateWithoutGenreInput, MoviesUncheckedUpdateWithoutGenreInput>
    create: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput>
  }

  export type MoviesUpdateWithWhereUniqueWithoutGenreInput = {
    where: MoviesWhereUniqueInput
    data: XOR<MoviesUpdateWithoutGenreInput, MoviesUncheckedUpdateWithoutGenreInput>
  }

  export type MoviesUpdateManyWithWhereWithoutGenreInput = {
    where: MoviesScalarWhereInput
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyWithoutGenreInput>
  }

  export type MoviesScalarWhereInput = {
    AND?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
    OR?: MoviesScalarWhereInput[]
    NOT?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
    id?: IntFilter<"Movies"> | number
    title?: StringFilter<"Movies"> | string
    original_title?: StringFilter<"Movies"> | string
    subtitle?: StringNullableFilter<"Movies"> | string | null
    synopsis?: StringNullableFilter<"Movies"> | string | null
    popularity?: FloatNullableFilter<"Movies"> | number | null
    vote_average?: FloatNullableFilter<"Movies"> | number | null
    vote_count?: IntNullableFilter<"Movies"> | number | null
    release_date?: DateTimeNullableFilter<"Movies"> | Date | string | null
    duration?: IntNullableFilter<"Movies"> | number | null
    situation?: StringNullableFilter<"Movies"> | string | null
    language?: StringNullableFilter<"Movies"> | string | null
    budget?: FloatNullableFilter<"Movies"> | number | null
    revenue?: FloatNullableFilter<"Movies"> | number | null
    profit?: FloatNullableFilter<"Movies"> | number | null
    poster?: StringNullableFilter<"Movies"> | string | null
    backdrop?: StringNullableFilter<"Movies"> | string | null
    trailer?: StringNullableFilter<"Movies"> | string | null
  }

  export type MovieGenresUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MovieGenresUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MovieGenresUncheckedUpdateManyWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesUpdateWithoutGenreInput = {
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    popularity?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_average?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MoviesUncheckedUpdateWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    popularity?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_average?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MoviesUncheckedUpdateManyWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    popularity?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_average?: NullableFloatFieldUpdateOperationsInput | number | null
    vote_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    situation?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
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