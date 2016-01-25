/**
 * Name: Lior Elrom
 * Date: 1/23/16
 * Time: 7:10 PM
 */

'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import selectBookAction from '../actions/selectBookAction';

class BookList extends Component {

    onBookSelected(book) {
        const { selectBookAction } = this.props;
        selectBookAction(book);
    }

    renderBooks() {
        const { books } = this.props;
        return books.map((book, key) =>
            <li
                key={`book-${key}`}
                className="list-group-item"
                onClick={this.onBookSelected.bind(this, book)}
            >
                {book.title}
            </li>
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

const mapStateToProps = (state) => {
    const { books } = state;
    return {
        books
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectBookAction }, dispatch);
};

// promote a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
