import React, { useContext, useEffect, useState } from 'react'
import { getBooks } from '../../services/functions';
import BooksComponents from '../../Components/Books/BooksComponents'
import Grid from '@mui/material/Grid';
import './Home.style.css'
import { BooksContext } from '../../context/BooksContext';

const Home = () => {

        const [books, setBooks]= useState([]);
    
        const getAllbooks =async() =>{
            const listOfBooks = await getBooks();
            setBooks(listOfBooks);
        }
        useEffect(() => {
            getAllbooks();
          }, []);

        const {addToCollection} = useContext(BooksContext);

    return (
    <>

        <h1>HOME PAGE</h1>

        <Grid container spacing={2}>
        { books.map(book => (
        <BooksComponents key={book.id} {...book} book={book} addToCollection={addToCollection}/>
        ))
        }
        </Grid>
    </>
    )
}

export default Home