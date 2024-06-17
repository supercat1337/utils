<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@supercat1337/utils](#supercat1337utils)
  - [Classes](#classes)
  - [Type Aliases](#type-aliases)
  - [Functions](#functions)
- [Classes](#classes-1)
  - [Class: Chain](#class-chain)
    - [Export](#export)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Accessors](#accessors)
    - [Methods](#methods)
- [Functions](#functions-1)
  - [Function: DOMReady()](#function-domready)
    - [Parameters](#parameters)
    - [Returns](#returns)
    - [Source](#source)
  - [Function: bindToAttr()](#function-bindtoattr)
    - [Parameters](#parameters-1)
    - [Returns](#returns-1)
    - [Source](#source-1)
  - [Function: bindToCheckboxChecked()](#function-bindtocheckboxchecked)
    - [Parameters](#parameters-2)
    - [Returns](#returns-2)
    - [Source](#source-2)
  - [Function: bindToClass()](#function-bindtoclass)
    - [Parameters](#parameters-3)
    - [Returns](#returns-3)
    - [Source](#source-3)
  - [Function: bindToDisabled()](#function-bindtodisabled)
    - [Parameters](#parameters-4)
    - [Returns](#returns-4)
    - [Source](#source-4)
  - [Function: bindToHtml()](#function-bindtohtml)
    - [Parameters](#parameters-5)
    - [Returns](#returns-5)
    - [Source](#source-5)
  - [Function: bindToInputValue()](#function-bindtoinputvalue)
    - [Parameters](#parameters-6)
    - [Returns](#returns-6)
    - [Source](#source-6)
  - [Function: bindToList()](#function-bindtolist)
    - [Parameters](#parameters-7)
    - [Returns](#returns-7)
    - [Source](#source-7)
  - [Function: bindToListLength()](#function-bindtolistlength)
    - [Parameters](#parameters-8)
    - [Returns](#returns-8)
    - [Source](#source-8)
  - [Function: bindToProperty()](#function-bindtoproperty)
    - [Parameters](#parameters-9)
    - [Returns](#returns-9)
    - [Source](#source-9)
  - [Function: bindToShow()](#function-bindtoshow)
    - [Parameters](#parameters-10)
    - [Returns](#returns-10)
    - [Source](#source-10)
  - [Function: bindToText()](#function-bindtotext)
    - [Parameters](#parameters-11)
    - [Returns](#returns-11)
    - [Source](#source-11)
  - [Function: createSingletonFetch()](#function-createsingletonfetch)
    - [Returns](#returns-12)
    - [Source](#source-12)
  - [Function: escapeHtml()](#function-escapehtml)
    - [Parameters](#parameters-12)
    - [Returns](#returns-13)
    - [Source](#source-13)
  - [Function: fetchRetry()](#function-fetchretry)
    - [Parameters](#parameters-13)
    - [Returns](#returns-14)
    - [Source](#source-14)
  - [Function: getDiffs()](#function-getdiffs)
    - [Type parameters](#type-parameters)
    - [Parameters](#parameters-14)
    - [Returns](#returns-15)
    - [Source](#source-15)
  - [Function: getListItem()](#function-getlistitem)
    - [Parameters](#parameters-15)
    - [Returns](#returns-16)
    - [Source](#source-16)
  - [Function: getListItemIndex()](#function-getlistitemindex)
    - [Parameters](#parameters-16)
    - [Returns](#returns-17)
    - [Source](#source-17)
  - [Function: memoize()](#function-memoize)
    - [Type parameters](#type-parameters-1)
    - [Parameters](#parameters-17)
    - [Returns](#returns-18)
    - [Source](#source-18)
  - [Function: selectRefs()](#function-selectrefs)
    - [Parameters](#parameters-18)
    - [Returns](#returns-19)
    - [Source](#source-19)
  - [Function: selectRefsExtended()](#function-selectrefsextended)
    - [Parameters](#parameters-19)
    - [Returns](#returns-20)
    - [Source](#source-20)
  - [Function: walkDomScope()](#function-walkdomscope)
    - [Parameters](#parameters-20)
    - [Returns](#returns-21)
    - [Source](#source-21)
- [Type Aliases](#type-aliases-1)
  - [Type alias: Task()](#type-alias-task)
    - [Parameters](#parameters-21)
    - [Returns](#returns-22)
    - [Source](#source-22)
  - [Type alias: TypeItemCreator()](#type-alias-typeitemcreator)
    - [Parameters](#parameters-22)
    - [Returns](#returns-23)
    - [Source](#source-23)
  - [Type alias: TypeItemValueSetter()](#type-alias-typeitemvaluesetter)
    - [Parameters](#parameters-23)
    - [Returns](#returns-24)
    - [Source](#source-24)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

**@supercat1337/utils** • **Docs**

***

# @supercat1337/utils

## Classes

- [Chain](#classeschainmd)

## Type Aliases

- [Task](#type-aliasestaskmd)
- [TypeItemCreator](#type-aliasestypeitemcreatormd)
- [TypeItemValueSetter](#type-aliasestypeitemvaluesettermd)

## Functions

- [DOMReady](#functionsdomreadymd)
- [bindToAttr](#functionsbindtoattrmd)
- [bindToCheckboxChecked](#functionsbindtocheckboxcheckedmd)
- [bindToClass](#functionsbindtoclassmd)
- [bindToDisabled](#functionsbindtodisabledmd)
- [bindToHtml](#functionsbindtohtmlmd)
- [bindToInputValue](#functionsbindtoinputvaluemd)
- [bindToList](#functionsbindtolistmd)
- [bindToListLength](#functionsbindtolistlengthmd)
- [bindToProperty](#functionsbindtopropertymd)
- [bindToShow](#functionsbindtoshowmd)
- [bindToText](#functionsbindtotextmd)
- [createSingletonFetch](#functionscreatesingletonfetchmd)
- [escapeHtml](#functionsescapehtmlmd)
- [fetchRetry](#functionsfetchretrymd)
- [getDiffs](#functionsgetdiffsmd)
- [getListItem](#functionsgetlistitemmd)
- [getListItemIndex](#functionsgetlistitemindexmd)
- [memoize](#functionsmemoizemd)
- [selectRefs](#functionsselectrefsmd)
- [selectRefsExtended](#functionsselectrefsextendedmd)
- [walkDomScope](#functionswalkdomscopemd)

# Classes


<a name="classeschainmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / Chain

## Class: Chain

Creates a concurrency chain instance

### Export

Chain

### Constructors

#### new Chain()

> **new Chain**(): [`Chain`](#classeschainmd)

##### Returns

[`Chain`](#classeschainmd)

### Properties

#### #private

> `private` **#private**: `any`

***

#### completedSuccessfully

> **completedSuccessfully**: `object`

##### \_\_#2@#private

> **\_\_#2@#private**: `any`

##### name

> `readonly` **name**: `string`

##### store

> `readonly` **store**: `Store`

##### value

> **value**: `any`

##### clearSubscribers()

###### Returns

`void`

##### hasSubscribers()

###### Returns

`boolean`

##### setCompareFunction()

###### Parameters

• **func\_or\_null**

###### Returns

`boolean`

##### subscribe()

###### Parameters

• **callback**

• **debounce\_time?**: `number`

###### Returns

`Unsubscriber`

***

#### isRunning

> **isRunning**: `object`

##### \_\_#2@#private

> **\_\_#2@#private**: `any`

##### name

> `readonly` **name**: `string`

##### store

> `readonly` **store**: `Store`

##### value

> **value**: `any`

##### clearSubscribers()

###### Returns

`void`

##### hasSubscribers()

###### Returns

`boolean`

##### setCompareFunction()

###### Parameters

• **func\_or\_null**

###### Returns

`boolean`

##### subscribe()

###### Parameters

• **callback**

• **debounce\_time?**: `number`

###### Returns

`Unsubscriber`

***

#### returnValue

> **returnValue**: `object`

##### \_\_#2@#private

> **\_\_#2@#private**: `any`

##### name

> `readonly` **name**: `string`

##### store

> `readonly` **store**: `Store`

##### value

> **value**: `any`

##### clearSubscribers()

###### Returns

`void`

##### hasSubscribers()

###### Returns

`boolean`

##### setCompareFunction()

###### Parameters

• **func\_or\_null**

###### Returns

`boolean`

##### subscribe()

###### Parameters

• **callback**

• **debounce\_time?**: `number`

###### Returns

`Unsubscriber`

### Accessors

#### abortController

> `get` **abortController**(): `AbortController`

##### Returns

`AbortController`

***

#### store

> `get` **store**(): `Store`

##### Returns

`Store`

### Methods

#### cancel()

> **cancel**(): `void`

##### Returns

`void`

***

#### complete()

> **complete**(`return_value`?): `void`

##### Parameters

• **return\_value?**: `any`

##### Returns

`void`

***

#### getCtx()

> **getCtx**(): `void`

##### Returns

`void`

***

#### run()

> **run**(`ctx`?): `Promise`\<`any`\>

##### Parameters

• **ctx?**

##### Returns

`Promise`\<`any`\>

***

#### then()

> **then**(`task`): `this`

##### Parameters

• **task**: [`Task`](#type-aliasestaskmd)

##### Returns

`this`

# Functions


<a name="functionsdomreadymd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / DOMReady

## Function: DOMReady()

> **DOMReady**(`callback`): `void`

Execute callback after the DOM is loaded

### Parameters

• **callback**

### Returns

`void`


<a name="functionsbindtoattrmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / bindToAttr

## Function: bindToAttr()

> **bindToAttr**(`reactive_item`, `element`, `attribute_name`, `custom_value_converter`?, `debounce_time`?): `Unsubscriber`

Binds the value of a reactive variable to the element's attribute

### Parameters

• **reactive\_item**: `Atom` \| `Computed`

• **element**: `HTMLElement`

• **attribute\_name**: `string`

• **custom\_value\_converter?**

• **debounce\_time?**: `number`

### Returns

`Unsubscriber`


<a name="functionsbindtocheckboxcheckedmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / bindToCheckboxChecked

## Function: bindToCheckboxChecked()

> **bindToCheckboxChecked**(`reactive_item`, `element`, `debounce_time`?): `Unsubscriber`

Synchronizes the value of a reactive variable to the checkbox's "checked" property and vice versa

### Parameters

• **reactive\_item**: `Atom`

• **element**: `HTMLInputElement`

• **debounce\_time?**: `number`

### Returns

`Unsubscriber`


<a name="functionsbindtoclassmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / bindToClass

## Function: bindToClass()

> **bindToClass**(`reactive_item`, `element`, `custom_value_converter`?, `debounce_time`?): `Unsubscriber`

Binds the value of a reactive variable to the element's "className" property

### Parameters

• **reactive\_item**: `Atom` \| `Computed`

• **element**: `HTMLElement`

• **custom\_value\_converter?**

• **debounce\_time?**: `number`

### Returns

`Unsubscriber`


<a name="functionsbindtodisabledmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / bindToDisabled

## Function: bindToDisabled()

> **bindToDisabled**(`reactive_item`, `element`, `custom_value_converter`?): `Unsubscriber`

Binds the value of a reactive variable to the element's "disabled" property

### Parameters

• **reactive\_item**: `Atom` \| `Computed`

• **element**: `HTMLLinkElement` \| `HTMLInputElement` \| `HTMLButtonElement` \| `HTMLFieldSetElement` \| `HTMLOptGroupElement` \| `HTMLOptionElement` \| `HTMLSelectElement` \| `HTMLStyleElement` \| `HTMLTextAreaElement` \| `SVGStyleElement`

• **custom\_value\_converter?**

### Returns

`Unsubscriber`


<a name="functionsbindtohtmlmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / bindToHtml

## Function: bindToHtml()

> **bindToHtml**(`reactive_item`, `element`, `custom_value_converter`?, `debounce_time`?): `Unsubscriber`

Binds the value of a reactive variable to the element's "innerHTML" property

### Parameters

• **reactive\_item**: `Atom` \| `Computed`

• **element**: `HTMLElement`

• **custom\_value\_converter?**

• **debounce\_time?**: `number`

### Returns

`Unsubscriber`


<a name="functionsbindtoinputvaluemd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / bindToInputValue

## Function: bindToInputValue()

> **bindToInputValue**(`reactive_item`, `element`, `debounce_time`?, `lazy`?): `Unsubscriber`

Synchronizes the value of a reactive variable to the input's "value" property and vice versa

### Parameters

• **reactive\_item**: `Atom`

• **element**: `HTMLInputElement` \| `HTMLTextAreaElement`

• **debounce\_time?**: `number`

• **lazy?**: `boolean`

### Returns

`Unsubscriber`


<a name="functionsbindtolistmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / bindToList

## Function: bindToList()

> **bindToList**(`reactive_item`, `list_element`, `item_value_setter`, `element_item_creator`?): `Unsubscriber`

Binds the array-value of a reactive collection to the element

### Parameters

• **reactive\_item**: `Collection`

• **list\_element**: `HTMLElement`

• **item\_value\_setter**: [`TypeItemValueSetter`](#type-aliasestypeitemvaluesettermd)

• **element\_item\_creator?**: [`TypeItemCreator`](#type-aliasestypeitemcreatormd)

### Returns

`Unsubscriber`


<a name="functionsbindtolistlengthmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / bindToListLength

## Function: bindToListLength()

> **bindToListLength**(`reactive_item`, `element`, `custom_value_converter`?, `debounce_time`?): `Unsubscriber`

Binds the length of a reactive collection to the element's "innerText" property

### Parameters

• **reactive\_item**: `Collection`

• **element**: `HTMLElement`

• **custom\_value\_converter?**

• **debounce\_time?**: `number`

### Returns

`Unsubscriber`


<a name="functionsbindtopropertymd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / bindToProperty

## Function: bindToProperty()

> **bindToProperty**(`reactive_item`, `element`, `property_name`, `custom_value_converter`?, `debounce_time`?): `Unsubscriber`

Binds the value of a reactive variable to the element's property

### Parameters

• **reactive\_item**: `Atom` \| `Computed`

• **element**: `HTMLElement`

• **property\_name**: `string`

• **custom\_value\_converter?**

• **debounce\_time?**: `number`

### Returns

`Unsubscriber`


<a name="functionsbindtoshowmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / bindToShow

## Function: bindToShow()

> **bindToShow**(`reactive_item`, `element`, `custom_value_converter`?, `debounce_time`?, `hide_class_name`?): `Unsubscriber`

Binds the value of a reactive variable to the element's visibility

### Parameters

• **reactive\_item**: `Atom` \| `Computed`

• **element**: `HTMLElement`

• **custom\_value\_converter?**

• **debounce\_time?**: `number`

• **hide\_class\_name?**: `string`

### Returns

`Unsubscriber`


<a name="functionsbindtotextmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / bindToText

## Function: bindToText()

> **bindToText**(`reactive_item`, `element`, `custom_value_converter`?, `debounce_time`?): `Unsubscriber`

Binds the value of a reactive variable to the element's "innerText" property

### Parameters

• **reactive\_item**: `Atom` \| `Computed`

• **element**: `HTMLElement`

• **custom\_value\_converter?**

• **debounce\_time?**: `number`

### Returns

`Unsubscriber`


<a name="functionscreatesingletonfetchmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / createSingletonFetch

## Function: createSingletonFetch()

> **createSingletonFetch**(): (`resource`, `options`?) => `Promise`\<`Response`\>

Returns singleton version of function fetch

### Returns

`Function`

#### Parameters

• **resource**: `RequestInfo` \| `URL`

• **options?**: `RequestInit`

#### Returns

`Promise`\<`Response`\>


<a name="functionsescapehtmlmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / escapeHtml

## Function: escapeHtml()

> **escapeHtml**(`text`): `string`

Escape string for use in HTML

### Parameters

• **text**: `string`

### Returns

`string`


<a name="functionsfetchretrymd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / fetchRetry

## Function: fetchRetry()

> **fetchRetry**(`url`, `fetchOptions`?, `delay`?, `tries`?): `Promise`\<`Response`\>

A version of the fetch function that allows you to specify the number of retries if the connection is lost

### Parameters

• **url**: `RequestInfo` \| `URL`

• **fetchOptions?**: `RequestInit`

• **delay?**: `number`

• **tries?**: `number`

### Returns

`Promise`\<`Response`\>


<a name="functionsgetdiffsmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / getDiffs

## Function: getDiffs()

> **getDiffs**\<`T`\>(`new_object`, `old_object`, `custom_compare_function`?): `{ [key in keyof T]: boolean }`

Compares two objects and returns information about their differences

### Type parameters

• **T** *extends* `object`

### Parameters

• **new\_object**: `T`

• **old\_object**: `any`

• **custom\_compare\_function?**

### Returns

`{ [key in keyof T]: boolean }`


<a name="functionsgetlistitemmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / getListItem

## Function: getListItem()

> **getListItem**(`element`, `attr_name`?): `Element`

Returns the list item element by child node

### Parameters

• **element**: `HTMLElement`

• **attr\_name?**: `string`

### Returns

`Element`


<a name="functionsgetlistitemindexmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / getListItemIndex

## Function: getListItemIndex()

> **getListItemIndex**(`element`): `number`

Returns the index of the list item element

### Parameters

• **element**: `HTMLElement`

### Returns

`number`


<a name="functionsmemoizemd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / memoize

## Function: memoize()

> **memoize**\<`T`\>(`func`): `T`

An optimization used to speed up consecutive function calls by caching the result of calls with identical input

### Type parameters

• **T** *extends* (...`args`) => `any`

### Parameters

• **func**: `T`

### Returns

`T`


<a name="functionsselectrefsmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / selectRefs

## Function: selectRefs()

> **selectRefs**(`root_element`): `object`

Returns an object of child elements containing the ref attribute

### Parameters

• **root\_element**: `Node`

### Returns

`object`


<a name="functionsselectrefsextendedmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / selectRefsExtended

## Function: selectRefsExtended()

> **selectRefsExtended**(`root_element`): `object`

### Parameters

• **root\_element**: `Node`

### Returns

`object`

#### refs

> **refs**: `object`

##### Index signature

 \[`key`: `string`\]: `HTMLElement`

#### scopes

> **scopes**: `object`

##### Index signature

 \[`key`: `string`\]: `HTMLElement`


<a name="functionswalkdomscopemd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / walkDomScope

## Function: walkDomScope()

> **walkDomScope**(`root_element`, `callback`): `void`

### Parameters

• **root\_element**: `Node`

• **callback**

### Returns

`void`

# Type Aliases


<a name="type-aliasestaskmd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / Task

## Type alias: Task()

> **Task**: (`previous_result`, `ctx`, `chain`) => `any`

### Parameters

• **previous\_result**: `any`

• **ctx**

• **chain**: [`Chain`](#classeschainmd)

### Returns

`any`


<a name="type-aliasestypeitemcreatormd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / TypeItemCreator

## Type alias: TypeItemCreator()

> **TypeItemCreator**: (`item_element`?) => `HTMLElement`

### Parameters

• **item\_element?**: `HTMLElement`

### Returns

`HTMLElement`


<a name="type-aliasestypeitemvaluesettermd"></a>

[**@supercat1337/utils**](#readmemd) • **Docs**

***

[@supercat1337/utils](#readmemd) / TypeItemValueSetter

## Type alias: TypeItemValueSetter()

> **TypeItemValueSetter**: (`item_element`, `index`, `value`, `old_value`, `length`) => `void`

### Parameters

• **item\_element**: `HTMLElement`

• **index**: `number`

• **value**: `any`

• **old\_value**: `any`

• **length**: `number`

### Returns

`void`