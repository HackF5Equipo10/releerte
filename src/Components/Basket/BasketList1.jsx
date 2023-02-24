//Bastek - Table

import BasketItem1 from './BasketItem1';
import {Button, Typography,TableContainer, CardActions,CardHeader} from '@mui/material'


const BasketList1 = (props) => {
    const { order, setOrder } = props;

    if (!order.length) {
        return (
            <CardHeader>
                <Typography variant sx={{m:'12px'}}>CESTA</Typography>
                <Typography variant='button' sx={{mt:'8px'}}>NO SE HE ENCONTRADO NINGUN LIBRO</Typography>
            </CardHeader>
        );
    }

    return ( 
    <>
       <TableContainer>
            <Typography variant='button' sx={{mt:'8px'}}>CESTA</Typography>
            {order.map((item, index) => (
                <BasketItem1 key={index} setOrder={setOrder} {...item} />
            ))}
            <CardActions>
                Total:{' '}
                {order.reduce((acc, item) => {
              console.log(`donacion: ${item.donacion}, quantity: ${item.quantity}`);
    return acc + (item.donacion * item.quantity);
}, 0)} eu.

            </CardActions>
       
       
        <Button color="primary" size="large" variant="contained" sx={{m:'12px'}}>FINALIZAR</Button>
       </TableContainer>
        </>
    );
};

export default BasketList1;
