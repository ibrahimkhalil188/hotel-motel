import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>Logo</div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/checkout">Check out</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/login">Log In</Link>
                <Link to="/login"></Link>
            </div>
        </div>
    );
};

export default Header;