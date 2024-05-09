import React from 'react';
import logo from '../images/logo-sm.jpg'

const Nav = () => {
    return (
        <nav>
            <a href='/'>
                <img src={logo} alt='logo'/>
            </a>
        </nav>
    );
};

export default Nav;