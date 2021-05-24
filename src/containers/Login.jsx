import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {loginRequest} from '../actions';
import '../assets/styles/components/Login.scss';

const Login = props => {
    const handleSubmit = () => {
        const user = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        }

        console.log(user)

        loginRequest(user);
        props.history.push('/calculator');
    }
    return(
        <section className="login-container">
        <div className="login">

            <h3>Iniciar sesión</h3>

            <input type="email" className="input" id="email" placeholder="Email" />
            <input type="password" className="input" id="password" placeholder="Contraseña"/>
            <button className="button" onClick={handleSubmit} type="submit">Iniciar sesión</button>
            
            <div>
                <p><a href="/">Olvide mi contraseña</a></p>
                <p>¿No tienes una cuenta? <Link to="/register">Registrate</Link></p>
            </div>
        
        </div>
        </section>   
    )
}

const mapDispatchToProps = {
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login);
