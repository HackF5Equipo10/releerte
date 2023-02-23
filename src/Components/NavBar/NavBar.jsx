import React, { /*useState, useEffect*/ } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './NavBar.style.css'
// import { searchBook } from '../../services/functions'


const NavBar = () => {

    // const [books, setBooks] = useState([]);
    // const [ search, setSearch ] = useState('');

    // const searchBooks =async() =>{
    //     const listOfBooks = await searchBook();
    //     setBooks(listOfBooks);
    // }

    // const searcher = (e) => {
    //     setSearch(e.target.value)
    // //console.log(e.target.value)
    // }

    // let results = []
    // if(!search) {
    //     results = books
    // } else {
    //     results = books.filter( (dato) => 
    //     dato.titulo.toLowerCase().includes(search.toLocaleLowerCase())
    //     )
    // }

    // useEffect( () => {
    //     searchBooks()
    // }, [])

    return (
    <nav>
        <img src={logo} alt='logo'/>
        <input /*value={search} onChange={searcher}*/ type='text' placeholder='Busca tu libro' />
        <div className='navLinks'>
            <Link to='/'><p>Inicio</p></Link>
            <Link to='/about-us'><p>Sobre nosotros</p></Link>
        </div>
    </nav>
    )
}

export default NavBar