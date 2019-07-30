import React from 'react';
import logo from '../../pictures/logo.png';
import './Header.css';

function Header() {
    return (
        <header className="header-container">
            <img id="nfl-logo" src={logo} alt="nfl-logo"/>
            <h1>NFL 2019 ROSTER</h1>
        </header>
    )
}

export default Header