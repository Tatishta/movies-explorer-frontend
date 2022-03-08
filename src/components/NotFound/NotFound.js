import React from 'react';
import './NotFound.css';
import ButtonBlue from "../ButtonBlue/ButtonBlue";

function NotFound() {

  return (
    <div className="not-found">
      <div className="not-found__block">
        <p className="not-found__404">
          404
        </p>
        <p className="not-found__text">
          Страница не найдена
        </p>
      </div>
      <ButtonBlue name="Назад" to="/"/>
    </div>
  );
}

export default NotFound;
