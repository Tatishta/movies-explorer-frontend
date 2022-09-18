import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Header(props) {

  return (
    <header className="header">
      <Logo />
      {props.loggedIn ? (
        <>
          <nav className="header__links">
            <NavLink
              className={({ isActive }) => isActive ? "header__link header__link_active" : "header__link"}
              to="/movies"
              >Фильмы</NavLink>
            <NavLink
              className={({ isActive }) => isActive ? "header__link header__link_active" : "header__link"}
              to="/saved-movies"
              >Сохранённые фильмы</NavLink>
            <NavLink
              className={({ isActive }) => isActive ? "header__link header__link_type_account header__link_active" : "header__link header__link_type_account"}
              to="/profile">
              <span>Аккаунт</span>
              <div className="header__icon" />
            </NavLink>
          </nav>
          <button
            className="header__sidebar"
            type="button"
            onClick={props.onSidebarOpen} />
        </>) : (
        <nav className="header__navigation">
          <NavLink className="header__button" to="/signup">Регистрация</NavLink>
          <NavLink className="header__button header__button_type_green" to="/signin">Войти</NavLink>
        </nav>)}
    </header>
);
}

export default Header;
