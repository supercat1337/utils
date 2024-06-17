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
export function getListItem(element, attr_name) {
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
export function getListItemIndex(element) {
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
export function bindToList(reactive_item, list_element, item_value_setter, element_item_creator) {

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

