import React from 'react';
import logo from '../../pictures/logo.png';
import headerNFL from '../../pictures/headerNFL.png';
import headerROSTERS from '../../pictures/headerROSTERS.png';
import header2019 from '../../pictures/header2019.png';
import headerREADY from '../../pictures/headerREADY.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img id="nfl-logo" src={logo} alt="nfl-logo"/>
            <div className="header-text">
                <img id="heading-nfl" className="heading-text" src={headerNFL} alt="nfl-heading-nfl"/>
                <img id="heading-rosters" className="heading-text" src={headerROSTERS} alt="heading-rosters"/>
                <img id="heading-2019" className="heading-text" src={header2019} alt="heading-2019"/>
                <img id="heading-ready" className="heading-text" src={headerREADY} alt="heading-ready"/>
            </div>
            <Link className="link-home" to="/"><button className="home-button">Home Page</button></Link>
        </header>
    )
}

export default Header