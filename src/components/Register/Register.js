import React from 'react';
import FormInput from '../FormInput/FormInput';
import Auth from '../Auth/Auth';
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import {clearCachedSearchState} from "../../utils/localStorage";
import * as auth from "../../utils/auth";
import {useNavigate} from "react-router";


function Register() {

  const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();
  const [registerError, setRegisterError] = React.useState("");
  const isError = !!registerError;
  const defaultErrorText = 'Что-то пошло не так! Попробуйте ещё раз.';

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values.name, values.email, values.password);
  }

  const handleRemoveErrors = () => {
    resetForm();
    setRegisterError("");
  }

  const handleRegister = (name, email, password) => {
    auth.register(name, email, password)
      .then((res) => {
        if (res.email) {
          clearCachedSearchState();
          navigate("/movies");
        } else if (res?.error) {
          setRegisterError(res.error);
        } else {
          console.log(res)
          setRegisterError(defaultErrorText)
        }
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          return setRegisterError('Пользователь с таким email уже есть!')
        } else {
          setRegisterError(defaultErrorText);
        }
      })
  };


  return (
    <Auth
      title="Добро пожаловать!"
      comment="Уже зарегистрированы?"
      buttonBlueName="Войти"
      buttonBlueTo="/signin"
      buttonBlueClick={handleRemoveErrors}
      submitName="Зарегистрироваться"
      handleSubmit={handleSubmit}
      isValid={isValid}
      values={values}
      errorText={registerError}
      isError={isError}>
      <FormInput
        label="Имя"
        placeholder="Виталий"
        type="text"
        inputName="name"
        value={values.name}
        error={errors.name}
        pattern="[a-zA-Zа-яёА-ЯЁ\s\-]*"
        onChange={handleChange} />
      <FormInput
        label="E-mail"
        placeholder="pochta@yandex.ru"
        type="email"
        inputName="email"
        pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
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
