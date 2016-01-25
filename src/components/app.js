/**
 * User: liormb
 * Date: 1/23/16
 * Time: 7:00 PM
 */

'use strict';

import React, { Component } from 'react';
import BookList   from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default class App extends Component {

    render() {
        return (
            <div>
                <BookList />
                <BookDetail />
            </div>
        );
  }
}
