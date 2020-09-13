import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
            <img className="image-header" src="https://www.guarnic.com/wp-content/uploads/2016/10/logo-guarnic-header.png" alt="Logo"/>
          <Link className="nav-item navbar-brand" to={'/productos'}>Productos</Link>
          <Link className="navbar-brand" to={'/productos/proyeccion'}><span className='hidden'>Proyección a </span>30 días</Link>

        </div>
      </nav>
     );
}
 
export default Header;