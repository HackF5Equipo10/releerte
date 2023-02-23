import React from 'react'
import BooksCollectionComponent from '../../Components/BooksCollectionComponent/BooksCollectionComponent'
import { BooksProvider } from '../../context/BooksContext'


function CollectionBooks() {
  return (
 <BooksProvider>
    <h1>Colección de Libros favoritos</h1>
    <BooksCollectionComponent/>
 </BooksProvider>
  )
}

export default CollectionBooks