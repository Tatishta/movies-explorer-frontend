import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/auth'

function App() {
  const navigate = useNavigate();


  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({})

  React.useEffect(() => {
    auth.checkToken().then((res) => {
    if (res) {
      setCurrentUser({name: res.user.name, email: res.user.email})
      setLoggedIn(true);
      navigate("/");
    }})
    .catch((err) => {
      console.log(err);
    })
  }, [navigate]);

  const handleRegister = (name, email, password) => {
    auth.register(name, email, password)
      .then(() => {
        setLoggedIn(true);
        navigate("/movies");})
      .catch((err) => {
        console.log(err);
      })
  };

  const handleLogin = (email, password) => {
    return auth.authorize(email, password)
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const handleSignOut = () => {
    auth.signOut()
    .then(() => {
      setLoggedIn(false);
      navigate("/");
    })
    .catch((err) => {
      console.log(err);
    })
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn}/>} />
          <Route path="/movies" element={
            <ProtectedRoute redirectTo="/" loggedIn={loggedIn}>
              <Movies loggedIn={loggedIn}/>
            </ProtectedRoute>} />
          <Route path="/saved-movies" element={
            <ProtectedRoute redirectTo="/" loggedIn={loggedIn}>
              <SavedMovies loggedIn={loggedIn}/>
            </ProtectedRoute>} />
          <Route path="/profile" element={
            <ProtectedRoute redirectTo="/" loggedIn={loggedIn}>
              <Profile
                loggedIn={loggedIn}
                signOut={handleSignOut}/>
            </ProtectedRoute>} />
          <Route path="/signup" element={<Register handleRegister={handleRegister} />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
