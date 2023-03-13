import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#ffd4b2'}}>
      <div className="container-fluid">
        <NavLink className="nav-link active" style={{color:'#86C8BC', fontSize:'40px', fontWeight:'bold' }} to="/">
          deMILAmores
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{marginLeft: '300px'}}>
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/category/Sola mi alma y yo"
              >
                Sola mi alma y yo
              </NavLink>
            </li>
            <li className="nav-item" style={{marginLeft:'85px'}}>
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/category/En compañía es mejor"
              >
                En compañía es mejor
              </NavLink>
            </li>
            <li className="nav-item" style={{marginLeft:'85px'}}>
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/category/Amores de mi alma"
              >
                Amores de mi alma
              </NavLink>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;