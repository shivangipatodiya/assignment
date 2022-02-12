import { Form, Input, Button } from "antd";
import { useParams } from "react-router";
import apiHelpers from "../helpers/apiHelpers";
import { useNavigate } from "react-router-dom";
import { Header } from "./styles";

function EditBook(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = props.books.find((aBook) => aBook.id === parseInt(id));

  const onFinish = async (values) => {
    try {
      const editedBook = await apiHelpers.editBook({
        id: parseInt(id),
        ...values.book
      });
      const newBooks = [...props.books];
      const updated = newBooks.map((aBook) => {
        if (aBook.id === parseInt(id)) {
          return { ...editedBook };
        }
        return aBook;
      });

      props.setBooks(updated);
      navigate("/");
    } catch (e) {
      console.log("Error updating book", e);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Header>EDIT BOOK</Header>
      <Form
        // form={form}
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 8
        }}
        initialValues={{ book: book }}
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

export default EditBook;
