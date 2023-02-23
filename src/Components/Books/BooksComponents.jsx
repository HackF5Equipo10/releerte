import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Typography, Modal, Box }from '@mui/material';
import Stack from '@mui/material/Stack';

function BooksComponents({imagen, titulo, donación, autores, id}) {

    const [open, setOpen] = useState(false);

      const handleAddToCart = () => {
          setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <>
      <Grid container item mb={4} xs={12} md={4} sm={6} spacing={2}>
            <Card sx={{ 
                maxWidth: '250px',
                maxHeight: '600px',
                ml: '20px'
              }}>
                <CardMedia
                    component="img"
                    alt={titulo}
                    height="380"
                    image={imagen}
                />
                <CardContent>
                <Typography gutterBottom variant="p" component="div">
                    {titulo}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    {autores}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    Donación: {donación}€
                    </Typography>
                </CardContent>
                <CardActions>
                <Stack spacing={1} width='100%'>
                <Link to={`/book-detail/${id}`}>
                    <Button color="info" size="large" variant="contained">VER FICHA</Button>
                </Link>
                    <Button color="info" size="large" variant="contained" onClick={handleAddToCart}>AÑADIR A LA CESTA</Button>
                </Stack>
                </CardActions>
                </Card>
             </Grid>



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