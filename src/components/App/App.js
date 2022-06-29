import './App.css';
import React from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
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

function App() {
  const [state, dispatch] = React.useReducer(reducerWithLocalStorage, getCachedSearchState());
  const navigate = useNavigate();


  const [loggedIn, setLoggedIn] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({})
  const isLoggedIn = !!currentUser.email;

  React.useEffect(() => {
    auth.checkToken().then((res) => {
      if (res) {
        console.log(res);
        setLoggedIn(true);
        setCurrentUser({name: res.user.name, email: res.user.email})
      }
    })
      .catch((err) => {
        console.log(err);
      })
  }, []);

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
      <AppContext.Provider value={{state, dispatch}}>
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main loggedIn={isLoggedIn}/>}/>
            <Route path="/movies" element={
              <ProtectedRoute redirectTo="/" loggedIn={isLoggedIn}>
                <Movies loggedIn={isLoggedIn}/>
              </ProtectedRoute>}/>
            <Route path="/saved-movies" element={
              <ProtectedRoute redirectTo="/" loggedIn={isLoggedIn}>
                <SavedMovies loggedIn={loggedIn}/>
              </ProtectedRoute>}/>
            <Route path="/profile" element={
              <ProtectedRoute redirectTo="/" loggedIn={isLoggedIn}>
                <Profile
                  loggedIn={isLoggedIn}
                  signOut={handleSignOut}
                  currentUser={currentUser}/>
              </ProtectedRoute>}/>
            <Route path="/signup" element={
              <UserProtectedRoute redirectTo="/movies" loggedIn={isLoggedIn}>
                <Register/>
              </UserProtectedRoute>}/>
            <Route path="/signin" element={
              <UserProtectedRoute redirectTo="/movies" loggedIn={isLoggedIn}>
                <Login />
              </UserProtectedRoute>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </CurrentUserContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
