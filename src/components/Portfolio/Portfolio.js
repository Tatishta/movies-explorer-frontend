import React from 'react';
import './Portfolio.css';

function Portfolio() {

  return (
    <article className="portfolio">
      <h4 className="portfolio__title">
        Портфолио
      </h4>
        <ul className="portfolio__list">
          <li>
            <a
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
              href="https://praktikum.yandex.ru">
              <p className="portfolio__text">
                Статичный сайт
              </p>
              <div className="portfolio__icon" />
            </a>
          </li>
          <li>
            <a
                className="portfolio__link"
                target="_blank"
                rel="noreferrer"
                href="https://praktikum.yandex.ru">
              <p className="portfolio__text">
                Адаптивный сайт
              </p>
              <div className="portfolio__icon" />
            </a>
          </li>
          <li>
            <a
                className="portfolio__link"
                target="_blank"
                rel="noreferrer"
                href="https://praktikum.yandex.ru">
              <p className="portfolio__text">
                Одностраничное приложение
              </p>
              <div className="portfolio__icon" />
            </a>
          </li>
        </ul>
    </article>
  );
}

export default Portfolio;
