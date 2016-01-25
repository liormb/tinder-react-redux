/**
 * User: liormb
 * Date: 1/24/16
 * Time: 10:22 AM
 */

'use strict';

// state will be set to null if it's undefined (like when the app first run).
// undefined can't be return by a reducer.
export default (state = null, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'BOOK_SELECTED': return payload;
        default: return state;
    }
};