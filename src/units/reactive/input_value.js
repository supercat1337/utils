// @ts-check

import { debounce } from "@supercat1337/store";

/**
 * Synchronizes the value of a reactive variable to the input's "value" property and vice versa
 * @param {HTMLInputElement|HTMLTextAreaElement} element 
 * @param { import("@supercat1337/store").TypeAtom } reactive_item 
 * @param {number} [debounce_time = 30] 
 * @param {boolean} [lazy=false] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToInputValue(reactive_item, element, debounce_time = 30, lazy = false) {

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
