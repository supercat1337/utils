// @ts-check

/**
 * Compares two objects and returns information about their differences
 * @template {{[key:string]:any}} T
 * @param {T} new_object 
 * @param {any} old_object 
 * @param {(a:any, b:any)=>boolean} [custom_compare_function] 
 * @returns {{[key in keyof T]:boolean}}
 */
export function getDiffs(new_object, old_object, custom_compare_function) {
    /** @type {{[key:string]:boolean}} */
    var result = {};

    for (let prop in new_object) {
        if (typeof prop != "string") continue;
        
        if (old_object && old_object.hasOwnProperty(prop)) {
            result[ prop] = custom_compare_function? custom_compare_function(new_object[prop], old_object[prop]) : new_object[prop] !== old_object[prop];
        }
        else {
            result[prop] = true;
        }
    }

    return /** @type {{[key in keyof T]:boolean}} */(result);
}

/**
 * Sleeps for n miliseconds
 * @param {number} ms 
 * @returns 
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * An optimization used to speed up consecutive function calls by caching the result of calls with identical input
 * @template {(...args)=>any} T
 * @param {T} func 
 * @returns {T}
 */
export function memoize(func) {
    const cache = new Map(); // Use a Map to store cached results

    return /** @type {T} */ (function () {
        const args = Array.from(arguments);
        const key = JSON.stringify(args); // Create a unique key based on function arguments

        if (cache.has(key)) {
            // If the result is cached, return it
            return cache.get(key);
        } else {
            // Otherwise, compute the result and cache it
            const result = func.apply(this, args);
            cache.set(key, result);
            return result;
        }
    });
}
