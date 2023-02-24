import axios from "axios";

const getBooks = async () => {
  const endpoint = "http://localhost:5001/books";
  const response = await axios.get(endpoint);
  return response.data;
}
const getBookById = async () => {
  const URL = "http://localhost:5001/books/:id"
  const response = await axios.get(URL);
  return response.data;
}

// const searchBook = async () => {
//   const endpoint = "http://localhost:5001/books"
//   const response = await axios.get(endpoint);
//   return response.data;
// }

export{
    getBooks,
    getBookById,
}