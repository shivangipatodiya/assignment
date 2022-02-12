import { message, Popconfirm, Button } from "antd";
import apiHelpers from "../helpers/apiHelpers";

function DeleteBook(props) {
  const { id, name } = props;

  const confirm = async () => {
    try {
      await apiHelpers.deleteBook(id);
      const updated = props.books.filter((aBook) => aBook.id !== id);

      props.setBooks(updated);
      message.success(`${name} deleted`);
    } catch (e) {
      console.log("Error deleting book", e);
    }
  };

  return (
    <div>
      <Popconfirm
        title="Are you sure to delete this book?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>Delete</Button>
      </Popconfirm>
    </div>
  );
}

export default DeleteBook;
