import axios from "axios";

const endpoint = "http://localhost:5001/books";

const getBooks = async () =>{
   const response = await axios.get(endpoint);
    return response.data;

}

const getBookById = async (id) =>{
    const endpoint = "http://localhost:5001/book-detail/:id";
    const response = await axios.get(endpoint`/${id}`);
    return response.data;
}

export{
    getBooks, getBookById
}