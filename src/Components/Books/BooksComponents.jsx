import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

function BooksComponents({imagen, titulo, donación, autores, book}) {
    const {addToCollection} = useContext(BooksContext)
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
                    <Stack spacing={3} width='100%'>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon 
                        onClick={()=>addToCollection(book)}
                        />
                        </IconButton>
                        <Button color="info" size="large" variant="contained">VER FICHA</Button>
                        <Button color="info" size="large" variant="contained">AÑADIR A LA CESTA</Button>
                    </Stack>
                </CardActions>
                </Card>
       </Grid>
    </>
  )
}

export default BooksComponents