import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

  const [isSaved, setCardSave] = React.useState(false);

  function handleCardSave() {
    setCardSave(true);
  }

  return (
    <div className="card">
      <div className="card__overlay">
        <img className="card__image" src={props.src} alt={`Кадр из фильма ${props.name}`} />
        { window.location.pathname ==="/movies" ? (isSaved ? (
          <button className="card__button card__saved" />
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
            onClick={props.onRemove} />) : (<></>)}
      </div>
      <p className="card__name">{props.name}</p>
      <span className="card__time">{props.time}</span>
    </div>
  );
}

export default MoviesCard;
