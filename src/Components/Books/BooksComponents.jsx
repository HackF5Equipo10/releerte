import React, { useEffect, useState } from 'react'
import { getBooks } from '../../services/functions';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BooksComponents() {
    const [books, setBooks]= useState([]);

    const getAllbooks =async() =>{
        const listOfBooks = await getBooks();
        setBooks(listOfBooks);
        console.log(books);
    }
    useEffect(() => {
        getAllbooks();
      }, []);
  return (
    <>
       { books.map(book => (
        
            <div key={book.id}>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt={book.title}
                    height="140"
                    image={book.imagen}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {book.titulo}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    {book.autores}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">VER FICHA</Button>
                    <Button size="small">Agregar Carrito</Button>
                </CardActions>
                </Card>
            </div>
  ))
};


    </>
  )
}

export default BooksComponents