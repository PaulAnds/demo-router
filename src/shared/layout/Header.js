import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const {title, url} = props;

    return ( 
        <header className="App-header">
            
            <div className="App-header-logo">
                <a href={url}>
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                
                <h1>{title}</h1>
            </div>
            

            <ul>
                <li><Link to ="/">Home </Link></li>
                <li><Link to ="/uicharacters">UICharacters </Link></li>
                <li><Link to ="/about">About </Link></li>
                <li><Link to ="/notes">Notes </Link></li>
                <li><Link to ="/contact">Contact</Link></li>
            </ul>
        </header>
    );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;