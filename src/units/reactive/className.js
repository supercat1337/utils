// @ts-check

/**
 * Binds the value of a reactive variable to the element's "className" property
 * @param {HTMLElement} element 
 * @param { import("@supercat1337/store").TypeAtom | import("@supercat1337/store").TypeComputed} reactive_item 
 * @param {(value:any)=>string} [custom_value_converter] 
 * @param {number} [debounce_time=30] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToClass(reactive_item, element, custom_value_converter, debounce_time = 30){

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
