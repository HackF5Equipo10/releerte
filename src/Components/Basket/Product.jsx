import React, { useEffect, useState } from 'react'
import { getBooks } from '../../services/functions';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, ButtonGroup, Typography } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Product() {

 const [books, setBooks] = useState([]);

  const getAllbooks = async () => {
    const listOfBooks = await getBooks();
    setBooks(listOfBooks);
  }

  useEffect(() => {
    getAllbooks();
  }, [])

  return (
    <>   
      <Typography variant="h3" sx={{ mr: 1, mb: 5}}>Mi Cesta </Typography>
   
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Authors</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Donation</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell component="th" scope="row">
                {book.titulo}
              </TableCell>
              <TableCell>{book.autores}</TableCell> 
                <TableCell>{book.donación}</TableCell>
              <TableCell>
                <ButtonGroup>
                  <Button
                    aria-label="reduce"
                    onClick={() => {
                      book.count = Math.max(book.count - 1, 0);
                      setBooks([...books]);
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button disabled>{book.count}</Button>
                  <Button
                    aria-label="increase"
                    onClick={() => {
                      book.count = book.count + 1;
                      setBooks([...books]);
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </TableCell>
              <TableCell>
                <DeleteForeverRoundedIcon sx={{ color: 'secondary' }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default Product;
