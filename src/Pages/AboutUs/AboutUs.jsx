import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

  
const AboutUs = () => {
    return (
    <>
        <h2>
            Abriendo mundos a través de la educación:
            Libros que cambian vidas
        </h2>
        <h1>Nuestros valores</h1>
       
     <Grid container spacing={4}>
     <Container maxWidth="sm">
        <Grid container justifyContent="center" spacing={2}>
        <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography color='primary' variant="h5" component="div" sx={{ color: 'primary'}} >
        Compromiso con la educación
        </Typography>
        <Typography variant="body2" sx={{ color: 'info'}}>
        Somos una empresa comprometida con la educación. Creemos que la educación es un derecho y un factor clave para el desarrlo de los niños y jovenes. Por eso, nuestra empresa vende libros de calidad que cntribuyen a la educación de los niños. Nuestros libros son relevantes, informativos y de fácil comprensión. Ofrecemos una variedad de opciones para satisfacer las necesidades de diferentes grupos de edad e intereses.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        Responsabilidad social
        </Typography>
        <Typography variant="body2">
        Asumimos una responsabilidad social y somos conscientes de nuestro impacto en la sociedad. por ello, donamos dinero a los niños que necesitan apoyo en la educación, contribuyendo a mejorar sus oportunidades y reducir la brecha educativa.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        Transparéncia y ética
        </Typography>
        <Typography variant="body2">
        Nos regimos por altos estándares éticos y de transparencia en todas nuestras operaciones y donaciones. Nuestras políticas son claras y justas en relación a la donación de dinero y en todas nuestras actividades comerciales.
        </Typography>
      </CardContent>
    </Card> 
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        Innovación
        </Typography>
        <Typography variant="body2">
        Estamos comprometidos con la innovación y siempre estamos abiertos a nuevas ideas y formas de apoyar la educación. Buscamos constantemente nuevas tecnologías y herramientas de aprendizaje, colaboramos con otras organizaciones y creamos programas de voluntariado, entre otras iniciativas innovadoras.
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Container>
    </Grid>
    </>
    )
}

export default AboutUs