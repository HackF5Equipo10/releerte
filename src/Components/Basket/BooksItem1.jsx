// ONE BOOK CARD
import React from 'react';
import {Card, Grid, Stack, CardContent, CardMedia, Typography, CardActions,Button} from '@mui/material';


const BooksItem1 = (props) => {
    const {imagen, titulo, autores,  isbn, genero, donación, setOrder } = props;

    return (
        <Grid container mb={4} xs={12} md={4} sm={6} spacing={2 } sx={{mb:5}}>
            
            <Card sx={{ 
                maxWidth: '250px',
                 maxHeight: '600px',
                 ml: '20px',
                mb:'7px'
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
                     ISBN {isbn}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    {autores}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    {genero}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    Donación :  {donación}€
                    </Typography>
                </CardContent>
                <CardActions>
                <Stack spacing={1} width='100%'>
                    <Button color="primary" size="large" variant="contained"
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                titulo: props.titulo,
                                autores: props.autores,
                                isbn: props.isbn,
                                donación: props.donación,
                                imagen: props.imagen,
                            })
                        }
                    >
                        AÑADIR A LA CESTA
                    </Button>
                    </Stack>
                    </CardActions>
                </Card>
    </Grid>
    );
};

export default BooksItem1;