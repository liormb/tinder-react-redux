/**
 * Name: Lior Elrom
 * Date: 1/24/16
 * Time: 10:34 AM
 */

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    renderNoBookSelection() {
        return (
            <p>Select a book</p>
        );
    }

    renderActiveBook() {
        const { activeBook } = this.props;
        return (
            <div>
                <h5>Details for:</h5>
                <p>Title: <strong>{activeBook.title}</strong></p>
                <p>Pages: <strong>{activeBook.pages}</strong></p>
            </div>
        );
    }

    render() {
        const { activeBook } = this.props;
        return (
            <div>
                {activeBook ? this.renderActiveBook() : this.renderNoBookSelection()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { activeBook } = state;
    return {
        activeBook
    };
};

export default connect(mapStateToProps)(BookDetail);