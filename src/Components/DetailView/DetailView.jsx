import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';


function DetailedView({imagen, isbn, titulo, autores, editorial, donación, genero, descripción}) {


  return (
    <>
          <Grid item mb={4} xs={12} md={4} sm={6} spacing={2}>
            <Card sx={{ 
                maxWidth: '250px',
                 maxHeight: '1000px',
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
                    {isbn}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    {titulo}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    {autores}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    {genero}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    {editorial}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    {donación}€
                    <Typography gutterBottom variant="p" component="div">
                    {descripción}
                    </Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Stack spacing={2} width='100%' centered >
                        <Button color="info" size="large" variant="contained">AÑADIR A LA CESTA</Button>
                    </Stack>
                </CardActions>
                </Card>
       </Grid>


    </>
  )
}

export default DetailedView