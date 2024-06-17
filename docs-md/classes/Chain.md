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

dist/index.esm.d.ts:67

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

dist/index.esm.d.ts:24

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

dist/index.esm.d.ts:34

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

dist/index.esm.d.ts:14

## Accessors

### abortController

> `get` **abortController**(): `AbortController`

#### Returns

`AbortController`

#### Source

dist/index.esm.d.ts:50

***

### store

> `get` **store**(): `Store`

#### Returns

`Store`

#### Source

dist/index.esm.d.ts:49

## Methods

### cancel()

> **cancel**(): `void`

#### Returns

`void`

#### Source

dist/index.esm.d.ts:59

***

### complete()

> **complete**(`return_value`?): `void`

#### Parameters

• **return\_value?**: `any`

#### Returns

`void`

#### Source

dist/index.esm.d.ts:65

***

### getCtx()

> **getCtx**(): `void`

#### Returns

`void`

#### Source

dist/index.esm.d.ts:66

***

### run()

> **run**(`ctx`?): `Promise`\<`any`\>

#### Parameters

• **ctx?**

#### Returns

`Promise`\<`any`\>

#### Source

dist/index.esm.d.ts:56

***

### then()

> **then**(`task`): `this`

#### Parameters

• **task**: [`Task`](../type-aliases/Task.md)

#### Returns

`this`

#### Source

dist/index.esm.d.ts:48
