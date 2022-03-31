import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile(props) {

  const { loggedIn, signOut } = props;

  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  function handleSidebarOpen() {
    setSidebarOpen(true);
  }

  function handleSidebarClose() {
    setSidebarOpen(false);
  }

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
    <Header
      loggedIn={loggedIn}
      onSidebarOpen={handleSidebarOpen}/>
      <div className="profile">
        <h4 className="profile__title">{`Привет, ${currentUser.name}!`}</h4>
        <form
          className="profile__form">
          <label className="profile__label profile__text">Имя
            <input
              type="text"
              name="name"
              className="profile__input profile__text"
              placeholder="Виталий"
              required/>
          </label>
          <label className="profile__label profile__text">E-mail
            <input
              type="email"
              name="email"
              className="profile__input profile__text"
              placeholder="pochta@yandex.ru"
              required/>
          </label>
          <button
            className="profile__edit"
            type="submit">Редактировать</button>
          <button
            className="profile__exit"
            onClick={signOut}
            type="button">Выйти из аккаунта</button>
        </form>
      </div>
      <Sidebar isOpen={isSidebarOpen} closeButton={handleSidebarClose} />
    </>
  );
}

export default Profile;
