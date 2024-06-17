export type TypeItemValueSetter = (item_element: HTMLElement, index: number, value: any, old_value: any, length: number) => void;
export type TypeItemCreator = (item_element?: HTMLElement) => HTMLElement;
export type Task = (previous_result: any, ctx: {
    [key: string]: any;
}, chain: Chain) => any;
/** @typedef {(previous_result:any, ctx:{[key:string]:any}, chain:Chain)=>any} Task */
/**
 * Creates a concurrency chain instance
 *
 * @export
 * @class Chain
 */
export class Chain {
    returnValue: {
        value: any;
        readonly name: string;
        subscribe(callback: (details: import("@supercat1337/store").UpdateEventDetails, store: Store) => void, debounce_time?: number): import("@supercat1337/store").Unsubscriber;
        clearSubscribers(): void;
        hasSubscribers(): boolean;
        setCompareFunction(func_or_null: (a: any, b: any, item_name: string, property: string) => boolean): boolean;
        readonly store: Store;
        "__#2@#private": any;
    };
    completedSuccessfully: {
        value: any;
        readonly name: string;
        subscribe(callback: (details: import("@supercat1337/store").UpdateEventDetails, store: Store) => void, debounce_time?: number): import("@supercat1337/store").Unsubscriber;
        clearSubscribers(): void;
        hasSubscribers(): boolean;
        setCompareFunction(func_or_null: (a: any, b: any, item_name: string, property: string) => boolean): boolean;
        readonly store: Store;
        "__#2@#private": any;
    };
    isRunning: {
        value: any;
        readonly name: string;
        subscribe(callback: (details: import("@supercat1337/store").UpdateEventDetails, store: Store) => void, debounce_time?: number): import("@supercat1337/store").Unsubscriber;
        clearSubscribers(): void;
        hasSubscribers(): boolean;
        setCompareFunction(func_or_null: (a: any, b: any, item_name: string, property: string) => boolean): boolean;
        readonly store: Store;
        "__#2@#private": any;
    };
    /**
     *
     * @param {Task} task
     */
    then(task: Task): this;
    get store(): Store;
    get abortController(): AbortController;
    /**
     *
     * @param {{[key:string]:any}} [ctx]
     * @returns {Promise<any>}
     */
    run(ctx?: {
        [key: string]: any;
    }): Promise<any>;
    cancel(): void;
    /**
     *
     * @param {*} [return_value]
     * @returns
     */
    complete(return_value?: any): void;
    getCtx(): void;
    #private;
}
/**
 * Execute callback after the DOM is loaded
 * @param {()=>void} callback
 */
export function DOMReady(callback: () => void): void;
/**
 * Binds the value of a reactive variable to the element's attribute
 * @param {HTMLElement} element
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item
 * @param {string} attribute_name
 * @param {(value:any)=>string} [custom_value_converter]
 * @param {number} [debounce_time=30]
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToAttr(reactive_item: import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed, element: HTMLElement, attribute_name: string, custom_value_converter?: (value: any) => string, debounce_time?: number): import("@supercat1337/store").Unsubscriber;
/**
 * Synchronizes the value of a reactive variable to the checkbox's "checked" property and vice versa
 * @param {HTMLInputElement} element
 * @param { import("@supercat1337/store").TypeAtom } reactive_item
 * @param {number} [debounce_time = 30]
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToCheckboxChecked(reactive_item: import("@supercat1337/store").TypeAtom, element: HTMLInputElement, debounce_time?: number): import("@supercat1337/store").Unsubscriber;
/**
 * Binds the value of a reactive variable to the element's "className" property
 * @param {HTMLElement} element
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item
 * @param {(value:any)=>string} [custom_value_converter]
 * @param {number} [debounce_time=30]
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToClass(reactive_item: import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed, element: HTMLElement, custom_value_converter?: (value: any) => string, debounce_time?: number): import("@supercat1337/store").Unsubscriber;
/**
 * Binds the value of a reactive variable to the element's "disabled" property
 * @param {HTMLButtonElement|HTMLInputElement|HTMLFieldSetElement
 * |HTMLLinkElement|HTMLOptGroupElement|HTMLOptionElement
 * |HTMLSelectElement|HTMLStyleElement|HTMLTextAreaElement
 * |SVGStyleElement} element
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item
 * @param {(value:any)=>boolean} [custom_value_converter]
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToDisabled(reactive_item: import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed, element: HTMLButtonElement | HTMLInputElement | HTMLFieldSetElement | HTMLLinkElement | HTMLOptGroupElement | HTMLOptionElement | HTMLSelectElement | HTMLStyleElement | HTMLTextAreaElement | SVGStyleElement, custom_value_converter?: (value: any) => boolean): import("@supercat1337/store").Unsubscriber;
/**
 * Binds the value of a reactive variable to the element's "innerHTML" property
 * @param {HTMLElement} element
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item
 * @param {(value:any)=>string} [custom_value_converter]
 * @param {number} [debounce_time=30]
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToHtml(reactive_item: import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed, element: HTMLElement, custom_value_converter?: (value: any) => string, debounce_time?: number): import("@supercat1337/store").Unsubscriber;
/**
 * Synchronizes the value of a reactive variable to the input's "value" property and vice versa
 * @param {HTMLInputElement|HTMLTextAreaElement} element
 * @param { import("@supercat1337/store").TypeAtom } reactive_item
 * @param {number} [debounce_time = 30]
 * @param {boolean} [lazy=false]
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToInputValue(reactive_item: import("@supercat1337/store").TypeAtom, element: HTMLInputElement | HTMLTextAreaElement, debounce_time?: number, lazy?: boolean): import("@supercat1337/store").Unsubscriber;
/**
 * Binds the array-value of a reactive collection to the element
 * @param {HTMLElement} list_element
 * @param { import("@supercat1337/store").TypeCollection} reactive_item
 * @param {TypeItemCreator} [element_item_creator]
 * @param {TypeItemValueSetter} item_value_setter
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToList(reactive_item: import("@supercat1337/store").TypeCollection, list_element: HTMLElement, item_value_setter: TypeItemValueSetter, element_item_creator?: TypeItemCreator): import("@supercat1337/store").Unsubscriber;
/**
 * Binds the length of a reactive collection to the element's "innerText" property
 * @param {HTMLElement} element
 * @param { import("@supercat1337/store").TypeCollection} reactive_item
 * @param {(value:any)=>string} [custom_value_converter]
 * @param {number} [debounce_time=30]
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToListLength(reactive_item: import("@supercat1337/store").TypeCollection, element: HTMLElement, custom_value_converter?: (value: any) => string, debounce_time?: number): import("@supercat1337/store").Unsubscriber;
/**
 * Binds the value of a reactive variable to the element's property
 * @param {HTMLElement} element
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item
 * @param {string} property_name
 * @param {(value:any)=>any} [custom_value_converter]
 * @param {number} [debounce_time=30]
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToProperty(reactive_item: import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed, element: HTMLElement, property_name: string, custom_value_converter?: (value: any) => any, debounce_time?: number): import("@supercat1337/store").Unsubscriber;
/**
 * Binds the value of a reactive variable to the element's visibility
 * @param {HTMLElement} element
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item
 * @param {(value:any)=>boolean} [custom_value_converter]
 * @param {number} [debounce_time=30]
 * @param {string} [hide_class_name="d-none"]
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToShow(reactive_item: import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed, element: HTMLElement, custom_value_converter?: (value: any) => boolean, debounce_time?: number, hide_class_name?: string): import("@supercat1337/store").Unsubscriber;
/**
 * Binds the value of a reactive variable to the element's "innerText" property
 * @param {HTMLElement} element
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed } reactive_item
 * @param {(value:any)=>string} [custom_value_converter]
 * @param {number} [debounce_time=30]
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToText(reactive_item: import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed, element: HTMLElement, custom_value_converter?: (value: any) => string, debounce_time?: number): import("@supercat1337/store").Unsubscriber;
/**
 * Returns singleton version of function fetch
 * @returns
 */
export function createSingletonFetch(): (resource: RequestInfo | URL, options?: RequestInit) => Promise<Response>;
/**
 * Escape string for use in HTML
 * @param {string} text
 * @returns
 */
export function escapeHtml(text: string): string;
/**
 * A version of the fetch function that allows you to specify the number of retries if the connection is lost
 * @param {RequestInfo | URL} url
 * @param {RequestInit} fetchOptions
 * @param {number} delay
 * @param {number} tries
 * @returns {Promise<Response>}
 */
export function fetchRetry(url: RequestInfo | URL, fetchOptions?: RequestInit, delay?: number, tries?: number): Promise<Response>;
/**
 * Compares two objects and returns information about their differences
 * @template {{[key:string]:any}} T
 * @param {T} new_object
 * @param {any} old_object
 * @param {(a:any, b:any)=>boolean} [custom_compare_function]
 * @returns {{[key in keyof T]:boolean}}
 */
export function getDiffs<T extends {
    [key: string]: any;
}>(new_object: T, old_object: any, custom_compare_function?: (a: any, b: any) => boolean): { [key in keyof T]: boolean; };
/**
 * Returns the list item element by child node
 * @param {HTMLElement} element
 * @param {string} [attr_name]
 */
export function getListItem(element: HTMLElement, attr_name?: string): Element;
/**
 * Returns the index of the list item element
 * @param {HTMLElement} element
 * @returns {number}
 */
export function getListItemIndex(element: HTMLElement): number;
/**
 * An optimization used to speed up consecutive function calls by caching the result of calls with identical input
 * @template {(...args)=>any} T
 * @param {T} func
 * @returns {T}
 */
export function memoize<T extends (...args: any[]) => any>(func: T): T;
/**
 * Returns an object of child elements containing the ref attribute
 * @param {Node} root_element
 */
export function selectRefs(root_element: Node): {
    [key: string]: HTMLElement;
};
/**
 *
 * @param {Node} root_element
 * @returns { {refs: {[key:string]:HTMLElement}, scopes: {[key:string]:HTMLElement} } }
 */
export function selectRefsExtended(root_element: Node): {
    refs: {
        [key: string]: HTMLElement;
    };
    scopes: {
        [key: string]: HTMLElement;
    };
};
/**
 *
 * @param {Node} root_element
 * @param {(currentElement:HTMLElement)=>void} callback
 */
export function walkDomScope(root_element: Node, callback: (currentElement: HTMLElement) => void): void;
import { Store } from '@supercat1337/store';
//# sourceMappingURL=index.esm.d.ts.map