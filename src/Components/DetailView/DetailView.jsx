import React, { useEffect, useState } from 'react'
import { getBooks } from '../../services/functions';
import { getBookById } from '../../services/functions';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function DetailedView() {
    const [book, setBook]= useState([]);

    const getbook =async() =>{
        const book = await getBooks();
        setBook(book);
        console.log(book);
    }
    useEffect(() => {
        getbook();
      }, []);
  return (
    <>
        { book.map(book => (
      
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
                     {book.isbn}
                     </Typography>
                     <Typography gutterBottom variant="h5" component="div">
                     {book.titulo}
                     </Typography>
                     <Typography gutterBottom variant="h5" component="div">
                     {book.autores}
                     </Typography>
                     <Typography gutterBottom variant="h5" component="div">
                     {book.editorial}
                     </Typography>
                     <Typography gutterBottom variant="h5" component="div">
                     {book.genero}
                     </Typography>
                     <Typography gutterBottom variant="h5" component="div">
                     {book.descripción}
                     </Typography>
                     <Typography gutterBottom variant="h5" component="div">
                     {book.donación}
                     </Typography>
                 </CardContent>
                 <CardActions>
                     <Button size="small">Agregar Carrito</Button>
                 </CardActions>
                 </Card>
             </div>
   ))
 };


    </>
  )
}

export default DetailedView