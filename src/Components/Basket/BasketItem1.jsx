
//one CardBOOK
import { Box, Button, ListItem, Typography } from '@mui/material';

const BasketItem1= (props) => {
    return (
        <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: 50, height: 50, mr: 2 }}>
          <img src={props.imagen} alt={props.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            {props.titulo}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {props.autores}
          </Typography>
          <Typography variant="h4" >
            {props.donación}€ * {props.quantity}
          </Typography>
        </Box>
        <Button variant="contained" color="info" onClick={() => props.setOrder(props.id)}>
          ELIMINAR
        </Button>
      </ListItem>
    );
};

export default BasketItem1;