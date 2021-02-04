import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/containers/Error404.scss';

const Error404 = () => (
    <div className="Error">
    <h2>Parece que esa direccion no existe en este sitio!</h2>
    <Link to="/">Volver al home</Link>
    </div>
);

export default Error404;