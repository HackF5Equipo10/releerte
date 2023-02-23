import React, { useEffect, useState } from 'react'
import { getBooks } from '../../services/functions';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Typography, Modal,Box,Link, }from '@mui/material';

function BooksComponents() {
    const [books, setBooks]= useState([]);
    const [open, setOpen] = useState(false);
     
    const getAllbooks =async() =>{
        const listOfBooks = await getBooks();
        setBooks(listOfBooks);
        console.log(books);
    }
    useEffect(() => {
        getAllbooks();
      }, []);

      const handleAddToCart = () => {
          setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
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
                    <Button size="small" onClick={handleAddToCart}>Agregar Carrito</Button>
                </CardActions>
                </Card>
            </div>
  ))
};

<Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¡Para realizar un pedido debes estar registrado!
          </Typography>
          <Button variant="contained" color="primary" sx={{mr: 5}} onClick={handleClose}>
            AHORA NO
          </Button> 
          <Button variant="contained" color="info" sx={{mr: 5}}  > <Link  sx={{ textDecoration: 'none' }} to="/login">LOGIN</Link>  </Button>
            <Button variant="contained" color='info' > <Link  sx={{ textDecoration: 'none' }} to="/login">Registrarme</Link>  </Button>
        </Box>
      </Modal>
    </>
  )
}

export default BooksComponents