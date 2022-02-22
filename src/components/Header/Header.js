import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
// import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип с названием приложения Место"
      />
      <nav className="header__navigation">
        <button className="header__button">Регистрация</button>
        <button className="header__button header__button_type_green">Войти</button>
      </nav>
    </header>
  );
}

export default Header;
