/**
 * Name: Lior Elrom
 * Date: 1/23/16
 * Time: 7:10 PM
 */

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderBooks() {
        const { books } = this.props;
        return books.map((book, key) =>
            <li className="list-group-item" key={`book-${key}`}>{book.title}</li>
        );
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderBooks()}
            </ul>
        );
    }
}

BookList.propTypes = {
    books: React.PropTypes.array.isRequired
};


// redux container
const mapStateToProps = (state) => {
    const { books } = state;
    return {
        books
    };
};

export default connect(mapStateToProps)(BookList);
