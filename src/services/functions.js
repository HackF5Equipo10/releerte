import axios from "axios";

const endpoint = "http://localhost:5001/books";

const getBooks = async () =>{
   const response = await axios.get(endpoint);
    return response.data;
}

  
  export {
    getBooks,
  };