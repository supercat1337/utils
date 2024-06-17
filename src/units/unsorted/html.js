// @ts-check
/**
 * Escape string for use in HTML
 * @param {string} text 
 * @returns 
 */
export function escapeHtml(text) {
    return (text + "").replace(/[\u00A0-\u9999<>\&"']/g, function (i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
}