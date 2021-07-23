import React from 'react';
import Tablefield from "./TableField";
function Table({ books, removeBook, editbook }) {
    return (
        <div className="table">
            <div className="tableHeading">
                <Tablefield fieldname="Title" />
                <Tablefield fieldname="Author" />
                <Tablefield fieldname="Isbn Number" />
                <Tablefield fieldname="Settings" />
            </div>
            {books.map((book) => (
                <div key={book.bookId} className="tableRow">
                    <Tablefield fieldname={book.bookTitle} />
                    <Tablefield fieldname={book.bookAuthor} />
                    <Tablefield fieldname={book.bookIsbn} />
                    <Tablefield settingsfield removeBook={() => removeBook(book.bookId)} editbook={() => { editbook(book) }} />
                </div>
            ))}
        </div>
    )
}
export default Table