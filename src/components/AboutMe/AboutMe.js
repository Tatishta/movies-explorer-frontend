import React from 'react';
import './AboutMe.css';
import Title from '../Title/Title';
import TextBlock from '../TextBlock/TextBlock';
import TextBig from '../TextBig/TextBig';
import Avatar from '../../images/ava.jpg';

function AboutMe() {

  return (
    <article className="about-me">
      <Title name="Студент" />
        <div className="about-me__block">
          <div className="about-me__info">
            <TextBig className="about-me__name">
              Таня
            </TextBig>
            <h4 className="about-me__subtitle">
              Фронтенд-разработчик, 28 лет
            </h4>
            <TextBlock>
              Родилась в Иркутске, по специальности экономист и переводчик
              (английский и китайский). С 2021 года учусь на курсе по веб-разработке
              Яндекс Практикума. Перед вами дипломная работа, над которой я
              в данный момент тружусь:)
            </TextBlock>
            <ul className="about-me__social">
              <li>
                <a
                  className="about-me__link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/ttanyachernyshova">Facebook</a>
              </li>
              <li>
                <a
                  className="about-me__link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Tatishta">Github</a>
              </li>
            </ul>
          </div>
            <img
            className="about-me__avatar"
            src={Avatar}
            alt="В кадре автор проекта, девушка улыбается" />
        </div>
    </article>
  );
}

export default AboutMe;
