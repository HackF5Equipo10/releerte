import React, { useEffect, useState } from 'react';
import { getBooks } from '../../services/functions';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  ButtonGroup,
  Typography
} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Product(props) {

  const [books, setBooks] = useState([]);
  const { order } = props;

  const getAllBooks = async () => {
    const listOfBooks = await getBooks();
    setBooks(listOfBooks);
  }

  useEffect(() => {
    getAllBooks();
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
            {books.map((book) => {
              const addedBook = order.items.find((item) => item.id === book.id);
              return (
                <TableRow key={book.id}>
                  <TableCell component="th" scope="row">
                    {book.titulo}
                  </TableCell>
                  <TableCell>{book.autores}</TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <Button
                        aria-label="reduce"
                        onClick={() => {
                          if (addedBook) {
                            addedBook.count = Math.max(addedBook.count - 1, 0);
                            props.onOrderChange(order);
                          }
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      {addedBook && <Button disabled>{addedBook.count}</Button>}
                      {!addedBook && <Button disabled>0</Button>}
                      <Button
                        aria-label="increase"
                        onClick={() => {
                          if (addedBook) {
                            addedBook.count = addedBook.count + 1;
                            props.onOrderChange(order);
                          } else {
                            const newBook = { id: book.id, count: 1 };
                            order.items.push(newBook);
                            props.onOrderChange(order);
                          }
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                  <TableCell>{book.donación}</TableCell>
                  <TableCell>
                    <Button
                      aria-label="delete"
                      onClick={() => {
                        if (addedBook) {
                          const index = order.items.findIndex((item) => item.id === book.id);
                          order.items.splice(index, 1);
                          props.onOrderChange(order);
                        }
                      }}
                    >
                      <DeleteForeverRoundedIcon sx={{ color: 'secondary' }} />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Product;
