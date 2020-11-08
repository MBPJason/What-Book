import Axios from "axios";
import React, { Component } from "react";
import BookData from "./BookData";

export default class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    Axios.get("/api/all").then((res) => {
      console.log(res);
      this.setState({
        books: res.data.items,
      });
    });
  }

  deleteBook = () => {
    //   Deletes books onClick based on id
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
