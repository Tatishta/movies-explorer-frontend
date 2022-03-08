import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

  return (
    <div className="card">
      <img className="card__image" src={props.src} alt={`Кадр из фильма ${props.name}`} />
      <button
        type="button"
        className="card__save">Сохранить</button>
      <p className="card__name">{props.name}</p>
      <span className="card__time">{props.time}</span>
    </div>
  );
}

export default MoviesCard;
