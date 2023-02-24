// ONE BOOK CARD
import React from 'react';
import {Card, Grid,CardContent,CardMedia, Typography, CardActions,Button} from '@mui/material';


const BooksItem1 = (props) => {
    const {imagen, titulo, autores,  isbn, genero, donación, setOrder } = props;

    return (
        <div >
            <Grid item mb={4} xs={12} md={4} sm={6} spacing={2}>
            <Card sx={{ 
                maxWidth: '500px',
                 maxHeight: '500px',
                 ml: '20px'
                 }}>
                <CardMedia
                    component="img"
                    alt={titulo}
                    height="280"
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
                    <Button
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
                    </CardActions>
                </Card>
       </Grid>
    </div>
    );
};

export default BooksItem1;