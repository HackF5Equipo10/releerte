//Bastek - Table

import BasketItem1 from './BasketItem1';

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
        <ul className='basket list-group col-md-4'>
            <li className='list-group-item active'>CESTA</li>
            {order.map((item, index) => (
                <BasketItem1 key={index} setOrder={setOrder} {...item} />
            ))}
            <li className='list-group-item active'>
                Total:{' '}
                {order.reduce((acc, item) => {
               console.log(`donacion: ${item.donacion}, quantity: ${item.quantity}`);
              return acc + (item.donacion * item.quantity);
             }, 0)} eu.
            </li>
        </ul>
       
        <button>FINALIZAR</button></>
    );
};

export default BasketList1;
