import React from 'react';
import FormInput from '../FormInput/FormInput';
import Auth from '../Auth/Auth';
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import {clearCachedSearchState} from "../../utils/localStorage";

function Register({handleRegister}) {

  const {values, handleChange, errors, isValid} = useFormAndValidation();

  const handleSubmit = (e) => {
    handleRegister(values.name, values.email, values.password);
  }


  return (
    <Auth
      title="Добро пожаловать!"
      comment="Уже зарегистрированы?"
      buttonBlueName="Войти"
      buttonBlueTo="/signin"
      submit="Зарегистрироваться"
      onSubmit={handleSubmit}
      isValid={isValid}
      values={values}>
      <FormInput
        label="Имя"
        placeholder="Виталий"
        type="text"
        inputName="name"
        value={values.name}
        error={errors.name}
        onChange={handleChange} />
      <FormInput
        label="E-mail"
        placeholder="pochta@yandex.ru"
        type="email"
        inputName="email"
        value={values.email}
        error={errors.email}
        onChange={handleChange} />
      <FormInput
        label="Пароль"
        type="text"
        inputName="password"
        value={values.password}
        error={errors.password}
        onChange={handleChange} />
    </Auth>
  );
}

export default Register;
