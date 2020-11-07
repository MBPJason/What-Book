const express = require("express");
const router = express.Router();
const db = require("../models/Book");

// TODO: Create book route/ POST Route(save a book)
router.post("/api/save", ({ body }, res) => {
  db.Book.create(body)
    .then((savedBook) => {
      console.log(savedBook);
      res.json(savedBook);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "There was an error saving the book",
      });
    });
});

// TODO: Delete book route/ DELETE Route(delete a book by id)
router.delete("/api/books/:id", (req, res) => {
  db.Book.findByIdAndDelete(req.params.id)
    .then((deleteBook) => {
      console.log(deleteBook);
      res.json(deleteBook);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "There was an error saving the book",
      });
    });
});

// TODO: Get books route/ GET Route(get all saved books)
router.get("/api/all", (req, res) => {
  db.Book.find({})
    .then((allBooks) => {
      console.log(allBooks);
      res.json(allBooks);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "There was an error saving the book",
      });
    });
});

module.exports = router;
