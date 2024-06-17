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
export function bindToDisabled(reactive_item, element, custom_value_converter){

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
