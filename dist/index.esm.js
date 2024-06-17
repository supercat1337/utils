import { debounce, Store } from '@supercat1337/store';

// @ts-check

/**
 * Binds the value of a reactive variable to the element's "innerText" property
 * @param {HTMLElement} element 
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed } reactive_item 
 * @param {(value:any)=>string} [custom_value_converter] 
 * @param {number} [debounce_time=30] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
function bindToText(reactive_item, element, custom_value_converter, debounce_time = 30) {

    function setter_atom(value) {
        var data = String(custom_value_converter ? custom_value_converter(value) : value);
        element.innerText = data;
    }

    function setter_collection(value) {
        var data = String(custom_value_converter ? custom_value_converter(value) : JSON.stringify(value));
        element.innerText = data;
    }

    if (reactive_item.store.isCollection(reactive_item.name)) {
        setter_collection(reactive_item.value);
    } else {
        setter_atom(reactive_item.value);
    }


    var unsubscriber = reactive_item.subscribe((details, _store) => {

        if (!element.isConnected) {
            unsubscriber();
            return;
        }

        let store = reactive_item.store;
        if (store.isCollection(reactive_item.name)) {
            setter_collection(reactive_item.value);
        } else {
            setter_atom(details.value);
        }
    }, debounce_time);

    return unsubscriber;
}

// @ts-check

/**
 * Binds the value of a reactive variable to the element's "innerHTML" property
 * @param {HTMLElement} element 
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item 
 * @param {(value:any)=>string} [custom_value_converter] 
 * @param {number} [debounce_time=30] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
function bindToHtml(reactive_item, element, custom_value_converter, debounce_time = 30){

    function setter(value){
        var data = custom_value_converter? custom_value_converter(value): value;
        element.innerHTML = String(data);
    }
    
    setter(reactive_item.value);

    var unsubscriber = reactive_item.subscribe((details)=>{
        
        if (!element.isConnected) {
            unsubscriber();
            return;
        }
        
        setter(details.value); 
    }, debounce_time);

    return unsubscriber;
}

// @ts-check

/**
 * Binds the value of a reactive variable to the element's "className" property
 * @param {HTMLElement} element 
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item 
 * @param {(value:any)=>string} [custom_value_converter] 
 * @param {number} [debounce_time=30] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
function bindToClass(reactive_item, element, custom_value_converter, debounce_time = 30){

    function setter(value){
        var data = String(custom_value_converter? custom_value_converter(value): value);
        element.className = data;
    }
    
    setter(reactive_item.value);

    var unsubscriber =  reactive_item.subscribe((details)=>{

        if (!element.isConnected) {
            unsubscriber();
            return;
        }

        setter(details.value); 
    }, debounce_time);

    return unsubscriber;
}

// @ts-check

/**
 * Binds the value of a reactive variable to the element's visibility
 * @param {HTMLElement} element 
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item 
 * @param {(value:any)=>boolean} [custom_value_converter] 
 * @param {number} [debounce_time=30] 
 * @param {string} [hide_class_name="d-none"] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
function bindToShow(reactive_item, element, custom_value_converter, debounce_time = 30, hide_class_name = "d-none") {

    function setter(value) {
        var show = !!(custom_value_converter ? custom_value_converter(value) : value);
        element.classList.toggle(hide_class_name, !show);
    }

    setter(reactive_item.value);

    var unsubscriber = reactive_item.subscribe((details) => {
        if (!element.isConnected) {
            unsubscriber();
            return;
        }

        setter(details.value);
    }, debounce_time);

    return unsubscriber;
}

// @ts-check

/**
 * Binds the value of a reactive variable to the element's attribute
 * @param {HTMLElement} element 
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item 
 * @param {string} attribute_name 
 * @param {(value:any)=>string} [custom_value_converter] 
 * @param {number} [debounce_time=30] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
function bindToAttr(reactive_item, element, attribute_name, custom_value_converter, debounce_time = 30) {

    function setter(value) {
        var data = String(custom_value_converter ? custom_value_converter(value) : value);
        element.setAttribute(attribute_name, data);
    }

    setter(reactive_item.value);

    var unsubscriber = reactive_item.subscribe((details) => {

        if (!element.isConnected) {
            unsubscriber();
            return;
        }

        setter(details.value);
    }, debounce_time);

    return unsubscriber;
}

// @ts-check

/**
 * Synchronizes the value of a reactive variable to the checkbox's "checked" property and vice versa
 * @param {HTMLInputElement} element 
 * @param { import("@supercat1337/store").TypeAtom } reactive_item 
 * @param {number} [debounce_time = 30] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
function bindToCheckboxChecked(reactive_item, element, debounce_time = 30){

    function setter(value){
        var data = value;

        if (element.value!=data) {
            element.checked = !!data;
        }
    }

    var callback = (e)=>{
        reactive_item.value = element.checked;
    };

    element.addEventListener("change", callback);
    
    var unsubscriber = reactive_item.subscribe((details)=>{

        if (!element.isConnected) {
            unsubscriber();
            return;
        }

        setter(details.value); 
    }, debounce_time);
    
    return ()=>{
        element.removeEventListener("change", callback);
        unsubscriber();   
    }
}

// @ts-check


/**
 * Synchronizes the value of a reactive variable to the input's "value" property and vice versa
 * @param {HTMLInputElement|HTMLTextAreaElement} element 
 * @param { import("@supercat1337/store").TypeAtom } reactive_item 
 * @param {number} [debounce_time = 30] 
 * @param {boolean} [lazy=false] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
function bindToInputValue(reactive_item, element, debounce_time = 30, lazy = false) {

    function setter(value) {
        var data = value;

        if (element.value != data) {
            element.value = data;
        }
    }

    var callback = debounce((e) => {
        if (element.type == "number") {
            reactive_item.value = Number(element.value);
        } else {
            reactive_item.value = element.value;
        }

    }, debounce_time);

    element.addEventListener(lazy ? "change" : "input", callback);

    setter(reactive_item.value);

    var unsubscriber = reactive_item.subscribe((details) => {

        if (!element.isConnected) {
            unsubscriber();
            return;
        }

        setter(details.value);
    }, debounce_time);

    return () => {
        element.removeEventListener("input", callback);
        unsubscriber();
    }
}

// @ts-check

const item_index_attr_name = "item-index";

/** 
 * @typedef {(item_element:HTMLElement, index:number, value:any, old_value:any, length:number)=>void} TypeItemValueSetter 
 * @typedef {(item_element?:HTMLElement)=>HTMLElement} TypeItemCreator
 * */

class ElementList {

    /** @type {HTMLElement} */
    #root_list_element

    /** @type {import("@supercat1337/store").TypeCollection} */
    #collection

    /** @type {TypeItemValueSetter} */
    #item_value_setter

    /** @type {TypeItemCreator} */
    #element_item_creator

    /** @type {HTMLElement|undefined} */
    #element_item_template

    /**
     * 
     * @param {import("@supercat1337/store").TypeCollection} collection 
     * @param {HTMLElement} element 
     * @param {TypeItemCreator|undefined} element_item_creator 
     * @param {TypeItemValueSetter} item_value_setter 
     */
    constructor(collection, element, element_item_creator, item_value_setter) {
        this.#collection = collection;
        this.#root_list_element = element;

        let list_item = this.#root_list_element.firstElementChild;

        if (list_item) {
            let list_item_template = /** @type {HTMLElement} */ (list_item.cloneNode(true));

            this.setElementItemTemplate(list_item_template);
        }

        list_item = null;

        /** @type {TypeItemCreator} */
        var creator;

        if (element_item_creator) {
            creator = () => {
                if (this.#element_item_template) {
                    var item_element = /** @type {HTMLElement} */ (this.#element_item_template?.cloneNode(true));
                    var result = element_item_creator(item_element);

                    return result || item_element;
                }
                else {
                    return element_item_creator();
                }
            };
        } else {
            if (!this.#element_item_template) {
                throw new Error(`element_item_creator is not set`);
            }

            creator = () => {
                var item_element = /** @type {HTMLElement} */ (this.#element_item_template?.cloneNode(true));
                return item_element;
            };
        }

        this.#element_item_creator = creator;

        this.setElementItemValueSetter(item_value_setter);

        this.#root_list_element.innerHTML = "";
        this.setData(this.#collection.value);
    }

    /**
     * @param {number} index 
     */
    removeElementListItem(index) {
        this.#root_list_element.children.item(index)?.remove();
    }

    removeLastElementListItem() {
        this.#root_list_element.lastElementChild?.remove();
    }

    /**
     * 
     * @param {number} index 
     * @param {any} value 
     * @param {any} old_value 
     * @returns 
     */
    setElementItemValue(index, value, old_value) {
        var list_item = /** @type {HTMLElement} */ (this.#root_list_element.children.item(index));
        if (!list_item) return;

        list_item.setAttribute(item_index_attr_name, String(index));
        this.#item_value_setter(list_item, index, value, old_value, this.#collection.value.length);
    }

    /**
     * 
     * @param {any[]} arr 
     */
    setData(arr) {
        this.setElementListSize(arr.length);

        for (let index = 0; index < arr.length; index++) {
            this.setElementItemValue(index, arr[index], undefined);
        }
    }

    /**
     * 
     * @param {TypeItemValueSetter} setter 
     */
    setElementItemValueSetter(setter) {
        this.#item_value_setter = setter;
    }

    /**
     * 
     * @param {HTMLElement} element_item_template 
     */
    setElementItemTemplate(element_item_template) {
        this.#element_item_template = element_item_template;
    }

    /**
     * 
     * @param {number} size 
     */
    setElementListSize(size) {
        const root_list = this.#root_list_element;
        const listItemsLength = root_list.children.length;

        if (listItemsLength === size) return;

        if (listItemsLength < size) {
            for (let i = listItemsLength; i < size; i++) {
                this.appendElementListItem(this.#collection.value[i], i);
            }
        } else {
            for (let i = size; i < listItemsLength; i++) {
                this.removeLastElementListItem();
            }
        }
    }

    /**
     * 
     * @param {any} value 
     * @param {number} index 
     */
    appendElementListItem(value, index) {
        var element_item = this.#element_item_creator(this.#element_item_template);
        this.#root_list_element.append(element_item);

        this.setElementItemValue(index, value, undefined);
    }

}

/**
 * Returns the list item element by child node
 * @param {HTMLElement} element 
 * @param {string} [attr_name] 
 */
function getListItem(element, attr_name) {
    var search_attr = attr_name || item_index_attr_name;
    var value = element.getAttribute(search_attr);
    if (value !== null) return element;

    return element.closest(`[${search_attr}]`);
}

/**
 * Returns the index of the list item element
 * @param {HTMLElement} element 
 * @returns {number}
 */
function getListItemIndex(element) {
    var list_item = getListItem(element);
    if (!list_item) return -1;

    var index = element.getAttribute(item_index_attr_name);
    if (index === null) return -1;

    return parseInt(index);
}

/**
 * Binds the array-value of a reactive collection to the element
 * @param {HTMLElement} list_element 
 * @param { import("@supercat1337/store").TypeCollection} reactive_item 
 * @param {TypeItemCreator} [element_item_creator] 
 * @param {TypeItemValueSetter} item_value_setter 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
function bindToList(reactive_item, list_element, item_value_setter, element_item_creator) {

    var element_list_wrapper = new ElementList(reactive_item, list_element, element_item_creator, item_value_setter);

    var unsubscriber = reactive_item.subscribe((details) => {

        if (!list_element.isConnected) {
            unsubscriber();
            return;
        }

        if (details.property === null) {
            element_list_wrapper.setData(details.value);
            return;
        }

        if (details.property == "length") {
            element_list_wrapper.setElementListSize(reactive_item.value.length);
            return;
        }

        var index = parseInt(details.property);

        if (isNaN(index)) return;

        if (details.eventType == "set") {
            element_list_wrapper.setElementItemValue(index, details.value, details.old_value);
        }

        if (details.eventType == "delete") {
            element_list_wrapper.removeElementListItem(index);
        }

    }, 0);

    return unsubscriber;
}

// @ts-check

/**
 * Binds the length of a reactive collection to the element's "innerText" property
 * @param {HTMLElement} element 
 * @param { import("@supercat1337/store").TypeCollection} reactive_item 
 * @param {(value:any)=>string} [custom_value_converter] 
 * @param {number} [debounce_time=30] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
function bindToListLength(reactive_item, element, custom_value_converter, debounce_time = 30){

    function setter(value){
        var data = custom_value_converter? custom_value_converter(value): value;
        element.innerText = data;
    }
    
    setter(reactive_item.value);

    var unsubscriber = reactive_item.subscribe((details)=>{

        if (!element.isConnected) {
            unsubscriber();
            return;
        }

        if (details.property == "length") {
            setter(details.value); 
        }

    }, debounce_time);

    return unsubscriber;
}

// @ts-check

/**
 * Binds the value of a reactive variable to the element's property
 * @param {HTMLElement} element 
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item 
 * @param {string} property_name 
 * @param {(value:any)=>any} [custom_value_converter] 
 * @param {number} [debounce_time=30] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
function bindToProperty(reactive_item, element, property_name, custom_value_converter, debounce_time = 30){

    function setter(value){
        var data = (custom_value_converter? custom_value_converter(value): value);
        element[property_name] = data;
    }
    
    setter(reactive_item.value);

    var unsubscriber = reactive_item.subscribe((details)=>{
        if (!element.isConnected) {
            unsubscriber();
            return;
        }

        setter(details.value); 
    }, debounce_time);

    return unsubscriber;
}

// @ts-check

/**
 * Compares two objects and returns information about their differences
 * @template {{[key:string]:any}} T
 * @param {T} new_object 
 * @param {any} old_object 
 * @param {(a:any, b:any)=>boolean} [custom_compare_function] 
 * @returns {{[key in keyof T]:boolean}}
 */
function getDiffs(new_object, old_object, custom_compare_function) {
    /** @type {{[key:string]:boolean}} */
    var result = {};

    for (let prop in new_object) {
        if (typeof prop != "string") continue;
        
        if (old_object && old_object.hasOwnProperty(prop)) {
            result[ prop] = custom_compare_function? custom_compare_function(new_object[prop], old_object[prop]) : new_object[prop] !== old_object[prop];
        }
        else {
            result[prop] = true;
        }
    }

    return /** @type {{[key in keyof T]:boolean}} */(result);
}

/**
 * Sleeps for n miliseconds
 * @param {number} ms 
 * @returns 
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * An optimization used to speed up consecutive function calls by caching the result of calls with identical input
 * @template {(...args)=>any} T
 * @param {T} func 
 * @returns {T}
 */
function memoize(func) {
    const cache = new Map(); // Use a Map to store cached results

    return /** @type {T} */ (function () {
        const args = Array.from(arguments);
        const key = JSON.stringify(args); // Create a unique key based on function arguments

        if (cache.has(key)) {
            // If the result is cached, return it
            return cache.get(key);
        } else {
            // Otherwise, compute the result and cache it
            const result = func.apply(this, args);
            cache.set(key, result);
            return result;
        }
    });
}

// @ts-check

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
function bindToDisabled(reactive_item, element, custom_value_converter){

    function setter(value){
        var data = !!(custom_value_converter? custom_value_converter(value): value);
        element.disabled = data;
    }
    
    setter(reactive_item.value);

    var unsubscriber =  reactive_item.subscribe((details)=>{

        if (!element.isConnected) {
            unsubscriber();
            return;
        }

        setter(details.value); 
    });

    return unsubscriber;
}

// @ts-check

/**
 * Returns singleton version of function fetch
 * @returns 
 */
function createSingletonFetch() {
    var is_loading = false;
    var controller = new AbortController();

    /**
     * @param {RequestInfo | URL} resource 
     * @param {RequestInit} [options] 
     * @returns {Promise<Response>}
     */
    async function f(resource, options) {

        if (is_loading) {
            controller.abort('Fetch request aborted');
            is_loading = false;
        }

        controller = new AbortController();
        /** @type {AbortSignal[]} */
        var signals = [controller.signal];

        if (options && options.signal) {
            signals.push(options.signal);
        }

        // @ts-ignore
        const combinedSignal = AbortSignal.any(signals);
        const _options = options === undefined
            ? { signal: combinedSignal }
            : Object.bind({}, options, { signal: combinedSignal });

        try {
            is_loading = true;
            let response = await fetch(resource, _options);
            is_loading = false;
            return response;
        } catch (e) {
            is_loading = false;
            throw e;
        }
    }

    return f;
}

/**
 * A version of the fetch function that allows you to specify the number of retries if the connection is lost
 * @param {RequestInfo | URL} url 
 * @param {RequestInit} fetchOptions 
 * @param {number} delay 
 * @param {number} tries 
 * @returns {Promise<Response>}
 */
async function fetchRetry(url, fetchOptions = {}, delay = 1000, tries = 5) {

    if (tries < 1) tries = 1;

    for (let i = 0; i < tries; i++) {
        try {
            let response = await fetch(url, fetchOptions);
            return response;
        }
        catch (e) {
            if (i == (tries - 1)) {
                throw e;
            }

            await sleep(delay);
        }
    }
    throw new Error;
}
/*

function example_1() {
    const controller = new AbortController();

    const signal = controller.signal;

    setTimeout(() => {
        controller.abort();
    }, 500);

    var q = createSingletonFetch();
    q('https://jsonplaceholder.typicode.com/posts', { signal })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            if (error.name === 'AbortError') {
                console.log('Fetch request aborted');
            } else {
                console.error('Fetch request failed:', error);
            }
        });
}

async function example_2() {
    var f = createSingletonFetch();

    async function getText() {
        try {
            var response = await f("https://jsonplaceholder.typicode.com/posts");
            var text = await response.text();
            console.log(text);
            return text;
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }

    var p = Promise.all([getText(), getText(), getText(), getText(), getText(), getText(), getText()]);

    await p;
}

*/

//fetch("https://jsonplaceholder.typicode.com/posts").then()

// @ts-check


/** @typedef {(previous_result:any, ctx:{[key:string]:any}, chain:Chain)=>any} Task */

/**
 * Creates a concurrency chain instance
 *
 * @export
 * @class Chain
 */
class Chain {

    /** @type {Task[]} */
    #tasks = []
    /** @type {AbortController} */
    #abortController = new AbortController;

    #store = new Store;

    returnValue = this.#store.createAtom(null);
    completedSuccessfully = this.#store.createAtom(false);
    isRunning = this.#store.createAtom(false);

    #ctx = {}

    /**
     * 
     * @param {Task} task 
     */
    then(task) {
        this.#tasks.push(task);
        return this;
    }

    get store () {
        return this.#store;
    }

    get abortController() {
        return this.#abortController;
    }

    /**
     * 
     * @param {{[key:string]:any}} [ctx] 
     * @returns {Promise<any>}
     */
    async run(ctx) {
        ctx = ctx || {};

        if (this.isRunning.value) {
            this.#abortController.abort();

            while (this.isRunning.value) {
                await sleep(50);
            }
        }

        this.#abortController = new AbortController;
        this.isRunning.value = true;
        var previous_result = undefined;

        this.completedSuccessfully.value = false;
        this.returnValue.value = null;

        var i = 0;
        this.#ctx = ctx;

        while (this.#tasks[i]) {

            if (this.#abortController.signal.aborted) {
                this.isRunning.value = false;
                return null;
            }

            try {
                previous_result = await this.#tasks[i](previous_result, ctx, this);
            }
            catch (e) {
                this.isRunning.value = false;

                if (e.name == "Complete") {
                    return this.returnValue.value;
                }

                if (e.name == "Cancel") {
                    return null;
                }

                throw e;
            }

            i++;
        }

        this.isRunning.value = false;
        this.completedSuccessfully.value = true;
        this.returnValue.value = previous_result;

        return previous_result;
    }

    cancel() {
        if (this.isRunning.value) {
            this.#abortController.abort();

            this.returnValue.value = null;
            this.completedSuccessfully.value = false;

            let error = new Error;
            error.name = "Cancel";
            throw error;
        }
    }

    /**
     * 
     * @param {*} [return_value] 
     * @returns 
     */
    complete(return_value) {
        if (this.isRunning.value) {
            this.#abortController.abort();

            this.returnValue.value = return_value;
            this.completedSuccessfully.value = true;

            let error = new Error;
            error.name = "Complete";
            throw error;
        }
    }

    getCtx() {
        this.#ctx;
    }
}

// @ts-check

/** @module DOM */

/**
 * Execute callback after the DOM is loaded
 * @param {()=>void} callback 
 */
function DOMReady(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
}
/**
 * 
 * @param {Node} root_element 
 * @returns { {refs: {[key:string]:HTMLElement}, scopes: {[key:string]:HTMLElement} } }
 */
function selectRefsExtended(root_element) {
    
    /** @type {{[key:string]:HTMLElement}} */
    var refs = {
        "root": /** @type {HTMLElement} */ (root_element)
    };

    /** @type {{[key:string]:HTMLElement}} */
    var scopes = {};

    /**
     * 
     * @param {HTMLElement} currentNode 
     */
    function callback(currentNode) {
        let ref_name = currentNode.getAttribute("ref");

        if (ref_name) {
            refs[ref_name] = currentNode;
        }

        if (currentNode == root_element) return;

        let ref_scope_name = currentNode.getAttribute("ref-scope");

        if (ref_scope_name) {
            scopes[ref_scope_name] = currentNode;
        }

    }

    walkDomScope(root_element, callback);

    return { refs, scopes };
}

/**
 * Returns an object of child elements containing the ref attribute
 * @param {Node} root_element 
 */
function selectRefs(root_element) {
    /** @type {{[key:string]:HTMLElement}} */
    var refs = {
        "root": /** @type {HTMLElement} */ (root_element)
    };

    /**
     * 
     * @param {HTMLElement} currentNode 
     */
    function callback(currentNode) {
        let ref_name = currentNode.getAttribute("ref");

        if (ref_name) {
            refs[ref_name] = currentNode;
        }

    }

    walkDomScope(root_element, callback);
    return refs;
}

/**
 * 
 * @param {Node} root_element 
 * @param {(currentElement:HTMLElement)=>void} callback 
 */
function walkDomScope(root_element, callback) {
    /**
     * 
     * @param {Node} _node 
     * @returns 
     */
    function scope_filter(_node) {
        var node = /** @type {Element} */ (_node);

        if (node.parentElement && node.parentElement.hasAttribute("ref-scope") && node.parentElement != root_element) {
            return NodeFilter.FILTER_REJECT
        }

        return NodeFilter.FILTER_ACCEPT
    }

    const tw = document.createTreeWalker(root_element, NodeFilter.SHOW_ELEMENT, scope_filter);

    var currentNode;

    while (currentNode = /** @type {HTMLElement} */ (tw.nextNode())) {
        callback(currentNode);
    }

}

// @ts-check
/**
 * Escape string for use in HTML
 * @param {string} text 
 * @returns 
 */
function escapeHtml(text) {
    return (text + "").replace(/[\u00A0-\u9999<>\&"']/g, function (i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
}

export { Chain, DOMReady, bindToAttr, bindToCheckboxChecked, bindToClass, bindToDisabled, bindToHtml, bindToInputValue, bindToList, bindToListLength, bindToProperty, bindToShow, bindToText, createSingletonFetch, escapeHtml, fetchRetry, getDiffs, getListItem, getListItemIndex, memoize, selectRefs, selectRefsExtended, walkDomScope };
