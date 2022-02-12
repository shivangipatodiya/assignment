import axios from "axios";

const apiHelpers = {
  async fetchBooks() {
    const response = await axios.get("/api/books");
    return response.data.books;
  },
  async addBook(data) {
    const response = await axios.post("/api/books", data);
    return response.data;
  },
  async editBook(data) {
    const response = await axios.put("/api/books", data);
    return response.data;
  },
  async deleteBook(id) {
    await axios.delete("/api/books/" + id);
  }
};

export default apiHelpers;
