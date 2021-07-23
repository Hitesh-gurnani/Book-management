import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import Form from './Components/Form';
import Table from './Components/Table';
function App() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [currentbookid, setcurrentbookid] = useState(null);
  const [books, setbooks] = useState([{
    bookTitle: "Book1",
    bookAuthor: "Hitesh Gurnani",
    bookIsbn: "9918",
    bookId: uuidv4()
  }]);

  const isinput = () => {
    return (
      title.trim() === "" || author.trim() === "" || isbn.trim() === ""
    )
  }
  const clearinput = () => {
    setTitle('')
    setAuthor('')
    setIsbn('')
  }
  const addBook = () => {
    setbooks([...books, {
      bookTitle: title,
      bookAuthor: author,
      bookIsbn: isbn,
      bookId: uuidv4(),
    },])
  }
  const editbook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);
    setcurrentbookid(book.bookId);
  }
  const updatebook = () => {
    setbooks(books.map(book => book.bookId === currentbookid ? { bookTitle: title, bookAuthor: author, bookIsbn: isbn } : book))
  }
  const removeBook = (id) => {
    setbooks(books.filter(book => book.bookId !== id))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    clearinput();
    setcurrentbookid(null);
    if (isinput()) return;
    !currentbookid ? addBook() : updatebook();
    addBook()
  }
  const canceledit = () => {
    clearinput();
    setcurrentbookid(null);
  }
  return (

    <div className="App">
      <h1 class="animate__animated animate__flip animate__delay-1s" style={{ textAlign: 'center', color: "purple" }}>Book Management application</h1>
      <div className="conatiner">
        <Form title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} isbn={isbn} setIsbn={setIsbn} currentbookid={currentbookid} handleSubmit={handleSubmit} />
        <Table books={books} removeBook={removeBook} editbook={editbook} canceledit={canceledit} />
      </div>
    </div>
  );
}
export default App;
