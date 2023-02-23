import React from 'react'
import BooksCollectionComponent from '../../Components/BooksCollectionComponent/BooksCollectionComponent'
import { BookssProvider } from '../../context/BooksContext'


function CollectionBooks() {
  return (
 <BookssProvider>
    <h1>Pongo esto mientras esta listo en Navbar</h1>
    <BooksCollectionComponent/>
 </BookssProvider>
  )
}

export default CollectionBooks