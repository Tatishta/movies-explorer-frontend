import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonGrey from '../ButtonGrey/ButtonGrey';
import {getInitialCardsCount, getMoreCardsCount} from "../../utils/MoviesUtils";




function MoviesCardList(props) {

  const [cardsCount, setCardsCount] = React.useState(getInitialCardsCount());
  const { currentPage, movies, onSave, onRemove } = props;
  const onMoreClick = () => setCardsCount(cardsCount + getMoreCardsCount());
  const displayMovies = movies.slice(0, cardsCount);


  return (
    <section className="movies-cards">
      <div className="movies-cards__list">
        {displayMovies.map(i => {
          return <MoviesCard key={i.id || i._id} movie={i} onSave={onSave} onRemove={onRemove}/>;
        })}
      </div>
      {(currentPage === 'movies' && cardsCount < movies.length) && (
        <div className="movies__more">
          <ButtonGrey name="Ещё" onClick={onMoreClick}/>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
