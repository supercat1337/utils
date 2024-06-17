// @ts-check

/** @typedef {{task_id: string; text:string; done:boolean}} ItemData */

class TaskService {
    #max_id = 0;

    /** @type {Map<string, ItemData>}  */
    #tasks = new Map;

    /**
     * @param {{text:string; done:boolean}} data 
     */
    add(data) {
        let task_id = String(++this.#max_id);
        let value = { ...data, task_id };
        this.#tasks.set(task_id, value);
        return value;
    }

    requestData() {
        return Array.from(this.#tasks.values());
    }

    /**
     * @param {string} task_id 
     */
    delete(task_id) {
        if (!this.#tasks.has(task_id)) {
            return this.#tasks.delete(task_id);
        }

        return false;
    }

    /**
     * @param {ItemData} task 
     */
    update(task) {
        if (!this.#tasks.has(task.task_id)) return;
        this.#tasks.set(task.task_id, task);
    }
}

export {TaskService};