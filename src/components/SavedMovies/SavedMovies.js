import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import film1 from '../../images/film1.jpg';
import film2 from '../../images/film2.jpg';
import film3 from '../../images/film3.jpg';

function SavedMovies() {

  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  function handleSidebarOpen() {
    setSidebarOpen(true);
  }

  function handleSidebarClose() {
    setSidebarOpen(false);
  }

  return (
    <section className="movies">
      <Header onSidebarOpen={handleSidebarOpen} />
      <SearchForm />
      <MoviesCardList isMoreButtonNeed={false}>
        <MoviesCard
          src={film1}
          name="33 слова о дизайне"
          time="1ч 17м" />
        <MoviesCard
          src={film2}
          name="Киноальманах «100 лет дизайна»"
          time="1ч 17м" />
        <MoviesCard
          src={film3}
          name="В погоне за Бенкси"
          time="1ч 17м" />
      </MoviesCardList>
      <Sidebar isOpen={isSidebarOpen} closeButton={handleSidebarClose} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
