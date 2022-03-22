import React from 'react';
import { useNavigate } from "react-router-dom";
import FormInput from '../FormInput/FormInput';
import Auth from '../Auth/Auth';

function Login() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/movies")
  }

  return (
    <Auth
      title="Рады видеть!"
      comment="Ещё не зарегистрированы?"
      buttonBlueName="Регистрация"
      buttonBlueTo="/signup"
      submit="Войти"
      onSubmit={handleSubmit}>
      <FormInput
        label="E-mail"
        placeholder="pochta@yandex.ru"
        type="email"
        inputName="email" />
      <FormInput
        label="Пароль"
        type="text"
        inputName="password" />
    </Auth>
  );
}

export default Login;
