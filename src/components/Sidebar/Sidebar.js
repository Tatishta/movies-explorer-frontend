import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {

  const sidebarClassname = props.isOpen ? "sidebar sidebar_active" : "sidebar"

  return (
    <div className={sidebarClassname}>
      <div className="sidebar__block">
        <button
          className="sidebar__close"
          type="button"
          onClick={props.closeButton}/>
        <nav className="sidebar__links">
          <NavLink
            className={({ isActive }) => isActive ? "sidebar__link sidebar__link_active" : "sidebar__link"}
            to="/"
            >Главная</NavLink>
          <NavLink
            className={({ isActive }) => isActive ? "sidebar__link sidebar__link_active" : "sidebar__link"}
            to="/movies"
            >Фильмы</NavLink>
          <NavLink
            className={({ isActive }) => isActive ? "sidebar__link sidebar__link_active" : "sidebar__link"}
            to="/saved-movies"
            >Сохранённые фильмы</NavLink>
        </nav>
      </div>
      <NavLink
          className={({ isActive }) => isActive ? "sidebar__link sidebar__link_type_account sidebar__link_active" : "sidebar__link sidebar__link_type_account"}
          to="/profile">
          <span>Аккаунт</span>
          <div className="sidebar__icon" />
        </NavLink>
    </div>
);
}

export default Sidebar;
