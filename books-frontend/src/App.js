import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import apiHelpers from "./helpers/apiHelpers";
import { notification } from "antd";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const booksData = await apiHelpers.fetchBooks();
      setBooks(booksData);
    } catch (error) {
      if (error.toJSON().message === "Network Error") {
        notification.error({
          message: "Error",
          description: "No internet connection",
          duration: 0
        });
      }
      console.log("Error fetching books", error);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/add"
            element={<AddBook books={books} setBooks={setBooks} />}
          />
          <Route
            path="/edit/:id"
            element={<EditBook books={books} setBooks={setBooks} />}
          />
          <Route
            path="/"
            element={<BooksList books={books} setBooks={setBooks} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
