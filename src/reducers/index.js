/**
 * User: liormb
 * Date: 1/23/16
 * Time: 7:00 PM
 */

'use strict';

import { combineReducers } from 'redux';
import books from './booksReducer';

export default combineReducers({
    books
});
