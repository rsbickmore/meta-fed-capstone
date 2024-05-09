import React from 'react';
import logo from '../images/logo-sm.jpg'

const Nav = () => {
    return (
        <nav>
            <a href='/'>
                <img src={logo} alt='logo'/>
            </a>

            <div>
                <div className='bar'></div> {/*go to 4:05 in the video for css*/}
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

        </nav>
    );
};

export default Nav;