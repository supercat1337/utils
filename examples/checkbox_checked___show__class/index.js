// @ts-check 

import { Store } from "@supercat1337/store";

import { bindToCheckboxChecked} from "../../units/checkbox_checked.js";
import { bindToShow } from "../../units/show.js";
import { bindToClass } from "../../units/className.js";


var show_checkbox = /** @type {HTMLInputElement} */ (document.querySelector("#show_checkbox"));
var make_danger_checkbox = /** @type {HTMLInputElement} */ (document.querySelector("#make_danger_checkbox"));

var block_element = /** @type {HTMLElement} */ (document.querySelector("#sample_div"));
var text_element = /** @type {HTMLElement} */ (document.querySelector("#sample_text"));

let store = new Store();

let show_atom = store.createAtom(false);
let danger_atom = store.createAtom(false);

bindToCheckboxChecked(show_atom, show_checkbox);
bindToShow(show_atom, block_element);

bindToCheckboxChecked(danger_atom, make_danger_checkbox);
bindToClass(danger_atom, text_element, (value) => value ? 'text-danger display-6' : '');
