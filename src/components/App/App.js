import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
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


  const [loggedIn, setLoggedIn] = React.useState(true);

  function handleRegister (name, email, password) {
    auth.register(name, email, password)
      .then(() => {
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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={
          <ProtectedRoute redirectTo="/signin" loggedIn={loggedIn}>
            <Route path="/movies" element={<Movies />} />
          </ProtectedRoute>} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register handleRegister={handleRegister} />} />
        <Route path="/signin" element={<Login handleLogin={handleLogin}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
