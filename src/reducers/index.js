/**
 * User: liormb
 * Date: 1/23/16
 * Time: 7:00 PM
 */

'use strict';

import { combineReducers } from 'redux';

// reducers
import books from './booksReducer';
import activeBook from './activeBookReducer';

export default combineReducers({
    books,
    activeBook
});
