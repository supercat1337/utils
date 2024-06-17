// @ts-check 


import { Store } from "@supercat1337/store";

import { bindToText } from "../../units/text.js";
import { bindToHtml } from "../../units/html.js";

var counter_element = /** @type {HTMLElement} */ (document.querySelector("#counter_value"));
var square_element = /** @type {HTMLElement} */ (document.querySelector("#square_value"));
var source_element = /** @type {HTMLElement} */ (document.querySelector("#source_value"));

var button_dec = document.querySelector("#dec_button");
var button_inc = document.querySelector("#inc_button");

let store = new Store();

let counter = store.createAtom(0);

let square = store.createComputed(() => {
    return counter.value * counter.value;
});

button_dec?.addEventListener("click", () => {
    counter.value--;
});

button_inc?.addEventListener("click", () => {
    counter.value++;
});

bindToText(counter, source_element);
bindToText(square, square_element);
bindToHtml(counter, counter_element, (value) => `<strong>${value}</strong>`);
