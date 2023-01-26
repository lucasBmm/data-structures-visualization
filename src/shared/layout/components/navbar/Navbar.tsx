import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

export function Navbar(): JSX.Element {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__link">Home</Link>
            <Link to="/data-structures" className="navbar__link">Data Structures</Link>
        </nav>
    );
}