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
export function bindToShow(reactive_item, element, custom_value_converter, debounce_time = 30, hide_class_name = "d-none") {

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
