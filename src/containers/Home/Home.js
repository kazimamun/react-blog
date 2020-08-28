import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Hero from '../../components/Hero/Hero';

const Home = (props) => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
        </div>
    );
};

export default Home;