import React, { useContext } from 'react'
import { BooksContext } from '../../context/BooksContext'

function BooksCollectionComponent() {
    const {booksItems} = useContext(BooksContext)
  return (
    <div>
        {booksItems && booksItems.length === 0 ? (
            <p>No has seleccionado ningun libro aún.</p>
        ) : (
            <>
            
                {booksItems.map((book, index) => (
                    <div key={index}>
{/*                         <p>{index === 0 ? ('Pasado') : index === 1 ? ('Presente') : ('Fururo')}</p> */}
                        <img src={book.imagen} alt={book.titulo}/>
                        <p><span>{book.titulo}</span></p>
                        <p>{book.descripción}</p>
                    </div>
                ))}
            </>
        )}        
    </div>
  )
}

export default BooksCollectionComponent