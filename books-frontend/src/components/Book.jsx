import { Button } from "antd";
import { Link } from "react-router-dom";
import { BookItem, Actions } from "./styles.js";
import DeleteBook from "./DeleteBook";
import React from "react";

function Book(props) {
  const { id, name, author, publishingYear, isbn, imageUrl } = props;

  return (
    <BookItem>
      <img width="150px" src={imageUrl ? imageUrl : ""} alt={name}></img>
      <h3>{name}</h3>
      <p>Author: {author}</p>
      <p>Year of publish: {publishingYear}</p>
      <p>ISBN: {isbn}</p>
      <Actions>
        <Link to={"/edit/" + id}>
          <Button type="primary">Edit</Button>
        </Link>
        &nbsp;&nbsp;
        <DeleteBook
          id={id}
          name={name}
          books={props.books}
          setBooks={props.setBooks}
        />
      </Actions>
    </BookItem>
  );
}

export default Book;
