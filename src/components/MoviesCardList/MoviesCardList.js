import React from 'react';
import './MoviesCardList.css';
import ButtonGrey from '../ButtonGrey/ButtonGrey';



function MoviesCardList(props) {

  return (
    <section className="movies-cards">
      <div className="movies-cards__list">
        {props.children}
      </div>
      {props.isMoreButtonNeed ? <ButtonGrey name="Ещё"/> : (<></>)}
    </section>
  );
}

export default MoviesCardList;
