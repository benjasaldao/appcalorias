import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Logo.scss';

const Logo = () => (
    <Link to="/">
    <div className="logo">
    <img src="https://img.icons8.com/carbon-copy/100/000000/healthy-eating.png" alt="logo" />
        <h2>App</h2>
    </div>
    </Link>
);

export default Logo;