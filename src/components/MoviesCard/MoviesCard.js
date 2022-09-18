import React from 'react';
import './MoviesCard.css';
import {getImageUrl} from "../../utils/MoviesUtils";

function MoviesCard(props) {

  const { movie, onRemove, onSave } = props;

  function handleCardSave() {
    onSave(movie);
  }

  function handleCardRemove() {
    onRemove(movie);
  }

  const movieSrc = movie.image.url ? getImageUrl(movie.image.url) : movie.image
  const movieDuration = `${Math.floor(movie.duration / 60)} ч ${movie.duration % 60} м`;

  return (
    <div className="card">
      <div className="card__overlay">
        <a href={movie.trailerLink} className="card__link" target="_blank" title="Смотреть трейлер">
          <img className="card__image" src={movieSrc} alt={`Кадр из фильма ${movie.nameRU}`} />
        </a>
        { window.location.pathname ==="/movies" ? (movie.isSaved ? (
          <button className="card__button card__saved" type="button" onClick={handleCardSave} />
        ) : (
          <button
            type="button"
            className="card__button card__save"
            onClick={handleCardSave}>Сохранить</button>
          )) : (<></>)}
        {window.location.pathname ==="/saved-movies" ? (
          <button
            type="button"
            className="card__button card__remove"
            onClick={handleCardRemove} />) : (<></>)}
      </div>
      <p className="card__name">{movie.nameRU}</p>
      <span className="card__time">{movieDuration}</span>
    </div>
  );
}

export default MoviesCard;
