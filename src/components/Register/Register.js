import React from 'react';
import { useNavigate } from "react-router-dom";
import FormInput from '../FormInput/FormInput';
import Auth from '../Auth/Auth';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin")
  }

  return (
    <Auth
      title="Добро пожаловать!"
      comment="Уже зарегистрированы?"
      buttonBlueName="Войти"
      buttonBlueTo="/signin"
      submit="Зарегистрироваться"
      onSubmit={handleSubmit}>
      <FormInput
        label="Имя"
        placeholder="Виталий"
        type="text"
        inputName="name" />
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

export default Register;
