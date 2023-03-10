import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getBookById} from '../../Services/functions'
import DetailView from '../../Components/DetailView/DetailView'



const DetailBook = () => {
    const { id } = useParams();
    const [book, setBook]= useState({});
    
    const getBook = async () =>{
        const singleBook = await getBookById(id);
        setBook(singleBook);
    }
    useEffect(() => {
        getBook();
      }, []);

    return (
        <div className='container-detail'>
        <h1>Detalle del Libro</h1>
        {book && (
  <DetailView
    key={book.id}
    imagen={book.imagen}
    isbn={book.isbn}
    titulo={book.titulo}
    autores={book.autores}
    editorial={book.editorial}
    donación={book.donación}
    genero={book.genero}
    descripción={book.descripción}
  />
)}
        </div>

    )
      
}        
            


export default DetailBook;
