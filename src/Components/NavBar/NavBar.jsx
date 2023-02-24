import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './NavBar.style.css'

const NavBar = () => {

    return (
    <nav>
        <img src={logo} alt='logo'/>
        <form>
            <input type='text'/>
        </form>
        <div className='navLinks'>
            <Link to='/'><p>Inicio</p></Link>
            <Link to='/about-us'><p>Sobre nosotros</p></Link>
        </div>
    </nav>
    )
}

export default NavBar