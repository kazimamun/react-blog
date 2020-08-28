import React from 'react';
import './style.css'

const Header = (props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#contact">Contact us</a>
            </nav>
            
            <div className="social">
                Social Links
            </div>
        </header>
    );
};

export default Header;