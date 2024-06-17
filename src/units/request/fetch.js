// @ts-check
import { sleep } from "../unsorted/helpers.js";

/**
 * Returns singleton version of function fetch
 * @returns 
 */
export function createSingletonFetch() {
    var is_loading = false;
    var controller = new AbortController();

    /**
     * @param {RequestInfo | URL} resource 
     * @param {RequestInit} [options] 
     * @returns {Promise<Response>}
     */
    async function f(resource, options) {

        if (is_loading) {
            controller.abort('Fetch request aborted');
            is_loading = false;
        }

        controller = new AbortController();
        /** @type {AbortSignal[]} */
        var signals = [controller.signal];

        if (options && options.signal) {
            signals.push(options.signal);
        }

        // @ts-ignore
        const combinedSignal = AbortSignal.any(signals);
        const _options = options === undefined
            ? { signal: combinedSignal }
            : Object.bind({}, options, { signal: combinedSignal });

        try {
            is_loading = true;
            let response = await fetch(resource, _options);
            is_loading = false;
            return response;
        } catch (e) {
            is_loading = false;
            throw e;
        }
    }

    return f;
}

/**
 * A version of the fetch function that allows you to specify the number of retries if the connection is lost
 * @param {RequestInfo | URL} url 
 * @param {RequestInit} fetchOptions 
 * @param {number} delay 
 * @param {number} tries 
 * @returns {Promise<Response>}
 */
export async function fetchRetry(url, fetchOptions = {}, delay = 1000, tries = 5) {

    if (tries < 1) tries = 1;

    for (let i = 0; i < tries; i++) {
        try {
            let response = await fetch(url, fetchOptions);
            return response;
        }
        catch (e) {
            if (i == (tries - 1)) {
                throw e;
            }

            await sleep(delay);
        }
    }
    throw new Error;
}
/*

function example_1() {
    const controller = new AbortController();

    const signal = controller.signal;

    setTimeout(() => {
        controller.abort();
    }, 500);

    var q = createSingletonFetch();
    q('https://jsonplaceholder.typicode.com/posts', { signal })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            if (error.name === 'AbortError') {
                console.log('Fetch request aborted');
            } else {
                console.error('Fetch request failed:', error);
            }
        });
}

async function example_2() {
    var f = createSingletonFetch();

    async function getText() {
        try {
            var response = await f("https://jsonplaceholder.typicode.com/posts");
            var text = await response.text();
            console.log(text);
            return text;
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }

    var p = Promise.all([getText(), getText(), getText(), getText(), getText(), getText(), getText()]);

    await p;
}

*/

//fetch("https://jsonplaceholder.typicode.com/posts").then()
