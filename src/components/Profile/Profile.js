import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import {projectApi} from "../../utils/MainApi";


function Profile(props) {

  const { loggedIn, signOut, currentUser, setCurrentUser } = props;

  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  function handleSidebarOpen() {
    setSidebarOpen(true);
  }

  function handleSidebarClose() {
    setSidebarOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (isSameProfileData(currentUser, values)) {
    //   setProfileError('Данные не изменились');
    // } else {
    //   handleEditUser(values.name, values.email)
    // }
  }

  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // function handleEditUser(name, email) {
  //   projectApi.editUserInfo(name, email)
  //     .then((resultUserInfo) => {
  //       setCurrentUser({
  //         name: resultUserInfo.user.name,
  //         email: resultUserInfo.user.email,
  //         _id: resultUserInfo.user._id
  //       })
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

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
              className="profile__input profile__text"
              value={currentUser.name}
              onChange={handleChange}
              required/>
          </label>
          <label className="profile__label profile__text">E-mail
            <input
              type="email"
              name="email"
              className="profile__input profile__text"
              onChange={handleChange}
              value={currentUser.email}
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
