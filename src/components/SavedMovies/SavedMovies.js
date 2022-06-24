import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import {projectApi} from "../../utils/MainApi";
import {useAppContext} from "../../contexts/AppContext";
import {filterMovies} from "../../utils/MoviesUtils";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const { state: { isLoading, savedMovies }, dispatch } = useAppContext();
  const [searchParams, setSearchParams] = React.useState(null);
  const { loggedIn } = props;

  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  function handleSidebarOpen() {
    setSidebarOpen(true);
  }

  function handleSidebarClose() {
    setSidebarOpen(false);
  }

  React.useEffect(() => {
    dispatch({ type: 'setIsLoading', payload: { isLoading: true }});
    projectApi.fetchSavedMovies()
      .then((res) => {
        dispatch({ type: 'savedMoviesLoaded', payload: { savedMovies: res }});
      })
      .catch((err) => {
        console.error(err)
        dispatch({ type: 'setIsLoading', payload: { isLoading: false }});
      })
  }, [dispatch]);

  function removeSavedMovie(movie) {
    projectApi.removeMovie(movie._id)
      .then(() => dispatch({ type: 'unSaveMovie', payload: { movieId: movie.movieId }}))
      .catch(err => console.error(err));
  }

  const mergedMovies = savedMovies?.movies?.map(it => ({...it, isSaved: true})) || [];
  const filteredMovies = searchParams ? filterMovies(mergedMovies, searchParams.searchQuery, searchParams.isShort) : mergedMovies;

  return (
    <section className="movies">
      <Header
        loggedIn={loggedIn}
        onSidebarOpen={handleSidebarOpen} />
      <SearchForm onSubmit={setSearchParams} allowSubmitWithoutQuery={true}/>
      {isLoading ? (<Preloader/>) : (
        <>
        {(!mergedMovies || !mergedMovies.length) && (
            <p className="movies__message">Вы еще ничего не сохранили. Попробуйте, вам понравится!</p>
          )}
          {(!!filteredMovies && !!filteredMovies.length) && (
            <MoviesCardList currentPage="saved-movies" movies={filteredMovies} onSave={null}
                            onRemove={removeSavedMovie}/>
          )}
          {(mergedMovies && (!filteredMovies || !filteredMovies.length)) && (
            <p className="movies__message">К сожалению, мы ничего не нашли. Попробуйте еще раз!</p>
          )}
        </>
        )}
      <Sidebar isOpen={isSidebarOpen} closeButton={handleSidebarClose} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
