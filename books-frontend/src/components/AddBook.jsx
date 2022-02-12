import { Form, Input, Button, notification } from "antd";
import apiHelpers from "../helpers/apiHelpers";
import { useNavigate } from "react-router-dom";
import { Header } from "./styles";

function AddBook(props) {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const exists = props.books.some(
      (aBook) => aBook.name.toLowerCase() === values.book.name.toLowerCase()
    );
    if (exists) {
      notification.error({
        message: "Error",
        description:
          "A book with this name already exists. Please use a different name."
      });
      return;
    }

    try {
      const addedBook = await apiHelpers.addBook(values.book);
      const newBooks = [...props.books];
      newBooks.push(addedBook);
      props.setBooks(newBooks);
      navigate("/");
    } catch (e) {
      console.log("Error adding book", e);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Header>ADD BOOK</Header>
      <Form
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 8
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name={["book", "name"]}
          rules={[
            {
              required: true,
              message: "Please input the bookname!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Author"
          name={["book", "author"]}
          rules={[
            {
              required: true,
              message: "Please input the author!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Publishing Year"
          name={["book", "publishing_year"]}
          rules={[
            {
              required: true,
              message: "Please input the publishing year!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="ISBN"
          name={["book", "isbn"]}
          rules={[
            {
              required: true,
              message: "Please input the ISBN!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image Url"
          name={["book", "image_url"]}
          rules={[
            {
              required: true,
              message: "Please input the image Url!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button type="default" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddBook;
