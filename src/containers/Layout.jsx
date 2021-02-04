import React from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import '../assets/styles/containers/Layout.scss'

const Layout = ({children}) => (
    <div className="contenedor">
      <Header>
        <Logo />
      </Header>
      {children}
      <Footer />
    </div>
);

export default Layout;

