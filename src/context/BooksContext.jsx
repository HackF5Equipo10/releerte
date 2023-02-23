import React, {createContext, useState, useEffect} from 'react'
import Swal from 'sweetalert2'


export const CardsContext = createContext();

export const CardsProvider = ({children}) => {
    const [booksItems, setBooksItems] = useState(() => {
        try {
            const booksinsessionstorage = sessionStorage.getItem("booksSelected");
            return booksinsessionstorage ? JSON.parse(booksinsessionstorage) : [];
        } catch (error) {
            console.log(error)
        }
        
    });

    useEffect(() => {
        sessionStorage.setItem("cardsSelected", JSON.stringify(booksItems));
    }, [booksItems]);

    const addToCollection = (card) => {
        const inCollection = booksItems.find(
            (cardInLecture) => cardInLecture.id === card.id
            );
        
        if (inLecture) {
            return (
                Swal.fire('Elige un libro diferente. Este libro ya había sido agregado.'));  
        };
        
        if (cardsItems && cardsItems.length < 3) {
            setCardsItems([...cardsItems, {...card}])
            return
        }
        Swal.fire('ya agregaste 3 cartas');

       
    };

    return (
        <CardsContext.Provider value={{cardsItems, addToLecture}}>
            {children}
        </CardsContext.Provider>
    )
};

