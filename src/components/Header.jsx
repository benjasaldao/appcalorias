import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logoutRequest} from '../actions';
import Logo from '../components/Logo';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
    console.log(props.user)
    const hasUser = Object.keys(props.user).length > 0;
    
    const coso = () => {
        console.log(props.user)
        console.log(hasUser) 
    }

    const logoutHandler = () => {
        props.logoutRequest({});
        props.history.push("/")
    }

    return(
    <header>
        <Logo />
        <nav className="navigation">
            <p>Menu</p>
            <div className="drop-down">
            <Link to="/blog">Blog</Link>
            <Link to="/calculator">Calculadora</Link>
            {hasUser ? 
            <a onClick={logoutHandler}>Cerrar sesión</a>
            :
            <Link to="/" onClick={coso}>Iniciar sesión</Link>
            }
            </div>
        </nav>
    </header>
);}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);