import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import {projectApi} from "../../utils/MainApi";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";


function Profile(props) {

  const { loggedIn, signOut, currentUser, setCurrentUser } = props;

  const {values, handleChange, errors, isValid, resetForm, isSameProfileData} = useFormAndValidation({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [profileError, setProfileError] = React.useState("");
  const [status, setStatus] = React.useState(null);

  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  function handleSidebarOpen() {
    setSidebarOpen(true);
  }

  function handleSidebarClose() {
    setSidebarOpen(false);
  }

  function resetStatus() {
    setTimeout(() => setStatus(null), 2000);
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (isSameProfileData(currentUser, values)) {
      setProfileError('Данные не изменились');
    } else {
      handleEditUser(values.name, values.email)
      resetForm();
    }
  }

  const isSameData = isSameProfileData(currentUser, values);

  function handleProfileChange(e) {
    handleChange(e);
    if (profileError.length > 0) {
      setProfileError("");
    }
  }

  function handleEditUser(name, email) {
    projectApi.editUserInfo(name, email)
      .then((res) => {
        setCurrentUser({
          name: res.user.name,
          email: res.user.email,
            _id: res.user._id
        })
        setStatus('success');
        resetStatus();
      })
      .catch((err) => {
        setStatus('error');
        resetStatus();
        console.error(err);
      });
  }

  return (
    <>
    <Header
      loggedIn={loggedIn}
      onSidebarOpen={handleSidebarOpen}/>
      <div className="profile">
        <h4 className="profile__title">Привет, {currentUser.name}!</h4>
        <form
          className="profile__form"
          onSubmit={handleSubmit}>
          <label className="profile__label profile__text">Имя
            <input
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              placeholder="Имя"
              className="profile__input profile__text"
              value={values.name}
              onChange={handleProfileChange}
              required/>
          </label>
          <span className={`profile__error ${!errors.name ? '':'profile__error_visible'}`}>{errors.name}</span>
          <label className="profile__label profile__text">E-mail
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="profile__input profile__text"
              pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
              onChange={handleProfileChange}
              value={values.email}
              required/>
          </label>
          <span className={`profile__error ${!errors.email ? '':'profile__error_visible'}`}>{errors.email}</span>
          <div className={"profile__block"}>
            {status === 'success' && <span className="profile__submit_status_yes">Данные успешно изменены!</span>}
            {status === 'error' && <span className="profile__submit_status_no">При обновлении профиля произошла ошибка.</span>}
            <button
              className={`profile__edit ${!isValid && isSameData ? 'profile__edit_disabled' : ''}`}
              type="submit"
              disabled={isSameData || !isValid}>Редактировать</button>
            <button
              className="profile__exit"
              onClick={signOut}
              type="button">Выйти из аккаунта</button>
          </div>
        </form>
      </div>
      <Sidebar isOpen={isSidebarOpen} closeButton={handleSidebarClose} />
    </>
  );
}

export default Profile;
