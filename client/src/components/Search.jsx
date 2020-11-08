import React, { Component } from "react";
import axios from "axios";
import BookData from "./BookData";

export default class Search extends Component {
  state = {
    books: [],
    query: "",
  };

  componentDidMount() {
    const Arr = [];
    const queryBooks = "Harry Potter";
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${queryBooks}`)
      .then((res) => {
        console.log(res);
        this.setState({
          books: res.data.items,
        });
      });
    console.log(Arr);
    console.log(this.state.books);
  }

  render() {
    return (
      <div>
        <h2>Books</h2>
        <ul>
          {this.state.books.map((book) => (
            <BookData
              key={book.id}
              id={book.id}
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
