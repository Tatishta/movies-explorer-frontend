import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";



function MoviesCardList(props) {

  const { movies, onSave, onRemove } = props;
  const displayMovies = movies;



  return (
    <section className="movies-cards">
      <div className="movies-cards__list">
        {displayMovies.map(i => {
          return <MoviesCard key={i.id || i._id} movie={i} onSave={onSave} onRemove={onRemove}/>;
        })}
      </div>
    </section>
  );
}

export default MoviesCardList;
