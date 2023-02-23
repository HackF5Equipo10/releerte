import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  AppBar,
  Toolbar,
} from '@mui/material';
import BooksOrder from '../../Components/Basket/BooksOrder';


function UserProfile() {




  return (
    <>
    <div>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ mr: 1 }}>ReLeerTe</Typography>
            </Box>
          </Typography>
          <Button color="inherit">LOG OUT</Button>
        </Toolbar>
      </AppBar >
      <Container sx={{ p: 2 }}>         
          <BooksOrder />
       </Container>
       </div>
    </>
  );
}

export default UserProfile;
