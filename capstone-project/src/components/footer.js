import React from 'react';
import logo from '../images/logo-sm.jpg'

const footer = () => {
    return (
        <footer className="">
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address:<br/>555 Main St.,<br/>Anytown, ST, USA</li>
                        <li>Phone:<br/>555-123-4567</li>
                        <li>Email:<br/>LittleLemon@email.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Yelp</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default footer;