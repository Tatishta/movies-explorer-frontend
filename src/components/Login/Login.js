import React from 'react';

import FormInput from '../FormInput/FormInput';
import Auth from '../Auth/Auth';

function Login() {

  return (
    <Auth
      title="Рады видеть!"
      comment="Ещё не зарегистрированы?"
      buttonBlueName="Регистрация"
      buttonBlueTo="/signup"
      submit="Войти">
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
