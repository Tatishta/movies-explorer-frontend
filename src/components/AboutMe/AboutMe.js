import React from 'react';
import './AboutMe.css';
import Title from '../Title/Title';
import TextBlock from '../TextBlock/TextBlock';
import TextBig from '../TextBig/TextBig';
import Avatar from '../../images/avatar.jpg';

function AboutMe() {

  return (
    <article className="about-me">
      <Title name="Студент" />
        <div className="about-me__block">
          <div className="about-me__info">
            <TextBig className="about-me__name">
              Виталий
            </TextBig>
            <h4 className="about-me__subtitle">
              Фронтенд-разработчик, 30 лет
            </h4>
            <TextBlock>
              Я родился и живу в Саратове, закончил факультет экономики СГУ.
              У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С&nbsp;2015 года работал в компании
              «СКБ Контур». После того, как прошёл курс по веб-разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
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
