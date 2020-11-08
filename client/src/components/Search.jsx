import React, { Component } from "react";
import axios from "axios";
import BookData from "./BookData";

export default class Search extends Component {
  state = {
    books: [],
    query: "",
  };

  componentDidMount() {
    let queryBooks = "Harry Potter";
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${queryBooks}`)
      .then((res) => {
        console.log(res);
        this.setState({
          books: res.data.items,
        });
      });
  }

  handleInputChange = (event) => {
    const bookName = event.target.value;

    this.setState({
      query: bookName,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.query) {
      let queryBooks = this.state.query;
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${queryBooks}`)
        .then((res) => {
          console.log(res);
          this.setState({
            books: res.data.items,
          });
        });
      console.log(this.state.books);
    } else {
      this.componentDidMount();
    }
  };

  saveBook = (bookId) => {

    const savedBookData = this.state.books.filter(book => {
        return book.id === bookId
    });

    const book = savedBookData[0].volumeInfo;

    console.log(book);

    axios.post("/api/save", {
        title: book.title,
        author: book.authors[0],
        description: book.description,
        image: book.imageLinks.thumbnail,
        link: book.infoLink
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err);
    })

    
    
  };

  render() {
    return (
      <div>
        <h2>Books</h2>
        <form>
          <input
            type='text'
            name='Book Search'
            value={this.state.query}
            onChange={this.handleInputChange}
            placeholder='Search for a book'
          />
          <button
            className='btn btn-text btn-success'
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
        <ul className='list-group'>
          {this.state.books.map((book) => (
            <BookData
              key={book.id}
              id={book.id}
              saveBook={this.saveBook}
              authors={book.volumeInfo.authors}
              title={book.volumeInfo.title}
              description={book.volumeInfo.description}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
            />
          ))}
        </ul>
      </div>
    );
  }
}
