// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/students/new">Add Student</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
