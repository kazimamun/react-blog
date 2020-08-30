import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className='navbar'>
            <ul className="navbarMenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Posts</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="search">
                <input type="text" placeholder='Search' />
                <img src={require('../../assets/images/search.png')} alt="Search" srcset=""/>
            </div>
        </div>
    );
};

export default Navbar;