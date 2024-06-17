// @ts-check 

import { Store } from "@supercat1337/store";
import { bindToList, getListItemIndex, bindToText, getDiffs, bindToDisabled, bindToInputValue, selectRefs } from "../../index.js";
import { TaskService } from "./task_service.js";

// Model
const tasks_service = new TaskService;
for (let i = 1; i <= 50; i++) {
    tasks_service.add({text: `item ${i}`, done: false})
}

const store = new Store;
const todos_collection = store.createCollection([]);

/** @type {import("./task_service.js").ItemData[]} */
const todos_view = todos_collection.value;

const computed_length = store.createComputed(() => {
    return todos_collection.value.length;
});

const filter_input_atom = store.createAtom("");
const filter_input_not_empty = store.createComputed(()=>{
    return filter_input_atom.value.length > 0;
});

// View
const { root_list, add_todo_button, add_todo_input, filter_todo_input, list_length_span } = /** @type {{ root_list: HTMLElement, add_todo_button: HTMLButtonElement, add_todo_input: HTMLInputElement, filter_todo_input: HTMLInputElement, list_length_span: HTMLSpanElement, root: HTMLElement}}*/ (selectRefs(document.body));

function getTextAndClearInput() {
    var text = add_todo_input.value.trim();
    add_todo_input.value = "";

    return text;
}

// Presenter

/**
 * @param {Event|KeyboardEvent} e 
 */
function addTaskCallback(e) {
    if (e instanceof KeyboardEvent) {
        if (e.key != "Enter") return;
    }

    var todo_name = getTextAndClearInput();

    if (todo_name != "") {
        let task = tasks_service.add({ text: todo_name, done: false });
        todos_view.push(task);
    }
}

add_todo_button.addEventListener("click", addTaskCallback);
add_todo_input.addEventListener("keydown", addTaskCallback);

function filterTodos() {
    let filter_text = filter_todo_input.value;

    if (filter_text == "") {
        todos_collection.value = tasks_service.requestData();
    }
    else {
        let filtered_arr = tasks_service.requestData().filter((item) => item.text.includes(filter_text));
        todos_collection.value = filtered_arr;
    }
}

filter_todo_input.addEventListener("input", filterTodos);

/**
 * 
 * @param {HTMLElement} item_element 
 * @param {number} index 
 * @param {import("./task_service.js").ItemData} value 
 * @param {any} old_value 
 * @param {number} length 
 */
function setElementItemValue(item_element, index, value, old_value, length) {

    const { text, checkbox } = /** @type {{text:HTMLSpanElement, checkbox:HTMLInputElement}} */ (selectRefs(item_element));

    var diffs = getDiffs(value, old_value);

    if (diffs.text) {
        text.innerText = value.text;
    }

    if (diffs.done) {
        checkbox.checked = value.done;
        text.classList.toggle("text-decoration-line-through", value.done);
    }
}

/**
 * 
 * @param {HTMLElement} [item_element] 
 */
function initElementItem(item_element) {
    item_element = /** @type {HTMLElement} */ (item_element);

    const { delete_button, checkbox } = /** @type {{delete_button:HTMLButtonElement, checkbox:HTMLInputElement}} */ (selectRefs(item_element));

    delete_button.addEventListener("click", () => {
        var index = getListItemIndex(item_element);
        if (index == -1) return;

        let task = todos_view[index];
        tasks_service.delete(task.task_id);
        todos_view.splice(index, 1);
    });

    checkbox.addEventListener("change", () => {
        var index = getListItemIndex(item_element);
        if (index == -1) return;

        var task = { ...todos_view[index], done: checkbox.checked };
        tasks_service.update(task);
        todos_view[index] = task;
    })

    return item_element;
}

// Init
bindToText(computed_length, list_length_span);

bindToInputValue(filter_input_atom, filter_todo_input);
bindToDisabled(filter_input_not_empty, add_todo_button);
bindToDisabled(filter_input_not_empty, add_todo_input);

todos_collection.value = tasks_service.requestData();
bindToList(todos_collection, root_list, setElementItemValue, initElementItem);
