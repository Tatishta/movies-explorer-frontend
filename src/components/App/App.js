import './App.css';
import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UserProtectedRoute from '../UsersProtectedRoute/UsersProtectedRoute';
import * as auth from '../../utils/auth';
import {AppContext, reducerWithLocalStorage} from "../../contexts/AppContext";
import {getCachedSearchState} from "../../utils/localStorage";
import {Route, Routes } from "react-router-dom";

function App() {
  const [state, dispatch] = React.useReducer(reducerWithLocalStorage, getCachedSearchState());


  const [loggedIn, setLoggedIn] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({})

  React.useEffect(() => {
    auth.checkToken().then((res) => {
        if (res) {
          setCurrentUser({name: res.user.name, email: res.user.email});
          setLoggedIn(true);}
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{state, dispatch}}>
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
            <Route path="/movies" element={
              <ProtectedRoute redirectTo="/" loggedIn={loggedIn}>
                <Movies loggedIn={loggedIn}/>
              </ProtectedRoute>}/>
            <Route path="/saved-movies" element={
              <ProtectedRoute redirectTo="/" loggedIn={loggedIn}>
                <SavedMovies loggedIn={loggedIn}/>
              </ProtectedRoute>}/>
            <Route path="/profile" element={
              <ProtectedRoute redirectTo="/" loggedIn={loggedIn}>
                <Profile
                  loggedIn={loggedIn}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}/>
              </ProtectedRoute>}/>
            <Route path="/signup" element={
              <UserProtectedRoute redirectTo="/movies" loggedIn={loggedIn}>
                <Register setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/>
              </UserProtectedRoute>}/>
            <Route path="/signin" element={
              <UserProtectedRoute redirectTo="/movies" loggedIn={loggedIn}>
                <Login setLoggedIn={setLoggedIn}/>
              </UserProtectedRoute>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </CurrentUserContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
