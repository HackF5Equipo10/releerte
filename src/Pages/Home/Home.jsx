import React, { useEffect, useState } from 'react'
import { getBooks } from '../../Services/functions';
import BooksComponents from '../../Components/Books/BooksComponents'
import Grid from '@mui/material/Grid';


const Home = () => {

        const [books, setBooks]= useState([]);
    
        const getAllbooks =async() =>{
            const listOfBooks = await getBooks();
            setBooks(listOfBooks);
        }
        useEffect(() => {
            getAllbooks();
          }, []);



    return (
    <div>
        <h1>Catálogo</h1>
        <Grid container spacing={2}>
        { books.map(book => (
        <BooksComponents key={book.id} {...book}/>
        ))
        }
        </Grid>
    </div>
    )
}

export default Home