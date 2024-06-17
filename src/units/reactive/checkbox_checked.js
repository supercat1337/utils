// @ts-check

/**
 * Synchronizes the value of a reactive variable to the checkbox's "checked" property and vice versa
 * @param {HTMLInputElement} element 
 * @param { import("@supercat1337/store").TypeAtom } reactive_item 
 * @param {number} [debounce_time = 30] 
 * @returns {import("@supercat1337/store").Unsubscriber}
 */
export function bindToCheckboxChecked(reactive_item, element, debounce_time = 30){

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
