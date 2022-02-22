import React from 'react';
import './AboutProject.css';
import Title from '../Title/Title';
import TextBlock from '../TextBlock/TextBlock';

function AboutProject() {

  return (
    <article className="about">
      <Title name="О проекте" />
      <div className="about__block">
        <div className="about__element">
          <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
          <TextBlock>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</TextBlock>
        </div>
        <div className="about__element">
          <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
          <TextBlock>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</TextBlock>
        </div>
      </div>
      <div className="about__table">
          <p className="about__cell about__cell_type_green">
            1 неделя
          </p>
          <p className="about__cell about__cell_type_grey">
            4 недели
          </p>
          <p className="about__cell about__cell_type_black">
            Back-end
          </p>
          <p className="about__cell about__cell_type_black">
            Front-end
          </p>
        </div>
    </article>
  );
}

export default AboutProject;
