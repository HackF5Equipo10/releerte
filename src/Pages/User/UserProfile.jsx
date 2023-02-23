import React, { useEffect, useState } from 'react';
import { getBooks } from '../../services/functions';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  TextField,
  IconButton,
  AppBar,
  Toolbar,
} from '@mui/material';


function UserProfile() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
 

  const getAllBooks = async () => {
    const listOfBooks = await getBooks();
    setBooks(listOfBooks);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ mr: 1 }}>ReLeerTe</Typography>
            </Box>
          </Typography>
          
          <Button color="inherit">CESTA</Button>

          <Button color="inherit">LOG OUT</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <TextField
            label="Search"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {filteredBooks.map((book) => (
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
                  <Button size="small">LEER MAS</Button>
                  <Button size="small">
                    ANADIR
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default UserProfile;
