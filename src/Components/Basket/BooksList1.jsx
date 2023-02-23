//BOOKS ORDER  CARDS
import React from 'react';

import BooksItem1 from './BooksItem1';

const BooksList1 = (props) => {
    const { books, setOrder } = props;

    return (
        <div className='goods-list col-md-8'>
            <div className='row'>
                {books.map((item) => (
                    <BooksItem1 key={item.id} setOrder={setOrder} {...item} />
                ))}
            </div>
        </div>
    );
};

export default BooksList1;