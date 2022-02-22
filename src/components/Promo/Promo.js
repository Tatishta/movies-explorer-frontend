import React from 'react';
import './Promo.css';
import ButtonGrey from '../ButtonGrey/ButtonGrey';
import TextBig from '../TextBig/TextBig';


function Promo() {

  return (
    <article className="promo">
      <TextBig className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </TextBig>
      <nav className="promo__nav">
        <ButtonGrey name="О проекте" />
        <ButtonGrey name="Технологии" />
        <ButtonGrey name="Студент" />
      </nav>
    </article>
  );
}

export default Promo;
