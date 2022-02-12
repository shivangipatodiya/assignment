import Book from "./Book";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Books, AddBook } from "./styles.js";

function BooksList(props) {
  const navigate = useNavigate();

  return (
    <>
      <AddBook>
        <Button type="primary" onClick={() => navigate("/add")}>
          Add Book
        </Button>
      </AddBook>
      <Books>
        {props.books.map((book) => {
          return (
            <Book
              key={book.id}
              id={book.id}
              name={book.name}
              author={book.author}
              publishingYear={book.publishing_year}
              isbn={book.isbn}
              imageUrl={book.image_url}
              books={props.books}
              setBooks={props.setBooks}
            />
          );
        })}
      </Books>
    </>
  );
}

export default BooksList;
