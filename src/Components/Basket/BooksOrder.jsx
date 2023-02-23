import React, { useEffect, useState } from 'react';
import { getBooks } from '../../services/functions';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography, Container, Grid } from '@mui/material';

function BooksOrder() {
  const [books, setBooks] = useState([]);
  const [order, setOrder] = useState({});

  const getAllbooks = async () => {
    const listOfBooks = await getBooks();
    setBooks(listOfBooks);
  };

  useEffect(() => {
    getAllbooks();
  }, []);

  const handleAddToCart = (bookId) => {
    setOrder((order) => ({
      ...order,
      [bookId]: (order[bookId] || 0) + 1,
    }));
  };

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {books.map((book) => (
            <Grid key={book.id} item xs={12} sm={6} md={4}>
              <Card sx={{ height: 350, pb:3}}>
                <CardMedia
                  sx={{ height: 150 }}
                  component="img"
                  alt={book.title}
                  image={book.imagen}
                />
                <CardContent >
                  <Typography
                    sx={{ fontSize: 10 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {book.autores}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.titulo}
                  </Typography>
                </CardContent>
                <CardActions sx={{ height: 60, ml:5,}}>
                  <Button color="secondary" variant='contained' size="small">
                    Leer Mas
                  </Button>
                  <Button size="small" onClick={() => handleAddToCart(book.id)}>
                    ANADIR
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default BooksOrder;