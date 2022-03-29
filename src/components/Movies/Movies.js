import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import film1 from '../../images/film1.jpg';
import film2 from '../../images/film2.jpg';
import film3 from '../../images/film3.jpg';
import film4 from '../../images/film4.jpg';
import film5 from '../../images/film5.jpg';
import film6 from '../../images/film6.jpg';
import film7 from '../../images/film7.jpg';
import film8 from '../../images/film8.jpg';
import film9 from '../../images/film9.jpg';
import film10 from '../../images/film10.jpg';
import film11 from '../../images/film11.jpg';
import film12 from '../../images/film12.jpg';

function Movies(props) {

  const { loggedIn } = props;

  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  function handleSidebarOpen() {
    setSidebarOpen(true);
  }

  function handleSidebarClose() {
    setSidebarOpen(false);
  }

  return (
    <section className="movies">
      <Header
        loggedIn={loggedIn}
        onSidebarOpen={handleSidebarOpen} />
      <SearchForm />
      <MoviesCardList isMoreButtonNeed={true}>
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
        <MoviesCard
          src={film4}
          name="Баския: Взрыв реальности"
          time="1ч 17м" />
        <MoviesCard
          src={film5}
          name="Бег это свобода"
          time="1ч 17м" />
        <MoviesCard
          src={film6}
          name="Книготорговцы"
          time="1ч 17м" />
        <MoviesCard
          src={film7}
          name="Когда я думаю о Германии ночью"
          time="1ч 17м" />
        <MoviesCard
          src={film8}
          name="Gimme Danger: История Игги"
          time="1ч 17м" />
        <MoviesCard
          src={film9}
          name="Дженис: Маленькая девочка грустит"
          time="1ч 17м" />
        <MoviesCard
          src={film10}
          name="Соберись перед прыжком"
          time="1ч 17м" />
        <MoviesCard
          src={film11}
          name="Пи Джей Харви: A dog called money"
          time="1ч 17м" />
        <MoviesCard
          src={film12}
          name="По волнам: Искусство звука в кино"
          time="1ч 17м" />
      </MoviesCardList>
      <Sidebar isOpen={isSidebarOpen} closeButton={handleSidebarClose} />
      <Footer />
    </section>
  );
}

export default Movies;
