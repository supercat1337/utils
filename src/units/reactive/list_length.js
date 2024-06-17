// @ts-check

/**
 * Binds the length of a reactive collection to the element's "innerText" property
 * @param {HTMLElement} element 
 * @param { import("@supercat1337/store").TypeCollection} reactive_item 
 * @param {(value:any)=>string} [custom_value_converter] 
 * @param {number} [debounce_time=30] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToListLength(reactive_item, element, custom_value_converter, debounce_time = 30){

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
