import React from 'react';
import './Promo.css';
import ButtonGrey from '../ButtonGrey/ButtonGrey';
import TextBig from '../TextBig/TextBig';
import {HashLink} from 'react-router-hash-link';



function Promo() {

  return (
    <article className="promo">
      <TextBig className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </TextBig>
      <nav className="promo__nav">
        <HashLink className="promo__navlink" to="#about">
          <ButtonGrey name="О проекте" to="#about"/>
        </HashLink>
        <HashLink className="promo__navlink" to="#techs">
          <ButtonGrey name="Технологии" to="#techs"/>
        </HashLink>
        <HashLink className="promo__navlink" to="#about-me">
          <ButtonGrey name="Студент" />
        </HashLink>
      </nav>
    </article>
  );
}

export default Promo;
