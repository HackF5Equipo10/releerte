import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const NavBar = () => {

    const [ search, setSearch ] = useState('')

    const apiBase = 'http://localhost:5001/books'

    const showData = async () => {
        const response = await fetch(apiBase)
        const data = await response.json()
        console.log(data)
}
showData()

const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
}

//metodo de filtrado
    // let results = []
    // if(!search) {
    //     results = 
    // }


    return (
    <>
        <img src={logo} alt='logo'/>
        <input value={search} onChange={searcher} type='text' placeholder='Busca tu libro o autor favorito' />
        <div>
        <Link to='/'>Inicio</Link>
        <Link to='/about-us'>Sobre nosotros</Link>
        </div>
    </>
    )
}

export default NavBar