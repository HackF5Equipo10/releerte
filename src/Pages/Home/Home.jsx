import React, { useEffect, useState } from 'react'
import { getBooks } from '../../services/functions';
import BooksComponents from '../../Components/Books/BooksComponents'
import Grid from '@mui/material/Grid';
import NavBar from '../../Components/NavBar/NavBar'
import './Home.style.css'

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
        <h1>HOME PAGE</h1>

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