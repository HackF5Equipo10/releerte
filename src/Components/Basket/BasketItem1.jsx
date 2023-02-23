
//one CardBOOK
const BasketItem1= (props) => {
    return (
        <li className='list-group-item'>
            {props.imagen}
            {props.titulo}
            {props.autores}
            {props.titulo}
             {props.donación}EU * {props.quantity}
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