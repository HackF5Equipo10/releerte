
//one CardBOOK
const BasketItem1= (props) => {
    return (
        <li className='list-group-item'>
            {props.titulo} {props.donación}EUx{props.quantity}
            <button
                className='btn btn-primary'
                onClick={() => props.setOrder(props.id)}
            >
               ELIMINAR
            </button>
        </li>
    );
};

export default BasketItem1;