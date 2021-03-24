import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import API from "../utils/API";
import BookComp from "../components/BookComp";
import NoResults from "../components/noResults";
import { Button } from "react-bootstrap";

function Saved() {
  const [books, setBooks] = useState({});

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getSavedBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Header title="Saved Books" />
      <Button style={{ margin: "20px" }}> <a href="http://localhost:3000" style={{ color: "white" }}>Back to Google Search</a></Button>

      {books.length ? (
        <div>
          {books.map((book) => (
            <BookComp book={book} headerButton="delete" loadBooks={loadBooks} />
          ))}
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
}

export default Saved;