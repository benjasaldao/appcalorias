import React from 'react';
import {Link,} from 'react-router-dom';
import '../assets/styles/components/Footer.scss'

const Footer = () => (
        <nav className="navigation footer">
             <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
);

export default Footer;
