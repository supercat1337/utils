[**@supercat1337/utils**](../README.md) • **Docs**

***

[@supercat1337/utils](../README.md) / Chain

# Class: Chain

Creates a concurrency chain instance

## Export

Chain

## Constructors

### new Chain()

> **new Chain**(): [`Chain`](Chain.md)

#### Returns

[`Chain`](Chain.md)

## Properties

### #private

> `private` **#private**: `any`

#### Source

[dist/index.esm.d.ts:67](https://github.com/supercat1337/utils/blob/29436ec24bee9f2e47444ecc42beedb601148283/dist/index.esm.d.ts#L67)

***

### completedSuccessfully

> **completedSuccessfully**: `object`

#### \_\_#2@#private

> **\_\_#2@#private**: `any`

#### name

> `readonly` **name**: `string`

#### store

> `readonly` **store**: `Store`

#### value

> **value**: `any`

#### clearSubscribers()

##### Returns

`void`

#### hasSubscribers()

##### Returns

`boolean`

#### setCompareFunction()

##### Parameters

• **func\_or\_null**

##### Returns

`boolean`

#### subscribe()

##### Parameters

• **callback**

• **debounce\_time?**: `number`

##### Returns

`Unsubscriber`

#### Source

[dist/index.esm.d.ts:24](https://github.com/supercat1337/utils/blob/29436ec24bee9f2e47444ecc42beedb601148283/dist/index.esm.d.ts#L24)

***

### isRunning

> **isRunning**: `object`

#### \_\_#2@#private

> **\_\_#2@#private**: `any`

#### name

> `readonly` **name**: `string`

#### store

> `readonly` **store**: `Store`

#### value

> **value**: `any`

#### clearSubscribers()

##### Returns

`void`

#### hasSubscribers()

##### Returns

`boolean`

#### setCompareFunction()

##### Parameters

• **func\_or\_null**

##### Returns

`boolean`

#### subscribe()

##### Parameters

• **callback**

• **debounce\_time?**: `number`

##### Returns

`Unsubscriber`

#### Source

[dist/index.esm.d.ts:34](https://github.com/supercat1337/utils/blob/29436ec24bee9f2e47444ecc42beedb601148283/dist/index.esm.d.ts#L34)

***

### returnValue

> **returnValue**: `object`

#### \_\_#2@#private

> **\_\_#2@#private**: `any`

#### name

> `readonly` **name**: `string`

#### store

> `readonly` **store**: `Store`

#### value

> **value**: `any`

#### clearSubscribers()

##### Returns

`void`

#### hasSubscribers()

##### Returns

`boolean`

#### setCompareFunction()

##### Parameters

• **func\_or\_null**

##### Returns

`boolean`

#### subscribe()

##### Parameters

• **callback**

• **debounce\_time?**: `number`

##### Returns

`Unsubscriber`

#### Source

[dist/index.esm.d.ts:14](https://github.com/supercat1337/utils/blob/29436ec24bee9f2e47444ecc42beedb601148283/dist/index.esm.d.ts#L14)

## Accessors

### abortController

> `get` **abortController**(): `AbortController`

#### Returns

`AbortController`

#### Source

[dist/index.esm.d.ts:50](https://github.com/supercat1337/utils/blob/29436ec24bee9f2e47444ecc42beedb601148283/dist/index.esm.d.ts#L50)

***

### store

> `get` **store**(): `Store`

#### Returns

`Store`

#### Source

[dist/index.esm.d.ts:49](https://github.com/supercat1337/utils/blob/29436ec24bee9f2e47444ecc42beedb601148283/dist/index.esm.d.ts#L49)

## Methods

### cancel()

> **cancel**(): `void`

#### Returns

`void`

#### Source

[dist/index.esm.d.ts:59](https://github.com/supercat1337/utils/blob/29436ec24bee9f2e47444ecc42beedb601148283/dist/index.esm.d.ts#L59)

***

### complete()

> **complete**(`return_value`?): `void`

#### Parameters

• **return\_value?**: `any`

#### Returns

`void`

#### Source

[dist/index.esm.d.ts:65](https://github.com/supercat1337/utils/blob/29436ec24bee9f2e47444ecc42beedb601148283/dist/index.esm.d.ts#L65)

***

### getCtx()

> **getCtx**(): `void`

#### Returns

`void`

#### Source

[dist/index.esm.d.ts:66](https://github.com/supercat1337/utils/blob/29436ec24bee9f2e47444ecc42beedb601148283/dist/index.esm.d.ts#L66)

***

### run()

> **run**(`ctx`?): `Promise`\<`any`\>

#### Parameters

• **ctx?**

#### Returns

`Promise`\<`any`\>

#### Source

[dist/index.esm.d.ts:56](https://github.com/supercat1337/utils/blob/29436ec24bee9f2e47444ecc42beedb601148283/dist/index.esm.d.ts#L56)

***

### then()

> **then**(`task`): `this`

#### Parameters

• **task**: [`Task`](../type-aliases/Task.md)

#### Returns

`this`

#### Source

[dist/index.esm.d.ts:48](https://github.com/supercat1337/utils/blob/29436ec24bee9f2e47444ecc42beedb601148283/dist/index.esm.d.ts#L48)
