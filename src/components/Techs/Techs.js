import React from 'react';
import './Techs.css';
import Title from '../Title/Title';
import TextBlock from '../TextBlock/TextBlock';
import TextBig from '../TextBig/TextBig';

function Techs() {

  return (
    <article className="techs">
      <Title name="Технологии" />
      <div className="techs__block">
        <TextBig className="techs__title">
          7 технологий
        </TextBig>
        <TextBlock>
          На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.
        </TextBlock>
      </div>
      <ul className="techs__cells">
        <li className="techs__cell">
          HTML
        </li>
        <li className="techs__cell">
          CSS
        </li>
        <li className="techs__cell">
          JS
        </li>
        <li className="techs__cell">
          React
        </li>
        <li className="techs__cell">
          Git
        </li>
        <li className="techs__cell">
          Express.js
        </li>
        <li className="techs__cell">
          mongoDB
        </li>
      </ul>
    </article>
  );
}

export default Techs;
