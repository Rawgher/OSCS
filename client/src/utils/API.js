import axios from "axios";
// import env from '../../../.env';

export default {
  // Gets all books
  getStack: (jrsSearchTerm) => {
    var queryURL = `https://api.stackexchange.com/2.2/similar?pagesize=5&order=desc&sort=relevance&title=${jrsSearchTerm}&site=stackoverflow&key=bDGLxdw38J9H0puc2BctAQ((`;
    return axios.get(queryURL);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
