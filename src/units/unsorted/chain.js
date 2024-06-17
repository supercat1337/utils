// @ts-check

import { Store } from "@supercat1337/store";
import { sleep } from "./helpers.js";

/** @typedef {(previous_result:any, ctx:{[key:string]:any}, chain:Chain)=>any} Task */

/**
 * Creates a concurrency chain instance
 *
 * @export
 * @class Chain
 */
export class Chain {

    /** @type {Task[]} */
    #tasks = []
    /** @type {AbortController} */
    #abortController = new AbortController;

    #store = new Store;

    returnValue = this.#store.createAtom(null);
    completedSuccessfully = this.#store.createAtom(false);
    isRunning = this.#store.createAtom(false);

    #ctx = {}

    /**
     * 
     * @param {Task} task 
     */
    then(task) {
        this.#tasks.push(task);
        return this;
    }

    get store () {
        return this.#store;
    }

    get abortController() {
        return this.#abortController;
    }

    /**
     * 
     * @param {{[key:string]:any}} [ctx] 
     * @returns {Promise<any>}
     */
    async run(ctx) {
        ctx = ctx || {};

        if (this.isRunning.value) {
            this.#abortController.abort();

            while (this.isRunning.value) {
                await sleep(50);
            }
        }

        this.#abortController = new AbortController;
        this.isRunning.value = true;
        var previous_result = undefined;

        this.completedSuccessfully.value = false;
        this.returnValue.value = null;

        var i = 0;
        this.#ctx = ctx;

        while (this.#tasks[i]) {

            if (this.#abortController.signal.aborted) {
                this.isRunning.value = false;
                return null;
            }

            try {
                previous_result = await this.#tasks[i](previous_result, ctx, this);
            }
            catch (e) {
                this.isRunning.value = false;

                if (e.name == "Complete") {
                    return this.returnValue.value;
                }

                if (e.name == "Cancel") {
                    return null;
                }

                throw e;
            }

            i++;
        }

        this.isRunning.value = false;
        this.completedSuccessfully.value = true;
        this.returnValue.value = previous_result;

        return previous_result;
    }

    cancel() {
        if (this.isRunning.value) {
            this.#abortController.abort();

            this.returnValue.value = null;
            this.completedSuccessfully.value = false;

            let error = new Error;
            error.name = "Cancel";
            throw error;
        }
    }

    /**
     * 
     * @param {*} [return_value] 
     * @returns 
     */
    complete(return_value) {
        if (this.isRunning.value) {
            this.#abortController.abort();

            this.returnValue.value = return_value;
            this.completedSuccessfully.value = true;

            let error = new Error;
            error.name = "Complete";
            throw error;
        }
    }

    getCtx() {
        this.#ctx;
    }
}