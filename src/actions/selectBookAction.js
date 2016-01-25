/**
 * User: liormb
 * Date: 1/24/16
 * Time: 9:46 AM
 */

'use strict';

export default function selectBook (book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}