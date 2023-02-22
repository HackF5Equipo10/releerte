import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer.jsx'
import NavBar from './NavBar/NavBar.jsx'

const Layout = () => {
    return (
    <div>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        <Footer />
    </div>
)
}

export default Layout