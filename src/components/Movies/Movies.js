import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import {useAppContext} from "../../contexts/AppContext";
import {getMovies} from "../../utils/MoviesApi";
import {filterMovies, mergeMovies} from "../../utils/MoviesUtils";
import {projectApi} from "../../utils/MainApi";


function Movies(props) {
  const { state: { movies, savedMovies, searchParams }, dispatch } = useAppContext();
  const { searchQuery, isShort } = (searchParams || {});

  const { loggedIn } = props;

  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  function handleSidebarOpen() {
    setSidebarOpen(true);
  }

  function handleSidebarClose() {
    setSidebarOpen(false);
  }

  function handleSearchSubmit(searchParams) {
    const fetchMoviesPromise = movies ? Promise.resolve(movies) : getMovies();
    const fetchSavedMoviesPromise = savedMovies ? Promise.resolve(savedMovies) : projectApi.fetchSavedMovies();
    dispatch({ type: 'setIsLoading', payload: { isLoading: true }});
    Promise.all([fetchMoviesPromise, fetchSavedMoviesPromise])
      .then(([moviesRes, savedMoviesRes]) => {
        dispatch({ type: 'onSearchFormSubmit', payload: { movies: moviesRes, savedMovies: savedMoviesRes, searchParams }});
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: 'setIsLoading', payload: { isLoading: false }});
      })
  }

  const filteredMovies = filterMovies(movies, searchQuery, isShort);
  const displayMovies = mergeMovies(filteredMovies, savedMovies?.movies);

  function onSave(movie) {
    if (movie.isSaved) {
      const savedMovie = savedMovies?.movies?.find(it => it.movieId === movie.id);
      if (savedMovie) {
        console.error('Вы каким-то образом сохраняете уже сохранённый фильм!');
      }
    } else {
      projectApi.saveMovie(movie)
        .then((res) => dispatch({ type: 'saveMovie', payload: { movie: res.movie }}))
        .catch(err => console.error(err));
    }
  }

  return (
    <section className="movies">
      <Header
        loggedIn={loggedIn}
        onSidebarOpen={handleSidebarOpen} />
      <SearchForm
        defaultSearchQuery={searchQuery}
        defaultIsShort={isShort}
        onSubmit={handleSearchSubmit}/>
      <>
        {!!searchQuery && (!displayMovies || !displayMovies.length) && (
          <p className="movies__message">К сожалению, мы ничего не нашли. Попробуйте еще раз!</p>
        )}
        {!!searchQuery && (!!displayMovies && !!displayMovies.length) && (
          <MoviesCardList currentPage="movies" movies={displayMovies} onSave={onSave}/>
        )}
      </>
      <Sidebar isOpen={isSidebarOpen} closeButton={handleSidebarClose} />
      <Footer />
    </section>
  );
}

export default Movies;
