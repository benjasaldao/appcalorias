import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = ({children}) => (
    <header>
        {children}
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/calculator">Calculadora</Link>
        </nav>
    </header>
);

export default Header;