
import React, { useState } from 'react';
import logo from '../images/logo-sm.jpg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={logo} width={210} height={58} alt="logo" />
            </a>

            <div  className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/*nav items - use React fragments instead of div tags where redundant*/}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;