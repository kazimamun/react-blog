import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    const [search,setSearch] = useState(false);

    const submitSearch = (e)=>{
        e.preventDefault();
        alert('search clicked')
    }

    function openSearch(){
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className='navbar'>
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/post/:postId">Posts</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder='Search' />
                    <img onClick={openSearch} className="searchIcon" src={require('../../assets/images/search.png')} alt="Search"/>
                </form>
            </div>
        </div>
    );
};

export default Navbar;