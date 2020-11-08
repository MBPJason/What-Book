import axios from "axios";
import React, { Component } from "react";
import BookData from "./BookData";

export default class Saved extends Component {
  state = {
    books: [],
    onSearch: false,
  };

  componentDidMount() {
    axios.get("/api/all").then((res) => {
      console.log(res);
      this.setState({
        books: res.data,
      });
    });
    console.log(this.state.books);
  }

  deleteBook = (bookId) => {
    axios.delete("/api/books/" + bookId);
  };

  viewBook = (link) => {
    let path = link;
    window.open(path);
  };

  render() {
    return (
      <div>
        <h2>Books</h2>
        <ul>
          {this.state.books.map((book) => (
            <BookData
              key={book._id}
              id={book._id}
              onSearch={this.state.onSearch}
              deleteBook={this.deleteBook}
              viewBook={this.viewBook}
              link={book.link}
              authors={book.author}
              title={book.title}
              description={book.description}
              thumbnail={book.image}
            />
          ))}
        </ul>
      </div>
    );
  }
}
