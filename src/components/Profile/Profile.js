import React from 'react';
import './Profile.css';

function Profile() {

  return (
    <div className="profile">
      <h4 className="profile__title">Привет, Виталий!</h4>
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
          type="submit">Выйти из аккаунта</button>
      </form>
    </div>
  );
}

export default Profile;
