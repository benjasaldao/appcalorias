import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/containers/Layout.scss'

const Layout = ({children}) => (
    <div className="contenedor">
      <Header />
      {children}
      <Footer />
    </div>
);

export default Layout;

