
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
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model WorkflowRun
 * 
 */
export type WorkflowRun = $Result.DefaultSelection<Prisma.$WorkflowRunPayload>
/**
 * Model RechargeOrder
 * 
 */
export type RechargeOrder = $Result.DefaultSelection<Prisma.$RechargeOrderPayload>
/**
 * Model CreditLedger
 * 
 */
export type CreditLedger = $Result.DefaultSelection<Prisma.$CreditLedgerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const WorkflowStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus]


export const RunStatus: {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
  CANCELED: 'CANCELED'
};

export type RunStatus = (typeof RunStatus)[keyof typeof RunStatus]


export const LedgerType: {
  RECHARGE: 'RECHARGE',
  CONSUME: 'CONSUME',
  REFUND: 'REFUND',
  ADJUST: 'ADJUST'
};

export type LedgerType = (typeof LedgerType)[keyof typeof LedgerType]


export const OrderStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type WorkflowStatus = $Enums.WorkflowStatus

export const WorkflowStatus: typeof $Enums.WorkflowStatus

export type RunStatus = $Enums.RunStatus

export const RunStatus: typeof $Enums.RunStatus

export type LedgerType = $Enums.LedgerType

export const LedgerType: typeof $Enums.LedgerType

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowRun`: Exposes CRUD operations for the **WorkflowRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowRuns
    * const workflowRuns = await prisma.workflowRun.findMany()
    * ```
    */
  get workflowRun(): Prisma.WorkflowRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rechargeOrder`: Exposes CRUD operations for the **RechargeOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RechargeOrders
    * const rechargeOrders = await prisma.rechargeOrder.findMany()
    * ```
    */
  get rechargeOrder(): Prisma.RechargeOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditLedger`: Exposes CRUD operations for the **CreditLedger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditLedgers
    * const creditLedgers = await prisma.creditLedger.findMany()
    * ```
    */
  get creditLedger(): Prisma.CreditLedgerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
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
    Workflow: 'Workflow',
    WorkflowRun: 'WorkflowRun',
    RechargeOrder: 'RechargeOrder',
    CreditLedger: 'CreditLedger'
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
      modelProps: "user" | "workflow" | "workflowRun" | "rechargeOrder" | "creditLedger"
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
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      WorkflowRun: {
        payload: Prisma.$WorkflowRunPayload<ExtArgs>
        fields: Prisma.WorkflowRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          findFirst: {
            args: Prisma.WorkflowRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          findMany: {
            args: Prisma.WorkflowRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>[]
          }
          create: {
            args: Prisma.WorkflowRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          createMany: {
            args: Prisma.WorkflowRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkflowRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          update: {
            args: Prisma.WorkflowRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          aggregate: {
            args: Prisma.WorkflowRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowRun>
          }
          groupBy: {
            args: Prisma.WorkflowRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowRunCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowRunCountAggregateOutputType> | number
          }
        }
      }
      RechargeOrder: {
        payload: Prisma.$RechargeOrderPayload<ExtArgs>
        fields: Prisma.RechargeOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RechargeOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RechargeOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeOrderPayload>
          }
          findFirst: {
            args: Prisma.RechargeOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RechargeOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeOrderPayload>
          }
          findMany: {
            args: Prisma.RechargeOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeOrderPayload>[]
          }
          create: {
            args: Prisma.RechargeOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeOrderPayload>
          }
          createMany: {
            args: Prisma.RechargeOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RechargeOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeOrderPayload>
          }
          update: {
            args: Prisma.RechargeOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeOrderPayload>
          }
          deleteMany: {
            args: Prisma.RechargeOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RechargeOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RechargeOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeOrderPayload>
          }
          aggregate: {
            args: Prisma.RechargeOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRechargeOrder>
          }
          groupBy: {
            args: Prisma.RechargeOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<RechargeOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.RechargeOrderCountArgs<ExtArgs>
            result: $Utils.Optional<RechargeOrderCountAggregateOutputType> | number
          }
        }
      }
      CreditLedger: {
        payload: Prisma.$CreditLedgerPayload<ExtArgs>
        fields: Prisma.CreditLedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditLedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditLedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLedgerPayload>
          }
          findFirst: {
            args: Prisma.CreditLedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditLedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLedgerPayload>
          }
          findMany: {
            args: Prisma.CreditLedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLedgerPayload>[]
          }
          create: {
            args: Prisma.CreditLedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLedgerPayload>
          }
          createMany: {
            args: Prisma.CreditLedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CreditLedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLedgerPayload>
          }
          update: {
            args: Prisma.CreditLedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLedgerPayload>
          }
          deleteMany: {
            args: Prisma.CreditLedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditLedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditLedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditLedgerPayload>
          }
          aggregate: {
            args: Prisma.CreditLedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditLedger>
          }
          groupBy: {
            args: Prisma.CreditLedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditLedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditLedgerCountArgs<ExtArgs>
            result: $Utils.Optional<CreditLedgerCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    workflow?: WorkflowOmit
    workflowRun?: WorkflowRunOmit
    rechargeOrder?: RechargeOrderOmit
    creditLedger?: CreditLedgerOmit
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
    runs: number
    ledgers: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runs?: boolean | UserCountOutputTypeCountRunsArgs
    ledgers?: boolean | UserCountOutputTypeCountLedgersArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
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
  export type UserCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowRunWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLedgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditLedgerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RechargeOrderWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    runs: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runs?: boolean | WorkflowCountOutputTypeCountRunsArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowRunWhereInput
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
    credits: number | null
  }

  export type UserSumAggregateOutputType = {
    credits: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    nickname: string | null
    imageUrl: string | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRole | null
    credits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    nickname: string | null
    imageUrl: string | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRole | null
    credits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    nickname: number
    imageUrl: number
    status: number
    role: number
    credits: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    credits?: true
  }

  export type UserSumAggregateInputType = {
    credits?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    nickname?: true
    imageUrl?: true
    status?: true
    role?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    nickname?: true
    imageUrl?: true
    status?: true
    role?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    nickname?: true
    imageUrl?: true
    status?: true
    role?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    clerkId: string | null
    email: string | null
    nickname: string | null
    imageUrl: string | null
    status: $Enums.UserStatus
    role: $Enums.UserRole
    credits: number
    createdAt: Date
    updatedAt: Date
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
    clerkId?: boolean
    email?: boolean
    nickname?: boolean
    imageUrl?: boolean
    status?: boolean
    role?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    runs?: boolean | User$runsArgs<ExtArgs>
    ledgers?: boolean | User$ledgersArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    nickname?: boolean
    imageUrl?: boolean
    status?: boolean
    role?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "nickname" | "imageUrl" | "status" | "role" | "credits" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runs?: boolean | User$runsArgs<ExtArgs>
    ledgers?: boolean | User$ledgersArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      runs: Prisma.$WorkflowRunPayload<ExtArgs>[]
      ledgers: Prisma.$CreditLedgerPayload<ExtArgs>[]
      orders: Prisma.$RechargeOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string | null
      email: string | null
      nickname: string | null
      imageUrl: string | null
      status: $Enums.UserStatus
      role: $Enums.UserRole
      credits: number
      createdAt: Date
      updatedAt: Date
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
    runs<T extends User$runsArgs<ExtArgs> = {}>(args?: Subset<T, User$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ledgers<T extends User$ledgersArgs<ExtArgs> = {}>(args?: Subset<T, User$ledgersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargeOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly credits: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.runs
   */
  export type User$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    where?: WorkflowRunWhereInput
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    cursor?: WorkflowRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowRunScalarFieldEnum | WorkflowRunScalarFieldEnum[]
  }

  /**
   * User.ledgers
   */
  export type User$ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLedger
     */
    select?: CreditLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLedger
     */
    omit?: CreditLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLedgerInclude<ExtArgs> | null
    where?: CreditLedgerWhereInput
    orderBy?: CreditLedgerOrderByWithRelationInput | CreditLedgerOrderByWithRelationInput[]
    cursor?: CreditLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditLedgerScalarFieldEnum | CreditLedgerScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeOrder
     */
    select?: RechargeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeOrder
     */
    omit?: RechargeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeOrderInclude<ExtArgs> | null
    where?: RechargeOrderWhereInput
    orderBy?: RechargeOrderOrderByWithRelationInput | RechargeOrderOrderByWithRelationInput[]
    cursor?: RechargeOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RechargeOrderScalarFieldEnum | RechargeOrderScalarFieldEnum[]
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
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowAvgAggregateOutputType = {
    id: number | null
    creditCost: number | null
    sortOrder: number | null
  }

  export type WorkflowSumAggregateOutputType = {
    id: number | null
    creditCost: number | null
    sortOrder: number | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    coverUrl: string | null
    creditCost: number | null
    sortOrder: number | null
    status: $Enums.WorkflowStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    coverUrl: string | null
    creditCost: number | null
    sortOrder: number | null
    status: $Enums.WorkflowStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    name: number
    description: number
    coverUrl: number
    creditCost: number
    sortOrder: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowAvgAggregateInputType = {
    id?: true
    creditCost?: true
    sortOrder?: true
  }

  export type WorkflowSumAggregateInputType = {
    id?: true
    creditCost?: true
    sortOrder?: true
  }

  export type WorkflowMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coverUrl?: true
    creditCost?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coverUrl?: true
    creditCost?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coverUrl?: true
    creditCost?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _avg?: WorkflowAvgAggregateInputType
    _sum?: WorkflowSumAggregateInputType
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: number
    name: string
    description: string | null
    coverUrl: string | null
    creditCost: number
    sortOrder: number
    status: $Enums.WorkflowStatus
    createdAt: Date
    updatedAt: Date
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coverUrl?: boolean
    creditCost?: boolean
    sortOrder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    runs?: boolean | Workflow$runsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>



  export type WorkflowSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    coverUrl?: boolean
    creditCost?: boolean
    sortOrder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "coverUrl" | "creditCost" | "sortOrder" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runs?: boolean | Workflow$runsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      runs: Prisma.$WorkflowRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      coverUrl: string | null
      creditCost: number
      sortOrder: number
      status: $Enums.WorkflowStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
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
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    runs<T extends Workflow$runsArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'Int'>
    readonly name: FieldRef<"Workflow", 'String'>
    readonly description: FieldRef<"Workflow", 'String'>
    readonly coverUrl: FieldRef<"Workflow", 'String'>
    readonly creditCost: FieldRef<"Workflow", 'Int'>
    readonly sortOrder: FieldRef<"Workflow", 'Int'>
    readonly status: FieldRef<"Workflow", 'WorkflowStatus'>
    readonly createdAt: FieldRef<"Workflow", 'DateTime'>
    readonly updatedAt: FieldRef<"Workflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflow.runs
   */
  export type Workflow$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    where?: WorkflowRunWhereInput
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    cursor?: WorkflowRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowRunScalarFieldEnum | WorkflowRunScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowRun
   */

  export type AggregateWorkflowRun = {
    _count: WorkflowRunCountAggregateOutputType | null
    _avg: WorkflowRunAvgAggregateOutputType | null
    _sum: WorkflowRunSumAggregateOutputType | null
    _min: WorkflowRunMinAggregateOutputType | null
    _max: WorkflowRunMaxAggregateOutputType | null
  }

  export type WorkflowRunAvgAggregateOutputType = {
    id: number | null
    workflowId: number | null
    progress: number | null
    costCredits: number | null
  }

  export type WorkflowRunSumAggregateOutputType = {
    id: number | null
    workflowId: number | null
    progress: number | null
    costCredits: number | null
  }

  export type WorkflowRunMinAggregateOutputType = {
    id: number | null
    userId: string | null
    workflowId: number | null
    status: $Enums.RunStatus | null
    progress: number | null
    progressMessage: string | null
    errorMessage: string | null
    costCredits: number | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowRunMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    workflowId: number | null
    status: $Enums.RunStatus | null
    progress: number | null
    progressMessage: string | null
    errorMessage: string | null
    costCredits: number | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowRunCountAggregateOutputType = {
    id: number
    userId: number
    workflowId: number
    params: number
    result: number
    status: number
    progress: number
    progressMessage: number
    errorMessage: number
    costCredits: number
    startedAt: number
    finishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowRunAvgAggregateInputType = {
    id?: true
    workflowId?: true
    progress?: true
    costCredits?: true
  }

  export type WorkflowRunSumAggregateInputType = {
    id?: true
    workflowId?: true
    progress?: true
    costCredits?: true
  }

  export type WorkflowRunMinAggregateInputType = {
    id?: true
    userId?: true
    workflowId?: true
    status?: true
    progress?: true
    progressMessage?: true
    errorMessage?: true
    costCredits?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowRunMaxAggregateInputType = {
    id?: true
    userId?: true
    workflowId?: true
    status?: true
    progress?: true
    progressMessage?: true
    errorMessage?: true
    costCredits?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowRunCountAggregateInputType = {
    id?: true
    userId?: true
    workflowId?: true
    params?: true
    result?: true
    status?: true
    progress?: true
    progressMessage?: true
    errorMessage?: true
    costCredits?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowRun to aggregate.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowRuns
    **/
    _count?: true | WorkflowRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowRunMaxAggregateInputType
  }

  export type GetWorkflowRunAggregateType<T extends WorkflowRunAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowRun[P]>
      : GetScalarType<T[P], AggregateWorkflowRun[P]>
  }




  export type WorkflowRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowRunWhereInput
    orderBy?: WorkflowRunOrderByWithAggregationInput | WorkflowRunOrderByWithAggregationInput[]
    by: WorkflowRunScalarFieldEnum[] | WorkflowRunScalarFieldEnum
    having?: WorkflowRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowRunCountAggregateInputType | true
    _avg?: WorkflowRunAvgAggregateInputType
    _sum?: WorkflowRunSumAggregateInputType
    _min?: WorkflowRunMinAggregateInputType
    _max?: WorkflowRunMaxAggregateInputType
  }

  export type WorkflowRunGroupByOutputType = {
    id: number
    userId: string
    workflowId: number
    params: JsonValue | null
    result: JsonValue | null
    status: $Enums.RunStatus
    progress: number
    progressMessage: string | null
    errorMessage: string | null
    costCredits: number
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WorkflowRunCountAggregateOutputType | null
    _avg: WorkflowRunAvgAggregateOutputType | null
    _sum: WorkflowRunSumAggregateOutputType | null
    _min: WorkflowRunMinAggregateOutputType | null
    _max: WorkflowRunMaxAggregateOutputType | null
  }

  type GetWorkflowRunGroupByPayload<T extends WorkflowRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowRunGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowRunGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workflowId?: boolean
    params?: boolean
    result?: boolean
    status?: boolean
    progress?: boolean
    progressMessage?: boolean
    errorMessage?: boolean
    costCredits?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowRun"]>



  export type WorkflowRunSelectScalar = {
    id?: boolean
    userId?: boolean
    workflowId?: boolean
    params?: boolean
    result?: boolean
    status?: boolean
    progress?: boolean
    progressMessage?: boolean
    errorMessage?: boolean
    costCredits?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workflowId" | "params" | "result" | "status" | "progress" | "progressMessage" | "errorMessage" | "costCredits" | "startedAt" | "finishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["workflowRun"]>
  export type WorkflowRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $WorkflowRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowRun"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      workflowId: number
      params: Prisma.JsonValue | null
      result: Prisma.JsonValue | null
      status: $Enums.RunStatus
      progress: number
      progressMessage: string | null
      errorMessage: string | null
      costCredits: number
      startedAt: Date | null
      finishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflowRun"]>
    composites: {}
  }

  type WorkflowRunGetPayload<S extends boolean | null | undefined | WorkflowRunDefaultArgs> = $Result.GetResult<Prisma.$WorkflowRunPayload, S>

  type WorkflowRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowRunCountAggregateInputType | true
    }

  export interface WorkflowRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowRun'], meta: { name: 'WorkflowRun' } }
    /**
     * Find zero or one WorkflowRun that matches the filter.
     * @param {WorkflowRunFindUniqueArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowRunFindUniqueArgs>(args: SelectSubset<T, WorkflowRunFindUniqueArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowRunFindUniqueOrThrowArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowRunFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunFindFirstArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowRunFindFirstArgs>(args?: SelectSubset<T, WorkflowRunFindFirstArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunFindFirstOrThrowArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowRunFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowRuns
     * const workflowRuns = await prisma.workflowRun.findMany()
     * 
     * // Get first 10 WorkflowRuns
     * const workflowRuns = await prisma.workflowRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowRunWithIdOnly = await prisma.workflowRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowRunFindManyArgs>(args?: SelectSubset<T, WorkflowRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowRun.
     * @param {WorkflowRunCreateArgs} args - Arguments to create a WorkflowRun.
     * @example
     * // Create one WorkflowRun
     * const WorkflowRun = await prisma.workflowRun.create({
     *   data: {
     *     // ... data to create a WorkflowRun
     *   }
     * })
     * 
     */
    create<T extends WorkflowRunCreateArgs>(args: SelectSubset<T, WorkflowRunCreateArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowRuns.
     * @param {WorkflowRunCreateManyArgs} args - Arguments to create many WorkflowRuns.
     * @example
     * // Create many WorkflowRuns
     * const workflowRun = await prisma.workflowRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowRunCreateManyArgs>(args?: SelectSubset<T, WorkflowRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkflowRun.
     * @param {WorkflowRunDeleteArgs} args - Arguments to delete one WorkflowRun.
     * @example
     * // Delete one WorkflowRun
     * const WorkflowRun = await prisma.workflowRun.delete({
     *   where: {
     *     // ... filter to delete one WorkflowRun
     *   }
     * })
     * 
     */
    delete<T extends WorkflowRunDeleteArgs>(args: SelectSubset<T, WorkflowRunDeleteArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowRun.
     * @param {WorkflowRunUpdateArgs} args - Arguments to update one WorkflowRun.
     * @example
     * // Update one WorkflowRun
     * const workflowRun = await prisma.workflowRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowRunUpdateArgs>(args: SelectSubset<T, WorkflowRunUpdateArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowRuns.
     * @param {WorkflowRunDeleteManyArgs} args - Arguments to filter WorkflowRuns to delete.
     * @example
     * // Delete a few WorkflowRuns
     * const { count } = await prisma.workflowRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowRunDeleteManyArgs>(args?: SelectSubset<T, WorkflowRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowRuns
     * const workflowRun = await prisma.workflowRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowRunUpdateManyArgs>(args: SelectSubset<T, WorkflowRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowRun.
     * @param {WorkflowRunUpsertArgs} args - Arguments to update or create a WorkflowRun.
     * @example
     * // Update or create a WorkflowRun
     * const workflowRun = await prisma.workflowRun.upsert({
     *   create: {
     *     // ... data to create a WorkflowRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowRun we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowRunUpsertArgs>(args: SelectSubset<T, WorkflowRunUpsertArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunCountArgs} args - Arguments to filter WorkflowRuns to count.
     * @example
     * // Count the number of WorkflowRuns
     * const count = await prisma.workflowRun.count({
     *   where: {
     *     // ... the filter for the WorkflowRuns we want to count
     *   }
     * })
    **/
    count<T extends WorkflowRunCountArgs>(
      args?: Subset<T, WorkflowRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowRunAggregateArgs>(args: Subset<T, WorkflowRunAggregateArgs>): Prisma.PrismaPromise<GetWorkflowRunAggregateType<T>>

    /**
     * Group by WorkflowRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunGroupByArgs} args - Group by arguments.
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
      T extends WorkflowRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowRunGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowRun model
   */
  readonly fields: WorkflowRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkflowRun model
   */
  interface WorkflowRunFieldRefs {
    readonly id: FieldRef<"WorkflowRun", 'Int'>
    readonly userId: FieldRef<"WorkflowRun", 'String'>
    readonly workflowId: FieldRef<"WorkflowRun", 'Int'>
    readonly params: FieldRef<"WorkflowRun", 'Json'>
    readonly result: FieldRef<"WorkflowRun", 'Json'>
    readonly status: FieldRef<"WorkflowRun", 'RunStatus'>
    readonly progress: FieldRef<"WorkflowRun", 'Int'>
    readonly progressMessage: FieldRef<"WorkflowRun", 'String'>
    readonly errorMessage: FieldRef<"WorkflowRun", 'String'>
    readonly costCredits: FieldRef<"WorkflowRun", 'Int'>
    readonly startedAt: FieldRef<"WorkflowRun", 'DateTime'>
    readonly finishedAt: FieldRef<"WorkflowRun", 'DateTime'>
    readonly createdAt: FieldRef<"WorkflowRun", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkflowRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowRun findUnique
   */
  export type WorkflowRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where: WorkflowRunWhereUniqueInput
  }

  /**
   * WorkflowRun findUniqueOrThrow
   */
  export type WorkflowRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where: WorkflowRunWhereUniqueInput
  }

  /**
   * WorkflowRun findFirst
   */
  export type WorkflowRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowRuns.
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowRuns.
     */
    distinct?: WorkflowRunScalarFieldEnum | WorkflowRunScalarFieldEnum[]
  }

  /**
   * WorkflowRun findFirstOrThrow
   */
  export type WorkflowRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowRuns.
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowRuns.
     */
    distinct?: WorkflowRunScalarFieldEnum | WorkflowRunScalarFieldEnum[]
  }

  /**
   * WorkflowRun findMany
   */
  export type WorkflowRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRuns to fetch.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowRuns.
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    distinct?: WorkflowRunScalarFieldEnum | WorkflowRunScalarFieldEnum[]
  }

  /**
   * WorkflowRun create
   */
  export type WorkflowRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowRun.
     */
    data: XOR<WorkflowRunCreateInput, WorkflowRunUncheckedCreateInput>
  }

  /**
   * WorkflowRun createMany
   */
  export type WorkflowRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowRuns.
     */
    data: WorkflowRunCreateManyInput | WorkflowRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowRun update
   */
  export type WorkflowRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowRun.
     */
    data: XOR<WorkflowRunUpdateInput, WorkflowRunUncheckedUpdateInput>
    /**
     * Choose, which WorkflowRun to update.
     */
    where: WorkflowRunWhereUniqueInput
  }

  /**
   * WorkflowRun updateMany
   */
  export type WorkflowRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowRuns.
     */
    data: XOR<WorkflowRunUpdateManyMutationInput, WorkflowRunUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowRuns to update
     */
    where?: WorkflowRunWhereInput
    /**
     * Limit how many WorkflowRuns to update.
     */
    limit?: number
  }

  /**
   * WorkflowRun upsert
   */
  export type WorkflowRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowRun to update in case it exists.
     */
    where: WorkflowRunWhereUniqueInput
    /**
     * In case the WorkflowRun found by the `where` argument doesn't exist, create a new WorkflowRun with this data.
     */
    create: XOR<WorkflowRunCreateInput, WorkflowRunUncheckedCreateInput>
    /**
     * In case the WorkflowRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowRunUpdateInput, WorkflowRunUncheckedUpdateInput>
  }

  /**
   * WorkflowRun delete
   */
  export type WorkflowRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter which WorkflowRun to delete.
     */
    where: WorkflowRunWhereUniqueInput
  }

  /**
   * WorkflowRun deleteMany
   */
  export type WorkflowRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowRuns to delete
     */
    where?: WorkflowRunWhereInput
    /**
     * Limit how many WorkflowRuns to delete.
     */
    limit?: number
  }

  /**
   * WorkflowRun without action
   */
  export type WorkflowRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
  }


  /**
   * Model RechargeOrder
   */

  export type AggregateRechargeOrder = {
    _count: RechargeOrderCountAggregateOutputType | null
    _avg: RechargeOrderAvgAggregateOutputType | null
    _sum: RechargeOrderSumAggregateOutputType | null
    _min: RechargeOrderMinAggregateOutputType | null
    _max: RechargeOrderMaxAggregateOutputType | null
  }

  export type RechargeOrderAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    credits: number | null
  }

  export type RechargeOrderSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    credits: number | null
  }

  export type RechargeOrderMinAggregateOutputType = {
    id: number | null
    userId: string | null
    amount: Decimal | null
    credits: number | null
    status: $Enums.OrderStatus | null
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RechargeOrderMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    amount: Decimal | null
    credits: number | null
    status: $Enums.OrderStatus | null
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RechargeOrderCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    credits: number
    status: number
    stripeSessionId: number
    stripePaymentIntentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RechargeOrderAvgAggregateInputType = {
    id?: true
    amount?: true
    credits?: true
  }

  export type RechargeOrderSumAggregateInputType = {
    id?: true
    amount?: true
    credits?: true
  }

  export type RechargeOrderMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    credits?: true
    status?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RechargeOrderMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    credits?: true
    status?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RechargeOrderCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    credits?: true
    status?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RechargeOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RechargeOrder to aggregate.
     */
    where?: RechargeOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeOrders to fetch.
     */
    orderBy?: RechargeOrderOrderByWithRelationInput | RechargeOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RechargeOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RechargeOrders
    **/
    _count?: true | RechargeOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RechargeOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RechargeOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RechargeOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RechargeOrderMaxAggregateInputType
  }

  export type GetRechargeOrderAggregateType<T extends RechargeOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateRechargeOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRechargeOrder[P]>
      : GetScalarType<T[P], AggregateRechargeOrder[P]>
  }




  export type RechargeOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RechargeOrderWhereInput
    orderBy?: RechargeOrderOrderByWithAggregationInput | RechargeOrderOrderByWithAggregationInput[]
    by: RechargeOrderScalarFieldEnum[] | RechargeOrderScalarFieldEnum
    having?: RechargeOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RechargeOrderCountAggregateInputType | true
    _avg?: RechargeOrderAvgAggregateInputType
    _sum?: RechargeOrderSumAggregateInputType
    _min?: RechargeOrderMinAggregateInputType
    _max?: RechargeOrderMaxAggregateInputType
  }

  export type RechargeOrderGroupByOutputType = {
    id: number
    userId: string
    amount: Decimal
    credits: number
    status: $Enums.OrderStatus
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: RechargeOrderCountAggregateOutputType | null
    _avg: RechargeOrderAvgAggregateOutputType | null
    _sum: RechargeOrderSumAggregateOutputType | null
    _min: RechargeOrderMinAggregateOutputType | null
    _max: RechargeOrderMaxAggregateOutputType | null
  }

  type GetRechargeOrderGroupByPayload<T extends RechargeOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RechargeOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RechargeOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RechargeOrderGroupByOutputType[P]>
            : GetScalarType<T[P], RechargeOrderGroupByOutputType[P]>
        }
      >
    >


  export type RechargeOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    credits?: boolean
    status?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rechargeOrder"]>



  export type RechargeOrderSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    credits?: boolean
    status?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RechargeOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "credits" | "status" | "stripeSessionId" | "stripePaymentIntentId" | "createdAt" | "updatedAt", ExtArgs["result"]["rechargeOrder"]>
  export type RechargeOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RechargeOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RechargeOrder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      amount: Prisma.Decimal
      credits: number
      status: $Enums.OrderStatus
      stripeSessionId: string | null
      stripePaymentIntentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rechargeOrder"]>
    composites: {}
  }

  type RechargeOrderGetPayload<S extends boolean | null | undefined | RechargeOrderDefaultArgs> = $Result.GetResult<Prisma.$RechargeOrderPayload, S>

  type RechargeOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RechargeOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RechargeOrderCountAggregateInputType | true
    }

  export interface RechargeOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RechargeOrder'], meta: { name: 'RechargeOrder' } }
    /**
     * Find zero or one RechargeOrder that matches the filter.
     * @param {RechargeOrderFindUniqueArgs} args - Arguments to find a RechargeOrder
     * @example
     * // Get one RechargeOrder
     * const rechargeOrder = await prisma.rechargeOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RechargeOrderFindUniqueArgs>(args: SelectSubset<T, RechargeOrderFindUniqueArgs<ExtArgs>>): Prisma__RechargeOrderClient<$Result.GetResult<Prisma.$RechargeOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RechargeOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RechargeOrderFindUniqueOrThrowArgs} args - Arguments to find a RechargeOrder
     * @example
     * // Get one RechargeOrder
     * const rechargeOrder = await prisma.rechargeOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RechargeOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, RechargeOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RechargeOrderClient<$Result.GetResult<Prisma.$RechargeOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RechargeOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeOrderFindFirstArgs} args - Arguments to find a RechargeOrder
     * @example
     * // Get one RechargeOrder
     * const rechargeOrder = await prisma.rechargeOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RechargeOrderFindFirstArgs>(args?: SelectSubset<T, RechargeOrderFindFirstArgs<ExtArgs>>): Prisma__RechargeOrderClient<$Result.GetResult<Prisma.$RechargeOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RechargeOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeOrderFindFirstOrThrowArgs} args - Arguments to find a RechargeOrder
     * @example
     * // Get one RechargeOrder
     * const rechargeOrder = await prisma.rechargeOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RechargeOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, RechargeOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__RechargeOrderClient<$Result.GetResult<Prisma.$RechargeOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RechargeOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RechargeOrders
     * const rechargeOrders = await prisma.rechargeOrder.findMany()
     * 
     * // Get first 10 RechargeOrders
     * const rechargeOrders = await prisma.rechargeOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rechargeOrderWithIdOnly = await prisma.rechargeOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RechargeOrderFindManyArgs>(args?: SelectSubset<T, RechargeOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargeOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RechargeOrder.
     * @param {RechargeOrderCreateArgs} args - Arguments to create a RechargeOrder.
     * @example
     * // Create one RechargeOrder
     * const RechargeOrder = await prisma.rechargeOrder.create({
     *   data: {
     *     // ... data to create a RechargeOrder
     *   }
     * })
     * 
     */
    create<T extends RechargeOrderCreateArgs>(args: SelectSubset<T, RechargeOrderCreateArgs<ExtArgs>>): Prisma__RechargeOrderClient<$Result.GetResult<Prisma.$RechargeOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RechargeOrders.
     * @param {RechargeOrderCreateManyArgs} args - Arguments to create many RechargeOrders.
     * @example
     * // Create many RechargeOrders
     * const rechargeOrder = await prisma.rechargeOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RechargeOrderCreateManyArgs>(args?: SelectSubset<T, RechargeOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RechargeOrder.
     * @param {RechargeOrderDeleteArgs} args - Arguments to delete one RechargeOrder.
     * @example
     * // Delete one RechargeOrder
     * const RechargeOrder = await prisma.rechargeOrder.delete({
     *   where: {
     *     // ... filter to delete one RechargeOrder
     *   }
     * })
     * 
     */
    delete<T extends RechargeOrderDeleteArgs>(args: SelectSubset<T, RechargeOrderDeleteArgs<ExtArgs>>): Prisma__RechargeOrderClient<$Result.GetResult<Prisma.$RechargeOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RechargeOrder.
     * @param {RechargeOrderUpdateArgs} args - Arguments to update one RechargeOrder.
     * @example
     * // Update one RechargeOrder
     * const rechargeOrder = await prisma.rechargeOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RechargeOrderUpdateArgs>(args: SelectSubset<T, RechargeOrderUpdateArgs<ExtArgs>>): Prisma__RechargeOrderClient<$Result.GetResult<Prisma.$RechargeOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RechargeOrders.
     * @param {RechargeOrderDeleteManyArgs} args - Arguments to filter RechargeOrders to delete.
     * @example
     * // Delete a few RechargeOrders
     * const { count } = await prisma.rechargeOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RechargeOrderDeleteManyArgs>(args?: SelectSubset<T, RechargeOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RechargeOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RechargeOrders
     * const rechargeOrder = await prisma.rechargeOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RechargeOrderUpdateManyArgs>(args: SelectSubset<T, RechargeOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RechargeOrder.
     * @param {RechargeOrderUpsertArgs} args - Arguments to update or create a RechargeOrder.
     * @example
     * // Update or create a RechargeOrder
     * const rechargeOrder = await prisma.rechargeOrder.upsert({
     *   create: {
     *     // ... data to create a RechargeOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RechargeOrder we want to update
     *   }
     * })
     */
    upsert<T extends RechargeOrderUpsertArgs>(args: SelectSubset<T, RechargeOrderUpsertArgs<ExtArgs>>): Prisma__RechargeOrderClient<$Result.GetResult<Prisma.$RechargeOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RechargeOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeOrderCountArgs} args - Arguments to filter RechargeOrders to count.
     * @example
     * // Count the number of RechargeOrders
     * const count = await prisma.rechargeOrder.count({
     *   where: {
     *     // ... the filter for the RechargeOrders we want to count
     *   }
     * })
    **/
    count<T extends RechargeOrderCountArgs>(
      args?: Subset<T, RechargeOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RechargeOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RechargeOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RechargeOrderAggregateArgs>(args: Subset<T, RechargeOrderAggregateArgs>): Prisma.PrismaPromise<GetRechargeOrderAggregateType<T>>

    /**
     * Group by RechargeOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeOrderGroupByArgs} args - Group by arguments.
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
      T extends RechargeOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RechargeOrderGroupByArgs['orderBy'] }
        : { orderBy?: RechargeOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RechargeOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRechargeOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RechargeOrder model
   */
  readonly fields: RechargeOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RechargeOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RechargeOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RechargeOrder model
   */
  interface RechargeOrderFieldRefs {
    readonly id: FieldRef<"RechargeOrder", 'Int'>
    readonly userId: FieldRef<"RechargeOrder", 'String'>
    readonly amount: FieldRef<"RechargeOrder", 'Decimal'>
    readonly credits: FieldRef<"RechargeOrder", 'Int'>
    readonly status: FieldRef<"RechargeOrder", 'OrderStatus'>
    readonly stripeSessionId: FieldRef<"RechargeOrder", 'String'>
    readonly stripePaymentIntentId: FieldRef<"RechargeOrder", 'String'>
    readonly createdAt: FieldRef<"RechargeOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"RechargeOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RechargeOrder findUnique
   */
  export type RechargeOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeOrder
     */
    select?: RechargeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeOrder
     */
    omit?: RechargeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeOrderInclude<ExtArgs> | null
    /**
     * Filter, which RechargeOrder to fetch.
     */
    where: RechargeOrderWhereUniqueInput
  }

  /**
   * RechargeOrder findUniqueOrThrow
   */
  export type RechargeOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeOrder
     */
    select?: RechargeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeOrder
     */
    omit?: RechargeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeOrderInclude<ExtArgs> | null
    /**
     * Filter, which RechargeOrder to fetch.
     */
    where: RechargeOrderWhereUniqueInput
  }

  /**
   * RechargeOrder findFirst
   */
  export type RechargeOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeOrder
     */
    select?: RechargeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeOrder
     */
    omit?: RechargeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeOrderInclude<ExtArgs> | null
    /**
     * Filter, which RechargeOrder to fetch.
     */
    where?: RechargeOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeOrders to fetch.
     */
    orderBy?: RechargeOrderOrderByWithRelationInput | RechargeOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RechargeOrders.
     */
    cursor?: RechargeOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RechargeOrders.
     */
    distinct?: RechargeOrderScalarFieldEnum | RechargeOrderScalarFieldEnum[]
  }

  /**
   * RechargeOrder findFirstOrThrow
   */
  export type RechargeOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeOrder
     */
    select?: RechargeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeOrder
     */
    omit?: RechargeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeOrderInclude<ExtArgs> | null
    /**
     * Filter, which RechargeOrder to fetch.
     */
    where?: RechargeOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeOrders to fetch.
     */
    orderBy?: RechargeOrderOrderByWithRelationInput | RechargeOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RechargeOrders.
     */
    cursor?: RechargeOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RechargeOrders.
     */
    distinct?: RechargeOrderScalarFieldEnum | RechargeOrderScalarFieldEnum[]
  }

  /**
   * RechargeOrder findMany
   */
  export type RechargeOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeOrder
     */
    select?: RechargeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeOrder
     */
    omit?: RechargeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeOrderInclude<ExtArgs> | null
    /**
     * Filter, which RechargeOrders to fetch.
     */
    where?: RechargeOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeOrders to fetch.
     */
    orderBy?: RechargeOrderOrderByWithRelationInput | RechargeOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RechargeOrders.
     */
    cursor?: RechargeOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeOrders.
     */
    skip?: number
    distinct?: RechargeOrderScalarFieldEnum | RechargeOrderScalarFieldEnum[]
  }

  /**
   * RechargeOrder create
   */
  export type RechargeOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeOrder
     */
    select?: RechargeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeOrder
     */
    omit?: RechargeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a RechargeOrder.
     */
    data: XOR<RechargeOrderCreateInput, RechargeOrderUncheckedCreateInput>
  }

  /**
   * RechargeOrder createMany
   */
  export type RechargeOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RechargeOrders.
     */
    data: RechargeOrderCreateManyInput | RechargeOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RechargeOrder update
   */
  export type RechargeOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeOrder
     */
    select?: RechargeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeOrder
     */
    omit?: RechargeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a RechargeOrder.
     */
    data: XOR<RechargeOrderUpdateInput, RechargeOrderUncheckedUpdateInput>
    /**
     * Choose, which RechargeOrder to update.
     */
    where: RechargeOrderWhereUniqueInput
  }

  /**
   * RechargeOrder updateMany
   */
  export type RechargeOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RechargeOrders.
     */
    data: XOR<RechargeOrderUpdateManyMutationInput, RechargeOrderUncheckedUpdateManyInput>
    /**
     * Filter which RechargeOrders to update
     */
    where?: RechargeOrderWhereInput
    /**
     * Limit how many RechargeOrders to update.
     */
    limit?: number
  }

  /**
   * RechargeOrder upsert
   */
  export type RechargeOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeOrder
     */
    select?: RechargeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeOrder
     */
    omit?: RechargeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the RechargeOrder to update in case it exists.
     */
    where: RechargeOrderWhereUniqueInput
    /**
     * In case the RechargeOrder found by the `where` argument doesn't exist, create a new RechargeOrder with this data.
     */
    create: XOR<RechargeOrderCreateInput, RechargeOrderUncheckedCreateInput>
    /**
     * In case the RechargeOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RechargeOrderUpdateInput, RechargeOrderUncheckedUpdateInput>
  }

  /**
   * RechargeOrder delete
   */
  export type RechargeOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeOrder
     */
    select?: RechargeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeOrder
     */
    omit?: RechargeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeOrderInclude<ExtArgs> | null
    /**
     * Filter which RechargeOrder to delete.
     */
    where: RechargeOrderWhereUniqueInput
  }

  /**
   * RechargeOrder deleteMany
   */
  export type RechargeOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RechargeOrders to delete
     */
    where?: RechargeOrderWhereInput
    /**
     * Limit how many RechargeOrders to delete.
     */
    limit?: number
  }

  /**
   * RechargeOrder without action
   */
  export type RechargeOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeOrder
     */
    select?: RechargeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeOrder
     */
    omit?: RechargeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeOrderInclude<ExtArgs> | null
  }


  /**
   * Model CreditLedger
   */

  export type AggregateCreditLedger = {
    _count: CreditLedgerCountAggregateOutputType | null
    _avg: CreditLedgerAvgAggregateOutputType | null
    _sum: CreditLedgerSumAggregateOutputType | null
    _min: CreditLedgerMinAggregateOutputType | null
    _max: CreditLedgerMaxAggregateOutputType | null
  }

  export type CreditLedgerAvgAggregateOutputType = {
    id: number | null
    change: number | null
    balanceAfter: number | null
  }

  export type CreditLedgerSumAggregateOutputType = {
    id: number | null
    change: number | null
    balanceAfter: number | null
  }

  export type CreditLedgerMinAggregateOutputType = {
    id: number | null
    userId: string | null
    change: number | null
    balanceAfter: number | null
    type: $Enums.LedgerType | null
    refId: string | null
    memo: string | null
    createdAt: Date | null
  }

  export type CreditLedgerMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    change: number | null
    balanceAfter: number | null
    type: $Enums.LedgerType | null
    refId: string | null
    memo: string | null
    createdAt: Date | null
  }

  export type CreditLedgerCountAggregateOutputType = {
    id: number
    userId: number
    change: number
    balanceAfter: number
    type: number
    refId: number
    memo: number
    createdAt: number
    _all: number
  }


  export type CreditLedgerAvgAggregateInputType = {
    id?: true
    change?: true
    balanceAfter?: true
  }

  export type CreditLedgerSumAggregateInputType = {
    id?: true
    change?: true
    balanceAfter?: true
  }

  export type CreditLedgerMinAggregateInputType = {
    id?: true
    userId?: true
    change?: true
    balanceAfter?: true
    type?: true
    refId?: true
    memo?: true
    createdAt?: true
  }

  export type CreditLedgerMaxAggregateInputType = {
    id?: true
    userId?: true
    change?: true
    balanceAfter?: true
    type?: true
    refId?: true
    memo?: true
    createdAt?: true
  }

  export type CreditLedgerCountAggregateInputType = {
    id?: true
    userId?: true
    change?: true
    balanceAfter?: true
    type?: true
    refId?: true
    memo?: true
    createdAt?: true
    _all?: true
  }

  export type CreditLedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditLedger to aggregate.
     */
    where?: CreditLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditLedgers to fetch.
     */
    orderBy?: CreditLedgerOrderByWithRelationInput | CreditLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditLedgers
    **/
    _count?: true | CreditLedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditLedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditLedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditLedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditLedgerMaxAggregateInputType
  }

  export type GetCreditLedgerAggregateType<T extends CreditLedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditLedger[P]>
      : GetScalarType<T[P], AggregateCreditLedger[P]>
  }




  export type CreditLedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditLedgerWhereInput
    orderBy?: CreditLedgerOrderByWithAggregationInput | CreditLedgerOrderByWithAggregationInput[]
    by: CreditLedgerScalarFieldEnum[] | CreditLedgerScalarFieldEnum
    having?: CreditLedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditLedgerCountAggregateInputType | true
    _avg?: CreditLedgerAvgAggregateInputType
    _sum?: CreditLedgerSumAggregateInputType
    _min?: CreditLedgerMinAggregateInputType
    _max?: CreditLedgerMaxAggregateInputType
  }

  export type CreditLedgerGroupByOutputType = {
    id: number
    userId: string
    change: number
    balanceAfter: number
    type: $Enums.LedgerType
    refId: string | null
    memo: string | null
    createdAt: Date
    _count: CreditLedgerCountAggregateOutputType | null
    _avg: CreditLedgerAvgAggregateOutputType | null
    _sum: CreditLedgerSumAggregateOutputType | null
    _min: CreditLedgerMinAggregateOutputType | null
    _max: CreditLedgerMaxAggregateOutputType | null
  }

  type GetCreditLedgerGroupByPayload<T extends CreditLedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditLedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditLedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditLedgerGroupByOutputType[P]>
            : GetScalarType<T[P], CreditLedgerGroupByOutputType[P]>
        }
      >
    >


  export type CreditLedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    change?: boolean
    balanceAfter?: boolean
    type?: boolean
    refId?: boolean
    memo?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditLedger"]>



  export type CreditLedgerSelectScalar = {
    id?: boolean
    userId?: boolean
    change?: boolean
    balanceAfter?: boolean
    type?: boolean
    refId?: boolean
    memo?: boolean
    createdAt?: boolean
  }

  export type CreditLedgerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "change" | "balanceAfter" | "type" | "refId" | "memo" | "createdAt", ExtArgs["result"]["creditLedger"]>
  export type CreditLedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditLedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditLedger"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      change: number
      balanceAfter: number
      type: $Enums.LedgerType
      refId: string | null
      memo: string | null
      createdAt: Date
    }, ExtArgs["result"]["creditLedger"]>
    composites: {}
  }

  type CreditLedgerGetPayload<S extends boolean | null | undefined | CreditLedgerDefaultArgs> = $Result.GetResult<Prisma.$CreditLedgerPayload, S>

  type CreditLedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditLedgerCountAggregateInputType | true
    }

  export interface CreditLedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditLedger'], meta: { name: 'CreditLedger' } }
    /**
     * Find zero or one CreditLedger that matches the filter.
     * @param {CreditLedgerFindUniqueArgs} args - Arguments to find a CreditLedger
     * @example
     * // Get one CreditLedger
     * const creditLedger = await prisma.creditLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditLedgerFindUniqueArgs>(args: SelectSubset<T, CreditLedgerFindUniqueArgs<ExtArgs>>): Prisma__CreditLedgerClient<$Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditLedger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditLedgerFindUniqueOrThrowArgs} args - Arguments to find a CreditLedger
     * @example
     * // Get one CreditLedger
     * const creditLedger = await prisma.creditLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditLedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditLedgerClient<$Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLedgerFindFirstArgs} args - Arguments to find a CreditLedger
     * @example
     * // Get one CreditLedger
     * const creditLedger = await prisma.creditLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditLedgerFindFirstArgs>(args?: SelectSubset<T, CreditLedgerFindFirstArgs<ExtArgs>>): Prisma__CreditLedgerClient<$Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLedgerFindFirstOrThrowArgs} args - Arguments to find a CreditLedger
     * @example
     * // Get one CreditLedger
     * const creditLedger = await prisma.creditLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditLedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditLedgerClient<$Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditLedgers
     * const creditLedgers = await prisma.creditLedger.findMany()
     * 
     * // Get first 10 CreditLedgers
     * const creditLedgers = await prisma.creditLedger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditLedgerWithIdOnly = await prisma.creditLedger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditLedgerFindManyArgs>(args?: SelectSubset<T, CreditLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditLedger.
     * @param {CreditLedgerCreateArgs} args - Arguments to create a CreditLedger.
     * @example
     * // Create one CreditLedger
     * const CreditLedger = await prisma.creditLedger.create({
     *   data: {
     *     // ... data to create a CreditLedger
     *   }
     * })
     * 
     */
    create<T extends CreditLedgerCreateArgs>(args: SelectSubset<T, CreditLedgerCreateArgs<ExtArgs>>): Prisma__CreditLedgerClient<$Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditLedgers.
     * @param {CreditLedgerCreateManyArgs} args - Arguments to create many CreditLedgers.
     * @example
     * // Create many CreditLedgers
     * const creditLedger = await prisma.creditLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditLedgerCreateManyArgs>(args?: SelectSubset<T, CreditLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CreditLedger.
     * @param {CreditLedgerDeleteArgs} args - Arguments to delete one CreditLedger.
     * @example
     * // Delete one CreditLedger
     * const CreditLedger = await prisma.creditLedger.delete({
     *   where: {
     *     // ... filter to delete one CreditLedger
     *   }
     * })
     * 
     */
    delete<T extends CreditLedgerDeleteArgs>(args: SelectSubset<T, CreditLedgerDeleteArgs<ExtArgs>>): Prisma__CreditLedgerClient<$Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditLedger.
     * @param {CreditLedgerUpdateArgs} args - Arguments to update one CreditLedger.
     * @example
     * // Update one CreditLedger
     * const creditLedger = await prisma.creditLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditLedgerUpdateArgs>(args: SelectSubset<T, CreditLedgerUpdateArgs<ExtArgs>>): Prisma__CreditLedgerClient<$Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditLedgers.
     * @param {CreditLedgerDeleteManyArgs} args - Arguments to filter CreditLedgers to delete.
     * @example
     * // Delete a few CreditLedgers
     * const { count } = await prisma.creditLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditLedgerDeleteManyArgs>(args?: SelectSubset<T, CreditLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditLedgers
     * const creditLedger = await prisma.creditLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditLedgerUpdateManyArgs>(args: SelectSubset<T, CreditLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditLedger.
     * @param {CreditLedgerUpsertArgs} args - Arguments to update or create a CreditLedger.
     * @example
     * // Update or create a CreditLedger
     * const creditLedger = await prisma.creditLedger.upsert({
     *   create: {
     *     // ... data to create a CreditLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditLedger we want to update
     *   }
     * })
     */
    upsert<T extends CreditLedgerUpsertArgs>(args: SelectSubset<T, CreditLedgerUpsertArgs<ExtArgs>>): Prisma__CreditLedgerClient<$Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLedgerCountArgs} args - Arguments to filter CreditLedgers to count.
     * @example
     * // Count the number of CreditLedgers
     * const count = await prisma.creditLedger.count({
     *   where: {
     *     // ... the filter for the CreditLedgers we want to count
     *   }
     * })
    **/
    count<T extends CreditLedgerCountArgs>(
      args?: Subset<T, CreditLedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditLedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditLedgerAggregateArgs>(args: Subset<T, CreditLedgerAggregateArgs>): Prisma.PrismaPromise<GetCreditLedgerAggregateType<T>>

    /**
     * Group by CreditLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditLedgerGroupByArgs} args - Group by arguments.
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
      T extends CreditLedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditLedgerGroupByArgs['orderBy'] }
        : { orderBy?: CreditLedgerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditLedger model
   */
  readonly fields: CreditLedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditLedger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditLedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CreditLedger model
   */
  interface CreditLedgerFieldRefs {
    readonly id: FieldRef<"CreditLedger", 'Int'>
    readonly userId: FieldRef<"CreditLedger", 'String'>
    readonly change: FieldRef<"CreditLedger", 'Int'>
    readonly balanceAfter: FieldRef<"CreditLedger", 'Int'>
    readonly type: FieldRef<"CreditLedger", 'LedgerType'>
    readonly refId: FieldRef<"CreditLedger", 'String'>
    readonly memo: FieldRef<"CreditLedger", 'String'>
    readonly createdAt: FieldRef<"CreditLedger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditLedger findUnique
   */
  export type CreditLedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLedger
     */
    select?: CreditLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLedger
     */
    omit?: CreditLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLedgerInclude<ExtArgs> | null
    /**
     * Filter, which CreditLedger to fetch.
     */
    where: CreditLedgerWhereUniqueInput
  }

  /**
   * CreditLedger findUniqueOrThrow
   */
  export type CreditLedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLedger
     */
    select?: CreditLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLedger
     */
    omit?: CreditLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLedgerInclude<ExtArgs> | null
    /**
     * Filter, which CreditLedger to fetch.
     */
    where: CreditLedgerWhereUniqueInput
  }

  /**
   * CreditLedger findFirst
   */
  export type CreditLedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLedger
     */
    select?: CreditLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLedger
     */
    omit?: CreditLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLedgerInclude<ExtArgs> | null
    /**
     * Filter, which CreditLedger to fetch.
     */
    where?: CreditLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditLedgers to fetch.
     */
    orderBy?: CreditLedgerOrderByWithRelationInput | CreditLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditLedgers.
     */
    cursor?: CreditLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditLedgers.
     */
    distinct?: CreditLedgerScalarFieldEnum | CreditLedgerScalarFieldEnum[]
  }

  /**
   * CreditLedger findFirstOrThrow
   */
  export type CreditLedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLedger
     */
    select?: CreditLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLedger
     */
    omit?: CreditLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLedgerInclude<ExtArgs> | null
    /**
     * Filter, which CreditLedger to fetch.
     */
    where?: CreditLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditLedgers to fetch.
     */
    orderBy?: CreditLedgerOrderByWithRelationInput | CreditLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditLedgers.
     */
    cursor?: CreditLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditLedgers.
     */
    distinct?: CreditLedgerScalarFieldEnum | CreditLedgerScalarFieldEnum[]
  }

  /**
   * CreditLedger findMany
   */
  export type CreditLedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLedger
     */
    select?: CreditLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLedger
     */
    omit?: CreditLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLedgerInclude<ExtArgs> | null
    /**
     * Filter, which CreditLedgers to fetch.
     */
    where?: CreditLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditLedgers to fetch.
     */
    orderBy?: CreditLedgerOrderByWithRelationInput | CreditLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditLedgers.
     */
    cursor?: CreditLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditLedgers.
     */
    skip?: number
    distinct?: CreditLedgerScalarFieldEnum | CreditLedgerScalarFieldEnum[]
  }

  /**
   * CreditLedger create
   */
  export type CreditLedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLedger
     */
    select?: CreditLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLedger
     */
    omit?: CreditLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditLedger.
     */
    data: XOR<CreditLedgerCreateInput, CreditLedgerUncheckedCreateInput>
  }

  /**
   * CreditLedger createMany
   */
  export type CreditLedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditLedgers.
     */
    data: CreditLedgerCreateManyInput | CreditLedgerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditLedger update
   */
  export type CreditLedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLedger
     */
    select?: CreditLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLedger
     */
    omit?: CreditLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditLedger.
     */
    data: XOR<CreditLedgerUpdateInput, CreditLedgerUncheckedUpdateInput>
    /**
     * Choose, which CreditLedger to update.
     */
    where: CreditLedgerWhereUniqueInput
  }

  /**
   * CreditLedger updateMany
   */
  export type CreditLedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditLedgers.
     */
    data: XOR<CreditLedgerUpdateManyMutationInput, CreditLedgerUncheckedUpdateManyInput>
    /**
     * Filter which CreditLedgers to update
     */
    where?: CreditLedgerWhereInput
    /**
     * Limit how many CreditLedgers to update.
     */
    limit?: number
  }

  /**
   * CreditLedger upsert
   */
  export type CreditLedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLedger
     */
    select?: CreditLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLedger
     */
    omit?: CreditLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditLedger to update in case it exists.
     */
    where: CreditLedgerWhereUniqueInput
    /**
     * In case the CreditLedger found by the `where` argument doesn't exist, create a new CreditLedger with this data.
     */
    create: XOR<CreditLedgerCreateInput, CreditLedgerUncheckedCreateInput>
    /**
     * In case the CreditLedger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditLedgerUpdateInput, CreditLedgerUncheckedUpdateInput>
  }

  /**
   * CreditLedger delete
   */
  export type CreditLedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLedger
     */
    select?: CreditLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLedger
     */
    omit?: CreditLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLedgerInclude<ExtArgs> | null
    /**
     * Filter which CreditLedger to delete.
     */
    where: CreditLedgerWhereUniqueInput
  }

  /**
   * CreditLedger deleteMany
   */
  export type CreditLedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditLedgers to delete
     */
    where?: CreditLedgerWhereInput
    /**
     * Limit how many CreditLedgers to delete.
     */
    limit?: number
  }

  /**
   * CreditLedger without action
   */
  export type CreditLedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditLedger
     */
    select?: CreditLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditLedger
     */
    omit?: CreditLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditLedgerInclude<ExtArgs> | null
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
    clerkId: 'clerkId',
    email: 'email',
    nickname: 'nickname',
    imageUrl: 'imageUrl',
    status: 'status',
    role: 'role',
    credits: 'credits',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    coverUrl: 'coverUrl',
    creditCost: 'creditCost',
    sortOrder: 'sortOrder',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const WorkflowRunScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workflowId: 'workflowId',
    params: 'params',
    result: 'result',
    status: 'status',
    progress: 'progress',
    progressMessage: 'progressMessage',
    errorMessage: 'errorMessage',
    costCredits: 'costCredits',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowRunScalarFieldEnum = (typeof WorkflowRunScalarFieldEnum)[keyof typeof WorkflowRunScalarFieldEnum]


  export const RechargeOrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    credits: 'credits',
    status: 'status',
    stripeSessionId: 'stripeSessionId',
    stripePaymentIntentId: 'stripePaymentIntentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RechargeOrderScalarFieldEnum = (typeof RechargeOrderScalarFieldEnum)[keyof typeof RechargeOrderScalarFieldEnum]


  export const CreditLedgerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    change: 'change',
    balanceAfter: 'balanceAfter',
    type: 'type',
    refId: 'refId',
    memo: 'memo',
    createdAt: 'createdAt'
  };

  export type CreditLedgerScalarFieldEnum = (typeof CreditLedgerScalarFieldEnum)[keyof typeof CreditLedgerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    nickname: 'nickname',
    imageUrl: 'imageUrl'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const WorkflowOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    coverUrl: 'coverUrl'
  };

  export type WorkflowOrderByRelevanceFieldEnum = (typeof WorkflowOrderByRelevanceFieldEnum)[keyof typeof WorkflowOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const WorkflowRunOrderByRelevanceFieldEnum: {
    userId: 'userId',
    progressMessage: 'progressMessage',
    errorMessage: 'errorMessage'
  };

  export type WorkflowRunOrderByRelevanceFieldEnum = (typeof WorkflowRunOrderByRelevanceFieldEnum)[keyof typeof WorkflowRunOrderByRelevanceFieldEnum]


  export const RechargeOrderOrderByRelevanceFieldEnum: {
    userId: 'userId',
    stripeSessionId: 'stripeSessionId',
    stripePaymentIntentId: 'stripePaymentIntentId'
  };

  export type RechargeOrderOrderByRelevanceFieldEnum = (typeof RechargeOrderOrderByRelevanceFieldEnum)[keyof typeof RechargeOrderOrderByRelevanceFieldEnum]


  export const CreditLedgerOrderByRelevanceFieldEnum: {
    userId: 'userId',
    refId: 'refId',
    memo: 'memo'
  };

  export type CreditLedgerOrderByRelevanceFieldEnum = (typeof CreditLedgerOrderByRelevanceFieldEnum)[keyof typeof CreditLedgerOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'WorkflowStatus'
   */
  export type EnumWorkflowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkflowStatus'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'RunStatus'
   */
  export type EnumRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RunStatus'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'LedgerType'
   */
  export type EnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    nickname?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    credits?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    runs?: WorkflowRunListRelationFilter
    ledgers?: CreditLedgerListRelationFilter
    orders?: RechargeOrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    runs?: WorkflowRunOrderByRelationAggregateInput
    ledgers?: CreditLedgerOrderByRelationAggregateInput
    orders?: RechargeOrderOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nickname?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    credits?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    runs?: WorkflowRunListRelationFilter
    ledgers?: CreditLedgerListRelationFilter
    orders?: RechargeOrderListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    credits?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: IntFilter<"Workflow"> | number
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    coverUrl?: StringNullableFilter<"Workflow"> | string | null
    creditCost?: IntFilter<"Workflow"> | number
    sortOrder?: IntFilter<"Workflow"> | number
    status?: EnumWorkflowStatusFilter<"Workflow"> | $Enums.WorkflowStatus
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    runs?: WorkflowRunListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    creditCost?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    runs?: WorkflowRunOrderByRelationAggregateInput
    _relevance?: WorkflowOrderByRelevanceInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    description?: StringNullableFilter<"Workflow"> | string | null
    coverUrl?: StringNullableFilter<"Workflow"> | string | null
    creditCost?: IntFilter<"Workflow"> | number
    sortOrder?: IntFilter<"Workflow"> | number
    status?: EnumWorkflowStatusFilter<"Workflow"> | $Enums.WorkflowStatus
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    runs?: WorkflowRunListRelationFilter
  }, "id" | "name">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    creditCost?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _avg?: WorkflowAvgOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
    _sum?: WorkflowSumOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workflow"> | number
    name?: StringWithAggregatesFilter<"Workflow"> | string
    description?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    creditCost?: IntWithAggregatesFilter<"Workflow"> | number
    sortOrder?: IntWithAggregatesFilter<"Workflow"> | number
    status?: EnumWorkflowStatusWithAggregatesFilter<"Workflow"> | $Enums.WorkflowStatus
    createdAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
  }

  export type WorkflowRunWhereInput = {
    AND?: WorkflowRunWhereInput | WorkflowRunWhereInput[]
    OR?: WorkflowRunWhereInput[]
    NOT?: WorkflowRunWhereInput | WorkflowRunWhereInput[]
    id?: IntFilter<"WorkflowRun"> | number
    userId?: StringFilter<"WorkflowRun"> | string
    workflowId?: IntFilter<"WorkflowRun"> | number
    params?: JsonNullableFilter<"WorkflowRun">
    result?: JsonNullableFilter<"WorkflowRun">
    status?: EnumRunStatusFilter<"WorkflowRun"> | $Enums.RunStatus
    progress?: IntFilter<"WorkflowRun"> | number
    progressMessage?: StringNullableFilter<"WorkflowRun"> | string | null
    errorMessage?: StringNullableFilter<"WorkflowRun"> | string | null
    costCredits?: IntFilter<"WorkflowRun"> | number
    startedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkflowRun"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowRun"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type WorkflowRunOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    workflowId?: SortOrder
    params?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    progressMessage?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    costCredits?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    workflow?: WorkflowOrderByWithRelationInput
    _relevance?: WorkflowRunOrderByRelevanceInput
  }

  export type WorkflowRunWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkflowRunWhereInput | WorkflowRunWhereInput[]
    OR?: WorkflowRunWhereInput[]
    NOT?: WorkflowRunWhereInput | WorkflowRunWhereInput[]
    userId?: StringFilter<"WorkflowRun"> | string
    workflowId?: IntFilter<"WorkflowRun"> | number
    params?: JsonNullableFilter<"WorkflowRun">
    result?: JsonNullableFilter<"WorkflowRun">
    status?: EnumRunStatusFilter<"WorkflowRun"> | $Enums.RunStatus
    progress?: IntFilter<"WorkflowRun"> | number
    progressMessage?: StringNullableFilter<"WorkflowRun"> | string | null
    errorMessage?: StringNullableFilter<"WorkflowRun"> | string | null
    costCredits?: IntFilter<"WorkflowRun"> | number
    startedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkflowRun"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowRun"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id">

  export type WorkflowRunOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    workflowId?: SortOrder
    params?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    progressMessage?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    costCredits?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowRunCountOrderByAggregateInput
    _avg?: WorkflowRunAvgOrderByAggregateInput
    _max?: WorkflowRunMaxOrderByAggregateInput
    _min?: WorkflowRunMinOrderByAggregateInput
    _sum?: WorkflowRunSumOrderByAggregateInput
  }

  export type WorkflowRunScalarWhereWithAggregatesInput = {
    AND?: WorkflowRunScalarWhereWithAggregatesInput | WorkflowRunScalarWhereWithAggregatesInput[]
    OR?: WorkflowRunScalarWhereWithAggregatesInput[]
    NOT?: WorkflowRunScalarWhereWithAggregatesInput | WorkflowRunScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkflowRun"> | number
    userId?: StringWithAggregatesFilter<"WorkflowRun"> | string
    workflowId?: IntWithAggregatesFilter<"WorkflowRun"> | number
    params?: JsonNullableWithAggregatesFilter<"WorkflowRun">
    result?: JsonNullableWithAggregatesFilter<"WorkflowRun">
    status?: EnumRunStatusWithAggregatesFilter<"WorkflowRun"> | $Enums.RunStatus
    progress?: IntWithAggregatesFilter<"WorkflowRun"> | number
    progressMessage?: StringNullableWithAggregatesFilter<"WorkflowRun"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"WorkflowRun"> | string | null
    costCredits?: IntWithAggregatesFilter<"WorkflowRun"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"WorkflowRun"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"WorkflowRun"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkflowRun"> | Date | string
  }

  export type RechargeOrderWhereInput = {
    AND?: RechargeOrderWhereInput | RechargeOrderWhereInput[]
    OR?: RechargeOrderWhereInput[]
    NOT?: RechargeOrderWhereInput | RechargeOrderWhereInput[]
    id?: IntFilter<"RechargeOrder"> | number
    userId?: StringFilter<"RechargeOrder"> | string
    amount?: DecimalFilter<"RechargeOrder"> | Decimal | DecimalJsLike | number | string
    credits?: IntFilter<"RechargeOrder"> | number
    status?: EnumOrderStatusFilter<"RechargeOrder"> | $Enums.OrderStatus
    stripeSessionId?: StringNullableFilter<"RechargeOrder"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"RechargeOrder"> | string | null
    createdAt?: DateTimeFilter<"RechargeOrder"> | Date | string
    updatedAt?: DateTimeFilter<"RechargeOrder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RechargeOrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    status?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: RechargeOrderOrderByRelevanceInput
  }

  export type RechargeOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    stripeSessionId?: string
    stripePaymentIntentId?: string
    AND?: RechargeOrderWhereInput | RechargeOrderWhereInput[]
    OR?: RechargeOrderWhereInput[]
    NOT?: RechargeOrderWhereInput | RechargeOrderWhereInput[]
    userId?: StringFilter<"RechargeOrder"> | string
    amount?: DecimalFilter<"RechargeOrder"> | Decimal | DecimalJsLike | number | string
    credits?: IntFilter<"RechargeOrder"> | number
    status?: EnumOrderStatusFilter<"RechargeOrder"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"RechargeOrder"> | Date | string
    updatedAt?: DateTimeFilter<"RechargeOrder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "stripeSessionId" | "stripePaymentIntentId">

  export type RechargeOrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    status?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RechargeOrderCountOrderByAggregateInput
    _avg?: RechargeOrderAvgOrderByAggregateInput
    _max?: RechargeOrderMaxOrderByAggregateInput
    _min?: RechargeOrderMinOrderByAggregateInput
    _sum?: RechargeOrderSumOrderByAggregateInput
  }

  export type RechargeOrderScalarWhereWithAggregatesInput = {
    AND?: RechargeOrderScalarWhereWithAggregatesInput | RechargeOrderScalarWhereWithAggregatesInput[]
    OR?: RechargeOrderScalarWhereWithAggregatesInput[]
    NOT?: RechargeOrderScalarWhereWithAggregatesInput | RechargeOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RechargeOrder"> | number
    userId?: StringWithAggregatesFilter<"RechargeOrder"> | string
    amount?: DecimalWithAggregatesFilter<"RechargeOrder"> | Decimal | DecimalJsLike | number | string
    credits?: IntWithAggregatesFilter<"RechargeOrder"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"RechargeOrder"> | $Enums.OrderStatus
    stripeSessionId?: StringNullableWithAggregatesFilter<"RechargeOrder"> | string | null
    stripePaymentIntentId?: StringNullableWithAggregatesFilter<"RechargeOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RechargeOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RechargeOrder"> | Date | string
  }

  export type CreditLedgerWhereInput = {
    AND?: CreditLedgerWhereInput | CreditLedgerWhereInput[]
    OR?: CreditLedgerWhereInput[]
    NOT?: CreditLedgerWhereInput | CreditLedgerWhereInput[]
    id?: IntFilter<"CreditLedger"> | number
    userId?: StringFilter<"CreditLedger"> | string
    change?: IntFilter<"CreditLedger"> | number
    balanceAfter?: IntFilter<"CreditLedger"> | number
    type?: EnumLedgerTypeFilter<"CreditLedger"> | $Enums.LedgerType
    refId?: StringNullableFilter<"CreditLedger"> | string | null
    memo?: StringNullableFilter<"CreditLedger"> | string | null
    createdAt?: DateTimeFilter<"CreditLedger"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CreditLedgerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
    balanceAfter?: SortOrder
    type?: SortOrder
    refId?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: CreditLedgerOrderByRelevanceInput
  }

  export type CreditLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CreditLedgerWhereInput | CreditLedgerWhereInput[]
    OR?: CreditLedgerWhereInput[]
    NOT?: CreditLedgerWhereInput | CreditLedgerWhereInput[]
    userId?: StringFilter<"CreditLedger"> | string
    change?: IntFilter<"CreditLedger"> | number
    balanceAfter?: IntFilter<"CreditLedger"> | number
    type?: EnumLedgerTypeFilter<"CreditLedger"> | $Enums.LedgerType
    refId?: StringNullableFilter<"CreditLedger"> | string | null
    memo?: StringNullableFilter<"CreditLedger"> | string | null
    createdAt?: DateTimeFilter<"CreditLedger"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CreditLedgerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
    balanceAfter?: SortOrder
    type?: SortOrder
    refId?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CreditLedgerCountOrderByAggregateInput
    _avg?: CreditLedgerAvgOrderByAggregateInput
    _max?: CreditLedgerMaxOrderByAggregateInput
    _min?: CreditLedgerMinOrderByAggregateInput
    _sum?: CreditLedgerSumOrderByAggregateInput
  }

  export type CreditLedgerScalarWhereWithAggregatesInput = {
    AND?: CreditLedgerScalarWhereWithAggregatesInput | CreditLedgerScalarWhereWithAggregatesInput[]
    OR?: CreditLedgerScalarWhereWithAggregatesInput[]
    NOT?: CreditLedgerScalarWhereWithAggregatesInput | CreditLedgerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CreditLedger"> | number
    userId?: StringWithAggregatesFilter<"CreditLedger"> | string
    change?: IntWithAggregatesFilter<"CreditLedger"> | number
    balanceAfter?: IntWithAggregatesFilter<"CreditLedger"> | number
    type?: EnumLedgerTypeWithAggregatesFilter<"CreditLedger"> | $Enums.LedgerType
    refId?: StringNullableWithAggregatesFilter<"CreditLedger"> | string | null
    memo?: StringNullableWithAggregatesFilter<"CreditLedger"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreditLedger"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId?: string | null
    email?: string | null
    nickname?: string | null
    imageUrl?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: WorkflowRunCreateNestedManyWithoutUserInput
    ledgers?: CreditLedgerCreateNestedManyWithoutUserInput
    orders?: RechargeOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId?: string | null
    email?: string | null
    nickname?: string | null
    imageUrl?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: WorkflowRunUncheckedCreateNestedManyWithoutUserInput
    ledgers?: CreditLedgerUncheckedCreateNestedManyWithoutUserInput
    orders?: RechargeOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: WorkflowRunUpdateManyWithoutUserNestedInput
    ledgers?: CreditLedgerUpdateManyWithoutUserNestedInput
    orders?: RechargeOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: WorkflowRunUncheckedUpdateManyWithoutUserNestedInput
    ledgers?: CreditLedgerUncheckedUpdateManyWithoutUserNestedInput
    orders?: RechargeOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId?: string | null
    email?: string | null
    nickname?: string | null
    imageUrl?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowCreateInput = {
    name: string
    description?: string | null
    coverUrl?: string | null
    creditCost: number
    sortOrder?: number
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: WorkflowRunCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    coverUrl?: string | null
    creditCost: number
    sortOrder?: number
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: WorkflowRunUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creditCost?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: WorkflowRunUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creditCost?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: WorkflowRunUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    coverUrl?: string | null
    creditCost: number
    sortOrder?: number
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creditCost?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creditCost?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunCreateInput = {
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RunStatus
    progress?: number
    progressMessage?: string | null
    errorMessage?: string | null
    costCredits: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRunsInput
    workflow: WorkflowCreateNestedOneWithoutRunsInput
  }

  export type WorkflowRunUncheckedCreateInput = {
    id?: number
    userId: string
    workflowId: number
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RunStatus
    progress?: number
    progressMessage?: string | null
    errorMessage?: string | null
    costCredits: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowRunUpdateInput = {
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    progress?: IntFieldUpdateOperationsInput | number
    progressMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    costCredits?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRunsNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutRunsNestedInput
  }

  export type WorkflowRunUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    workflowId?: IntFieldUpdateOperationsInput | number
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    progress?: IntFieldUpdateOperationsInput | number
    progressMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    costCredits?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunCreateManyInput = {
    id?: number
    userId: string
    workflowId: number
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RunStatus
    progress?: number
    progressMessage?: string | null
    errorMessage?: string | null
    costCredits: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowRunUpdateManyMutationInput = {
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    progress?: IntFieldUpdateOperationsInput | number
    progressMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    costCredits?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    workflowId?: IntFieldUpdateOperationsInput | number
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    progress?: IntFieldUpdateOperationsInput | number
    progressMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    costCredits?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeOrderCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    credits: number
    status?: $Enums.OrderStatus
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type RechargeOrderUncheckedCreateInput = {
    id?: number
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    credits: number
    status?: $Enums.OrderStatus
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RechargeOrderUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credits?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type RechargeOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credits?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeOrderCreateManyInput = {
    id?: number
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    credits: number
    status?: $Enums.OrderStatus
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RechargeOrderUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credits?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credits?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLedgerCreateInput = {
    change: number
    balanceAfter: number
    type: $Enums.LedgerType
    refId?: string | null
    memo?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLedgersInput
  }

  export type CreditLedgerUncheckedCreateInput = {
    id?: number
    userId: string
    change: number
    balanceAfter: number
    type: $Enums.LedgerType
    refId?: string | null
    memo?: string | null
    createdAt?: Date | string
  }

  export type CreditLedgerUpdateInput = {
    change?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLedgersNestedInput
  }

  export type CreditLedgerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    change?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLedgerCreateManyInput = {
    id?: number
    userId: string
    change: number
    balanceAfter: number
    type: $Enums.LedgerType
    refId?: string | null
    memo?: string | null
    createdAt?: Date | string
  }

  export type CreditLedgerUpdateManyMutationInput = {
    change?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLedgerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    change?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkflowRunListRelationFilter = {
    every?: WorkflowRunWhereInput
    some?: WorkflowRunWhereInput
    none?: WorkflowRunWhereInput
  }

  export type CreditLedgerListRelationFilter = {
    every?: CreditLedgerWhereInput
    some?: CreditLedgerWhereInput
    none?: CreditLedgerWhereInput
  }

  export type RechargeOrderListRelationFilter = {
    every?: RechargeOrderWhereInput
    some?: RechargeOrderWhereInput
    none?: RechargeOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkflowRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditLedgerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RechargeOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumWorkflowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[]
    notIn?: $Enums.WorkflowStatus[]
    not?: NestedEnumWorkflowStatusFilter<$PrismaModel> | $Enums.WorkflowStatus
  }

  export type WorkflowOrderByRelevanceInput = {
    fields: WorkflowOrderByRelevanceFieldEnum | WorkflowOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    creditCost?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowAvgOrderByAggregateInput = {
    id?: SortOrder
    creditCost?: SortOrder
    sortOrder?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    creditCost?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    creditCost?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowSumOrderByAggregateInput = {
    id?: SortOrder
    creditCost?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumWorkflowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[]
    notIn?: $Enums.WorkflowStatus[]
    not?: NestedEnumWorkflowStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkflowStatusFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[]
    notIn?: $Enums.RunStatus[]
    not?: NestedEnumRunStatusFilter<$PrismaModel> | $Enums.RunStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type WorkflowRunOrderByRelevanceInput = {
    fields: WorkflowRunOrderByRelevanceFieldEnum | WorkflowRunOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkflowRunCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workflowId?: SortOrder
    params?: SortOrder
    result?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    progressMessage?: SortOrder
    errorMessage?: SortOrder
    costCredits?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowRunAvgOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    progress?: SortOrder
    costCredits?: SortOrder
  }

  export type WorkflowRunMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    progressMessage?: SortOrder
    errorMessage?: SortOrder
    costCredits?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowRunMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    progressMessage?: SortOrder
    errorMessage?: SortOrder
    costCredits?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowRunSumOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    progress?: SortOrder
    costCredits?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[]
    notIn?: $Enums.RunStatus[]
    not?: NestedEnumRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.RunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRunStatusFilter<$PrismaModel>
    _max?: NestedEnumRunStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type RechargeOrderOrderByRelevanceInput = {
    fields: RechargeOrderOrderByRelevanceFieldEnum | RechargeOrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RechargeOrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    status?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RechargeOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
  }

  export type RechargeOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    status?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RechargeOrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    status?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RechargeOrderSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[]
    notIn?: $Enums.LedgerType[]
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type CreditLedgerOrderByRelevanceInput = {
    fields: CreditLedgerOrderByRelevanceFieldEnum | CreditLedgerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CreditLedgerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
    balanceAfter?: SortOrder
    type?: SortOrder
    refId?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditLedgerAvgOrderByAggregateInput = {
    id?: SortOrder
    change?: SortOrder
    balanceAfter?: SortOrder
  }

  export type CreditLedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
    balanceAfter?: SortOrder
    type?: SortOrder
    refId?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditLedgerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
    balanceAfter?: SortOrder
    type?: SortOrder
    refId?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditLedgerSumOrderByAggregateInput = {
    id?: SortOrder
    change?: SortOrder
    balanceAfter?: SortOrder
  }

  export type EnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[]
    notIn?: $Enums.LedgerType[]
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type WorkflowRunCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowRunCreateWithoutUserInput, WorkflowRunUncheckedCreateWithoutUserInput> | WorkflowRunCreateWithoutUserInput[] | WorkflowRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutUserInput | WorkflowRunCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowRunCreateManyUserInputEnvelope
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
  }

  export type CreditLedgerCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditLedgerCreateWithoutUserInput, CreditLedgerUncheckedCreateWithoutUserInput> | CreditLedgerCreateWithoutUserInput[] | CreditLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditLedgerCreateOrConnectWithoutUserInput | CreditLedgerCreateOrConnectWithoutUserInput[]
    createMany?: CreditLedgerCreateManyUserInputEnvelope
    connect?: CreditLedgerWhereUniqueInput | CreditLedgerWhereUniqueInput[]
  }

  export type RechargeOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<RechargeOrderCreateWithoutUserInput, RechargeOrderUncheckedCreateWithoutUserInput> | RechargeOrderCreateWithoutUserInput[] | RechargeOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RechargeOrderCreateOrConnectWithoutUserInput | RechargeOrderCreateOrConnectWithoutUserInput[]
    createMany?: RechargeOrderCreateManyUserInputEnvelope
    connect?: RechargeOrderWhereUniqueInput | RechargeOrderWhereUniqueInput[]
  }

  export type WorkflowRunUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowRunCreateWithoutUserInput, WorkflowRunUncheckedCreateWithoutUserInput> | WorkflowRunCreateWithoutUserInput[] | WorkflowRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutUserInput | WorkflowRunCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowRunCreateManyUserInputEnvelope
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
  }

  export type CreditLedgerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditLedgerCreateWithoutUserInput, CreditLedgerUncheckedCreateWithoutUserInput> | CreditLedgerCreateWithoutUserInput[] | CreditLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditLedgerCreateOrConnectWithoutUserInput | CreditLedgerCreateOrConnectWithoutUserInput[]
    createMany?: CreditLedgerCreateManyUserInputEnvelope
    connect?: CreditLedgerWhereUniqueInput | CreditLedgerWhereUniqueInput[]
  }

  export type RechargeOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RechargeOrderCreateWithoutUserInput, RechargeOrderUncheckedCreateWithoutUserInput> | RechargeOrderCreateWithoutUserInput[] | RechargeOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RechargeOrderCreateOrConnectWithoutUserInput | RechargeOrderCreateOrConnectWithoutUserInput[]
    createMany?: RechargeOrderCreateManyUserInputEnvelope
    connect?: RechargeOrderWhereUniqueInput | RechargeOrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkflowRunUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowRunCreateWithoutUserInput, WorkflowRunUncheckedCreateWithoutUserInput> | WorkflowRunCreateWithoutUserInput[] | WorkflowRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutUserInput | WorkflowRunCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowRunUpsertWithWhereUniqueWithoutUserInput | WorkflowRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowRunCreateManyUserInputEnvelope
    set?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    disconnect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    delete?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    update?: WorkflowRunUpdateWithWhereUniqueWithoutUserInput | WorkflowRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowRunUpdateManyWithWhereWithoutUserInput | WorkflowRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
  }

  export type CreditLedgerUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditLedgerCreateWithoutUserInput, CreditLedgerUncheckedCreateWithoutUserInput> | CreditLedgerCreateWithoutUserInput[] | CreditLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditLedgerCreateOrConnectWithoutUserInput | CreditLedgerCreateOrConnectWithoutUserInput[]
    upsert?: CreditLedgerUpsertWithWhereUniqueWithoutUserInput | CreditLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditLedgerCreateManyUserInputEnvelope
    set?: CreditLedgerWhereUniqueInput | CreditLedgerWhereUniqueInput[]
    disconnect?: CreditLedgerWhereUniqueInput | CreditLedgerWhereUniqueInput[]
    delete?: CreditLedgerWhereUniqueInput | CreditLedgerWhereUniqueInput[]
    connect?: CreditLedgerWhereUniqueInput | CreditLedgerWhereUniqueInput[]
    update?: CreditLedgerUpdateWithWhereUniqueWithoutUserInput | CreditLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditLedgerUpdateManyWithWhereWithoutUserInput | CreditLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditLedgerScalarWhereInput | CreditLedgerScalarWhereInput[]
  }

  export type RechargeOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<RechargeOrderCreateWithoutUserInput, RechargeOrderUncheckedCreateWithoutUserInput> | RechargeOrderCreateWithoutUserInput[] | RechargeOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RechargeOrderCreateOrConnectWithoutUserInput | RechargeOrderCreateOrConnectWithoutUserInput[]
    upsert?: RechargeOrderUpsertWithWhereUniqueWithoutUserInput | RechargeOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RechargeOrderCreateManyUserInputEnvelope
    set?: RechargeOrderWhereUniqueInput | RechargeOrderWhereUniqueInput[]
    disconnect?: RechargeOrderWhereUniqueInput | RechargeOrderWhereUniqueInput[]
    delete?: RechargeOrderWhereUniqueInput | RechargeOrderWhereUniqueInput[]
    connect?: RechargeOrderWhereUniqueInput | RechargeOrderWhereUniqueInput[]
    update?: RechargeOrderUpdateWithWhereUniqueWithoutUserInput | RechargeOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RechargeOrderUpdateManyWithWhereWithoutUserInput | RechargeOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RechargeOrderScalarWhereInput | RechargeOrderScalarWhereInput[]
  }

  export type WorkflowRunUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowRunCreateWithoutUserInput, WorkflowRunUncheckedCreateWithoutUserInput> | WorkflowRunCreateWithoutUserInput[] | WorkflowRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutUserInput | WorkflowRunCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowRunUpsertWithWhereUniqueWithoutUserInput | WorkflowRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowRunCreateManyUserInputEnvelope
    set?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    disconnect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    delete?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    update?: WorkflowRunUpdateWithWhereUniqueWithoutUserInput | WorkflowRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowRunUpdateManyWithWhereWithoutUserInput | WorkflowRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
  }

  export type CreditLedgerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditLedgerCreateWithoutUserInput, CreditLedgerUncheckedCreateWithoutUserInput> | CreditLedgerCreateWithoutUserInput[] | CreditLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditLedgerCreateOrConnectWithoutUserInput | CreditLedgerCreateOrConnectWithoutUserInput[]
    upsert?: CreditLedgerUpsertWithWhereUniqueWithoutUserInput | CreditLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditLedgerCreateManyUserInputEnvelope
    set?: CreditLedgerWhereUniqueInput | CreditLedgerWhereUniqueInput[]
    disconnect?: CreditLedgerWhereUniqueInput | CreditLedgerWhereUniqueInput[]
    delete?: CreditLedgerWhereUniqueInput | CreditLedgerWhereUniqueInput[]
    connect?: CreditLedgerWhereUniqueInput | CreditLedgerWhereUniqueInput[]
    update?: CreditLedgerUpdateWithWhereUniqueWithoutUserInput | CreditLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditLedgerUpdateManyWithWhereWithoutUserInput | CreditLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditLedgerScalarWhereInput | CreditLedgerScalarWhereInput[]
  }

  export type RechargeOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RechargeOrderCreateWithoutUserInput, RechargeOrderUncheckedCreateWithoutUserInput> | RechargeOrderCreateWithoutUserInput[] | RechargeOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RechargeOrderCreateOrConnectWithoutUserInput | RechargeOrderCreateOrConnectWithoutUserInput[]
    upsert?: RechargeOrderUpsertWithWhereUniqueWithoutUserInput | RechargeOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RechargeOrderCreateManyUserInputEnvelope
    set?: RechargeOrderWhereUniqueInput | RechargeOrderWhereUniqueInput[]
    disconnect?: RechargeOrderWhereUniqueInput | RechargeOrderWhereUniqueInput[]
    delete?: RechargeOrderWhereUniqueInput | RechargeOrderWhereUniqueInput[]
    connect?: RechargeOrderWhereUniqueInput | RechargeOrderWhereUniqueInput[]
    update?: RechargeOrderUpdateWithWhereUniqueWithoutUserInput | RechargeOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RechargeOrderUpdateManyWithWhereWithoutUserInput | RechargeOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RechargeOrderScalarWhereInput | RechargeOrderScalarWhereInput[]
  }

  export type WorkflowRunCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput> | WorkflowRunCreateWithoutWorkflowInput[] | WorkflowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutWorkflowInput | WorkflowRunCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
  }

  export type WorkflowRunUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput> | WorkflowRunCreateWithoutWorkflowInput[] | WorkflowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutWorkflowInput | WorkflowRunCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
  }

  export type EnumWorkflowStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkflowStatus
  }

  export type WorkflowRunUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput> | WorkflowRunCreateWithoutWorkflowInput[] | WorkflowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutWorkflowInput | WorkflowRunCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    set?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    disconnect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    delete?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    update?: WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowRunUpdateManyWithWhereWithoutWorkflowInput | WorkflowRunUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
  }

  export type WorkflowRunUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput> | WorkflowRunCreateWithoutWorkflowInput[] | WorkflowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutWorkflowInput | WorkflowRunCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    set?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    disconnect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    delete?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    update?: WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowRunUpdateManyWithWhereWithoutWorkflowInput | WorkflowRunUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRunsInput = {
    create?: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRunsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkflowCreateNestedOneWithoutRunsInput = {
    create?: XOR<WorkflowCreateWithoutRunsInput, WorkflowUncheckedCreateWithoutRunsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutRunsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type EnumRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.RunStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRunsInput
    upsert?: UserUpsertWithoutRunsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRunsInput, UserUpdateWithoutRunsInput>, UserUncheckedUpdateWithoutRunsInput>
  }

  export type WorkflowUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<WorkflowCreateWithoutRunsInput, WorkflowUncheckedCreateWithoutRunsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutRunsInput
    upsert?: WorkflowUpsertWithoutRunsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutRunsInput, WorkflowUpdateWithoutRunsInput>, WorkflowUncheckedUpdateWithoutRunsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserCreateNestedOneWithoutLedgersInput = {
    create?: XOR<UserCreateWithoutLedgersInput, UserUncheckedCreateWithoutLedgersInput>
    connectOrCreate?: UserCreateOrConnectWithoutLedgersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLedgerTypeFieldUpdateOperationsInput = {
    set?: $Enums.LedgerType
  }

  export type UserUpdateOneRequiredWithoutLedgersNestedInput = {
    create?: XOR<UserCreateWithoutLedgersInput, UserUncheckedCreateWithoutLedgersInput>
    connectOrCreate?: UserCreateOrConnectWithoutLedgersInput
    upsert?: UserUpsertWithoutLedgersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLedgersInput, UserUpdateWithoutLedgersInput>, UserUncheckedUpdateWithoutLedgersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumWorkflowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[]
    notIn?: $Enums.WorkflowStatus[]
    not?: NestedEnumWorkflowStatusFilter<$PrismaModel> | $Enums.WorkflowStatus
  }

  export type NestedEnumWorkflowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[]
    notIn?: $Enums.WorkflowStatus[]
    not?: NestedEnumWorkflowStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkflowStatusFilter<$PrismaModel>
  }

  export type NestedEnumRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[]
    notIn?: $Enums.RunStatus[]
    not?: NestedEnumRunStatusFilter<$PrismaModel> | $Enums.RunStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[]
    notIn?: $Enums.RunStatus[]
    not?: NestedEnumRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.RunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRunStatusFilter<$PrismaModel>
    _max?: NestedEnumRunStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[]
    notIn?: $Enums.LedgerType[]
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[]
    notIn?: $Enums.LedgerType[]
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type WorkflowRunCreateWithoutUserInput = {
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RunStatus
    progress?: number
    progressMessage?: string | null
    errorMessage?: string | null
    costCredits: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutRunsInput
  }

  export type WorkflowRunUncheckedCreateWithoutUserInput = {
    id?: number
    workflowId: number
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RunStatus
    progress?: number
    progressMessage?: string | null
    errorMessage?: string | null
    costCredits: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowRunCreateOrConnectWithoutUserInput = {
    where: WorkflowRunWhereUniqueInput
    create: XOR<WorkflowRunCreateWithoutUserInput, WorkflowRunUncheckedCreateWithoutUserInput>
  }

  export type WorkflowRunCreateManyUserInputEnvelope = {
    data: WorkflowRunCreateManyUserInput | WorkflowRunCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreditLedgerCreateWithoutUserInput = {
    change: number
    balanceAfter: number
    type: $Enums.LedgerType
    refId?: string | null
    memo?: string | null
    createdAt?: Date | string
  }

  export type CreditLedgerUncheckedCreateWithoutUserInput = {
    id?: number
    change: number
    balanceAfter: number
    type: $Enums.LedgerType
    refId?: string | null
    memo?: string | null
    createdAt?: Date | string
  }

  export type CreditLedgerCreateOrConnectWithoutUserInput = {
    where: CreditLedgerWhereUniqueInput
    create: XOR<CreditLedgerCreateWithoutUserInput, CreditLedgerUncheckedCreateWithoutUserInput>
  }

  export type CreditLedgerCreateManyUserInputEnvelope = {
    data: CreditLedgerCreateManyUserInput | CreditLedgerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RechargeOrderCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    credits: number
    status?: $Enums.OrderStatus
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RechargeOrderUncheckedCreateWithoutUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    credits: number
    status?: $Enums.OrderStatus
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RechargeOrderCreateOrConnectWithoutUserInput = {
    where: RechargeOrderWhereUniqueInput
    create: XOR<RechargeOrderCreateWithoutUserInput, RechargeOrderUncheckedCreateWithoutUserInput>
  }

  export type RechargeOrderCreateManyUserInputEnvelope = {
    data: RechargeOrderCreateManyUserInput | RechargeOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowRunUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkflowRunWhereUniqueInput
    update: XOR<WorkflowRunUpdateWithoutUserInput, WorkflowRunUncheckedUpdateWithoutUserInput>
    create: XOR<WorkflowRunCreateWithoutUserInput, WorkflowRunUncheckedCreateWithoutUserInput>
  }

  export type WorkflowRunUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkflowRunWhereUniqueInput
    data: XOR<WorkflowRunUpdateWithoutUserInput, WorkflowRunUncheckedUpdateWithoutUserInput>
  }

  export type WorkflowRunUpdateManyWithWhereWithoutUserInput = {
    where: WorkflowRunScalarWhereInput
    data: XOR<WorkflowRunUpdateManyMutationInput, WorkflowRunUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkflowRunScalarWhereInput = {
    AND?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
    OR?: WorkflowRunScalarWhereInput[]
    NOT?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
    id?: IntFilter<"WorkflowRun"> | number
    userId?: StringFilter<"WorkflowRun"> | string
    workflowId?: IntFilter<"WorkflowRun"> | number
    params?: JsonNullableFilter<"WorkflowRun">
    result?: JsonNullableFilter<"WorkflowRun">
    status?: EnumRunStatusFilter<"WorkflowRun"> | $Enums.RunStatus
    progress?: IntFilter<"WorkflowRun"> | number
    progressMessage?: StringNullableFilter<"WorkflowRun"> | string | null
    errorMessage?: StringNullableFilter<"WorkflowRun"> | string | null
    costCredits?: IntFilter<"WorkflowRun"> | number
    startedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkflowRun"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowRun"> | Date | string
  }

  export type CreditLedgerUpsertWithWhereUniqueWithoutUserInput = {
    where: CreditLedgerWhereUniqueInput
    update: XOR<CreditLedgerUpdateWithoutUserInput, CreditLedgerUncheckedUpdateWithoutUserInput>
    create: XOR<CreditLedgerCreateWithoutUserInput, CreditLedgerUncheckedCreateWithoutUserInput>
  }

  export type CreditLedgerUpdateWithWhereUniqueWithoutUserInput = {
    where: CreditLedgerWhereUniqueInput
    data: XOR<CreditLedgerUpdateWithoutUserInput, CreditLedgerUncheckedUpdateWithoutUserInput>
  }

  export type CreditLedgerUpdateManyWithWhereWithoutUserInput = {
    where: CreditLedgerScalarWhereInput
    data: XOR<CreditLedgerUpdateManyMutationInput, CreditLedgerUncheckedUpdateManyWithoutUserInput>
  }

  export type CreditLedgerScalarWhereInput = {
    AND?: CreditLedgerScalarWhereInput | CreditLedgerScalarWhereInput[]
    OR?: CreditLedgerScalarWhereInput[]
    NOT?: CreditLedgerScalarWhereInput | CreditLedgerScalarWhereInput[]
    id?: IntFilter<"CreditLedger"> | number
    userId?: StringFilter<"CreditLedger"> | string
    change?: IntFilter<"CreditLedger"> | number
    balanceAfter?: IntFilter<"CreditLedger"> | number
    type?: EnumLedgerTypeFilter<"CreditLedger"> | $Enums.LedgerType
    refId?: StringNullableFilter<"CreditLedger"> | string | null
    memo?: StringNullableFilter<"CreditLedger"> | string | null
    createdAt?: DateTimeFilter<"CreditLedger"> | Date | string
  }

  export type RechargeOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: RechargeOrderWhereUniqueInput
    update: XOR<RechargeOrderUpdateWithoutUserInput, RechargeOrderUncheckedUpdateWithoutUserInput>
    create: XOR<RechargeOrderCreateWithoutUserInput, RechargeOrderUncheckedCreateWithoutUserInput>
  }

  export type RechargeOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: RechargeOrderWhereUniqueInput
    data: XOR<RechargeOrderUpdateWithoutUserInput, RechargeOrderUncheckedUpdateWithoutUserInput>
  }

  export type RechargeOrderUpdateManyWithWhereWithoutUserInput = {
    where: RechargeOrderScalarWhereInput
    data: XOR<RechargeOrderUpdateManyMutationInput, RechargeOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type RechargeOrderScalarWhereInput = {
    AND?: RechargeOrderScalarWhereInput | RechargeOrderScalarWhereInput[]
    OR?: RechargeOrderScalarWhereInput[]
    NOT?: RechargeOrderScalarWhereInput | RechargeOrderScalarWhereInput[]
    id?: IntFilter<"RechargeOrder"> | number
    userId?: StringFilter<"RechargeOrder"> | string
    amount?: DecimalFilter<"RechargeOrder"> | Decimal | DecimalJsLike | number | string
    credits?: IntFilter<"RechargeOrder"> | number
    status?: EnumOrderStatusFilter<"RechargeOrder"> | $Enums.OrderStatus
    stripeSessionId?: StringNullableFilter<"RechargeOrder"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"RechargeOrder"> | string | null
    createdAt?: DateTimeFilter<"RechargeOrder"> | Date | string
    updatedAt?: DateTimeFilter<"RechargeOrder"> | Date | string
  }

  export type WorkflowRunCreateWithoutWorkflowInput = {
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RunStatus
    progress?: number
    progressMessage?: string | null
    errorMessage?: string | null
    costCredits: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRunsInput
  }

  export type WorkflowRunUncheckedCreateWithoutWorkflowInput = {
    id?: number
    userId: string
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RunStatus
    progress?: number
    progressMessage?: string | null
    errorMessage?: string | null
    costCredits: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowRunCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowRunWhereUniqueInput
    create: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowRunCreateManyWorkflowInputEnvelope = {
    data: WorkflowRunCreateManyWorkflowInput | WorkflowRunCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowRunWhereUniqueInput
    update: XOR<WorkflowRunUpdateWithoutWorkflowInput, WorkflowRunUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowRunWhereUniqueInput
    data: XOR<WorkflowRunUpdateWithoutWorkflowInput, WorkflowRunUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowRunUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowRunScalarWhereInput
    data: XOR<WorkflowRunUpdateManyMutationInput, WorkflowRunUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type UserCreateWithoutRunsInput = {
    id?: string
    clerkId?: string | null
    email?: string | null
    nickname?: string | null
    imageUrl?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgers?: CreditLedgerCreateNestedManyWithoutUserInput
    orders?: RechargeOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRunsInput = {
    id?: string
    clerkId?: string | null
    email?: string | null
    nickname?: string | null
    imageUrl?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgers?: CreditLedgerUncheckedCreateNestedManyWithoutUserInput
    orders?: RechargeOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRunsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
  }

  export type WorkflowCreateWithoutRunsInput = {
    name: string
    description?: string | null
    coverUrl?: string | null
    creditCost: number
    sortOrder?: number
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowUncheckedCreateWithoutRunsInput = {
    id?: number
    name: string
    description?: string | null
    coverUrl?: string | null
    creditCost: number
    sortOrder?: number
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowCreateOrConnectWithoutRunsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutRunsInput, WorkflowUncheckedCreateWithoutRunsInput>
  }

  export type UserUpsertWithoutRunsInput = {
    update: XOR<UserUpdateWithoutRunsInput, UserUncheckedUpdateWithoutRunsInput>
    create: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRunsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRunsInput, UserUncheckedUpdateWithoutRunsInput>
  }

  export type UserUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgers?: CreditLedgerUpdateManyWithoutUserNestedInput
    orders?: RechargeOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgers?: CreditLedgerUncheckedUpdateManyWithoutUserNestedInput
    orders?: RechargeOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkflowUpsertWithoutRunsInput = {
    update: XOR<WorkflowUpdateWithoutRunsInput, WorkflowUncheckedUpdateWithoutRunsInput>
    create: XOR<WorkflowCreateWithoutRunsInput, WorkflowUncheckedCreateWithoutRunsInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutRunsInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutRunsInput, WorkflowUncheckedUpdateWithoutRunsInput>
  }

  export type WorkflowUpdateWithoutRunsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creditCost?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateWithoutRunsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creditCost?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    clerkId?: string | null
    email?: string | null
    nickname?: string | null
    imageUrl?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: WorkflowRunCreateNestedManyWithoutUserInput
    ledgers?: CreditLedgerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    clerkId?: string | null
    email?: string | null
    nickname?: string | null
    imageUrl?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: WorkflowRunUncheckedCreateNestedManyWithoutUserInput
    ledgers?: CreditLedgerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: WorkflowRunUpdateManyWithoutUserNestedInput
    ledgers?: CreditLedgerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: WorkflowRunUncheckedUpdateManyWithoutUserNestedInput
    ledgers?: CreditLedgerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLedgersInput = {
    id?: string
    clerkId?: string | null
    email?: string | null
    nickname?: string | null
    imageUrl?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: WorkflowRunCreateNestedManyWithoutUserInput
    orders?: RechargeOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLedgersInput = {
    id?: string
    clerkId?: string | null
    email?: string | null
    nickname?: string | null
    imageUrl?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: WorkflowRunUncheckedCreateNestedManyWithoutUserInput
    orders?: RechargeOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLedgersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLedgersInput, UserUncheckedCreateWithoutLedgersInput>
  }

  export type UserUpsertWithoutLedgersInput = {
    update: XOR<UserUpdateWithoutLedgersInput, UserUncheckedUpdateWithoutLedgersInput>
    create: XOR<UserCreateWithoutLedgersInput, UserUncheckedCreateWithoutLedgersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLedgersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLedgersInput, UserUncheckedUpdateWithoutLedgersInput>
  }

  export type UserUpdateWithoutLedgersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: WorkflowRunUpdateManyWithoutUserNestedInput
    orders?: RechargeOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLedgersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: WorkflowRunUncheckedUpdateManyWithoutUserNestedInput
    orders?: RechargeOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkflowRunCreateManyUserInput = {
    id?: number
    workflowId: number
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RunStatus
    progress?: number
    progressMessage?: string | null
    errorMessage?: string | null
    costCredits: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditLedgerCreateManyUserInput = {
    id?: number
    change: number
    balanceAfter: number
    type: $Enums.LedgerType
    refId?: string | null
    memo?: string | null
    createdAt?: Date | string
  }

  export type RechargeOrderCreateManyUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    credits: number
    status?: $Enums.OrderStatus
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowRunUpdateWithoutUserInput = {
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    progress?: IntFieldUpdateOperationsInput | number
    progressMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    costCredits?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutRunsNestedInput
  }

  export type WorkflowRunUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    progress?: IntFieldUpdateOperationsInput | number
    progressMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    costCredits?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    progress?: IntFieldUpdateOperationsInput | number
    progressMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    costCredits?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLedgerUpdateWithoutUserInput = {
    change?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLedgerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    change?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditLedgerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    change?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeOrderUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credits?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeOrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credits?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeOrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credits?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunCreateManyWorkflowInput = {
    id?: number
    userId: string
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RunStatus
    progress?: number
    progressMessage?: string | null
    errorMessage?: string | null
    costCredits: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowRunUpdateWithoutWorkflowInput = {
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    progress?: IntFieldUpdateOperationsInput | number
    progressMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    costCredits?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRunsNestedInput
  }

  export type WorkflowRunUncheckedUpdateWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    progress?: IntFieldUpdateOperationsInput | number
    progressMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    costCredits?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunUncheckedUpdateManyWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    params?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    progress?: IntFieldUpdateOperationsInput | number
    progressMessage?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    costCredits?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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