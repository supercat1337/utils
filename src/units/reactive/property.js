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
export function bindToProperty(reactive_item, element, property_name, custom_value_converter, debounce_time = 30){

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
