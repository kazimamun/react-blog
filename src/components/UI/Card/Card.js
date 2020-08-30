import React from 'react';
import './Card.css'
import Logo from '../../Logo/Logo';
import Navbar from '../../Navbar/Navbar';

const Card = (props) => {
    return (
        <div className="card">
            <div style={{padding: '50px 0'}}>                
                <Logo></Logo>
            </div>            
            <Navbar />
        </div>
    );
};

export default Card;