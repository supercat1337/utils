// @ts-check

/** @module DOM */

/**
 * Execute callback after the DOM is loaded
 * @param {()=>void} callback 
 */
export function DOMReady(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

/**
 * 
 * @param {Node} root_element 
 * @returns { {refs: {[key:string]:HTMLElement}, scopes: {[key:string]:HTMLElement} } }
 */
export function selectRefsExtended(root_element) {
    
    /** @type {{[key:string]:HTMLElement}} */
    var refs = {
        "root": /** @type {HTMLElement} */ (root_element)
    };

    /** @type {{[key:string]:HTMLElement}} */
    var scopes = {};

    /**
     * 
     * @param {HTMLElement} currentNode 
     */
    function callback(currentNode) {
        let ref_name = currentNode.getAttribute("ref");

        if (ref_name) {
            refs[ref_name] = currentNode;
        }

        if (currentNode == root_element) return;

        let ref_scope_name = currentNode.getAttribute("ref-scope");

        if (ref_scope_name) {
            scopes[ref_scope_name] = currentNode;
        }

    }

    walkDomScope(root_element, callback);

    return { refs, scopes };
}

/**
 * Returns an object of child elements containing the ref attribute
 * @param {Node} root_element 
 */
export function selectRefs(root_element) {
    /** @type {{[key:string]:HTMLElement}} */
    var refs = {
        "root": /** @type {HTMLElement} */ (root_element)
    };

    /**
     * 
     * @param {HTMLElement} currentNode 
     */
    function callback(currentNode) {
        let ref_name = currentNode.getAttribute("ref");

        if (ref_name) {
            refs[ref_name] = currentNode;
        }

    }

    walkDomScope(root_element, callback);
    return refs;
}

/**
 * 
 * @param {Node} root_element 
 * @param {(currentElement:HTMLElement)=>void} callback 
 */
export function walkDomScope(root_element, callback) {
    /**
     * 
     * @param {Node} _node 
     * @returns 
     */
    function scope_filter(_node) {
        var node = /** @type {Element} */ (_node);

        if (node.parentElement && node.parentElement.hasAttribute("ref-scope") && node.parentElement != root_element) {
            return NodeFilter.FILTER_REJECT
        }

        return NodeFilter.FILTER_ACCEPT
    }

    const tw = document.createTreeWalker(root_element, NodeFilter.SHOW_ELEMENT, scope_filter);

    var currentNode;

    while (currentNode = /** @type {HTMLElement} */ (tw.nextNode())) {
        callback(currentNode);
    }

}