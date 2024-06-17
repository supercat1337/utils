// @ts-check

/**
 * Binds the value of a reactive variable to the element's "innerText" property
 * @param {HTMLElement} element 
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed } reactive_item 
 * @param {(value:any)=>string} [custom_value_converter] 
 * @param {number} [debounce_time=30] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToText(reactive_item, element, custom_value_converter, debounce_time = 30) {

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
