import React from 'react';
import './Logo.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Logo() {

  return (
    <NavLink to="/">
      <img
        className="logo"
        src={logo}
        alt="Логотип приложения, буква с на зеленом фоне"
      />
    </NavLink>
);
}

export default Logo;
