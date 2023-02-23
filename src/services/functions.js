import axios from "axios";

const getBooks = async () => {
  const endpoint = "http://localhost:5001/books";
  const response = await axios.get(endpoint);
  return response.data;
}

export{
    getBooks
}