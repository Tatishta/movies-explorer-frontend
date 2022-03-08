import React from 'react';
import './Logo.css';
import logo from '../../images/logo.svg';

function Logo() {

  return (
      <img
        className="logo"
        src={logo}
        alt="Логотип приложения, буква с на зеленом фоне"
      />
);
}

export default Logo;
