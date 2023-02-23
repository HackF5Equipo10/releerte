import React, {createContext, useState, useEffect} from 'react'
import Swal from 'sweetalert2'


export const BooksContext = createContext();

export const BookssProvider = ({children}) => {
    const [booksItems, setBooksItems] = useState(() => {
        try {
            const booksinsessionstorage = sessionStorage.getItem("booksSelected");
            return booksinsessionstorage ? JSON.parse(booksinsessionstorage) : [];
        } catch (error) {
            console.log(error)
        }
        
    });

    useEffect(() => {
        sessionStorage.setItem("booksSelected", JSON.stringify(booksItems));
    }, [booksItems]);

    const addToCollection = (book) => {
        const inCollection = booksItems.find(
            (bookInCollection) => bookInCollection.id === book.id
            );
        
        if (inCollection) {
            return (
                Swal.fire('Elige un libro diferente. Este libro ya había sido agregado.'));  
        };
        
        if (booksItems && booksItems.length < 8) {
            setBooksItems([...booksItems, {...book}])
            return
        }
        Swal.fire('ya agregaste 8 libros a tus favoritos');

       
    };

    return (
        <BooksContext.Provider value={{booksItems, addToCollection}}>
            {children}
        </BooksContext.Provider>
    )
};

