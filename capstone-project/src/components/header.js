import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import bannerImg from '../images/presentation-lg.jpg'

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <BrowserRouter>
                        <Link to="/booking"><button aria-label='On Click'>Reserve a Table</button></Link>
                    </BrowserRouter>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt='' />
                </div>
            </section>
        </header>
    );
};

export default Header;

//11:46//