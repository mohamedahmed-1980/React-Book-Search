import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import BookCard from "../components/BookComp";
import NoResults from "../components/noResults";
import { Button } from "react-bootstrap";

function Home() {
  const [books, setBooks] = useState({});
  const structureBook = (bookData) => {
    return {
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
      title: bookData.volumeInfo.title
    };
  };

  function handleChange({ target }) {
    console.log(target.value);
    API.getBooks(target.value)
      .then((res) => {
        console.log(res.data.items);
        setBooks(res.data.items.map((bookData) => structureBook(bookData)));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Header title="Google Book Search" />
      <Button style={{ margin: "20px" }}> <a href="http://localhost:3000/Saved" style={{ color: "white" }}>Go to Saved Books</a> </Button>

      <input style={{ margin: "20px" }} type="text" placeholder="Search ..." className="form-control" onChange={handleChange} />
      {books.length ? (
        <div>
          {books.map((book) => (
            <BookCard book={book} headerButton="save" />
          ))}
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
}

export default Home;