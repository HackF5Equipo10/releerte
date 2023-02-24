//Bastek - Table

import BasketItem1 from './BasketItem1';
import {Button, Typography,TableContainer, CardActions} from '@mui/material'


const BasketList1 = (props) => {
    const { order, setOrder } = props;

    if (!order.length) {
        return (
            <ul className='basket list-group col-md-4'>
                <li className='list-group-item active'>CESTA</li>
                <li className='list-group-item'>NO SE HE ENCONTRADO NINGUN LIBRO</li>
            </ul>
        );
    }

    return ( 
    <>
       <TableContainer>
            <Typography variant='button'>CESTA</Typography>
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
       
       
        <Button color="primary" size="large" variant="contained">FINALIZAR</Button>
       </TableContainer>
        </>
    );
};

export default BasketList1;
