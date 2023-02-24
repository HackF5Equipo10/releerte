import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'

const Home = () => {

        const [books, setBooks]= useState([]);
    
        const getAllbooks =async() =>{
            const listOfBooks = await getBooks();
            setBooks(listOfBooks);
        }
        useEffect(() => {
            getAllbooks();
        }, []);



    return (
    <div>

        <Grid container spacing={2}>
        { books.map(book => (
        <BooksComponents key={book.id} {...book}/>
        ))
        }
        </Grid>
    </div>
    )
}

export default Home