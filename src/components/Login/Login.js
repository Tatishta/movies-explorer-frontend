
import React from 'react';
import { useNavigate } from "react-router-dom";
import FormInput from '../FormInput/FormInput';
import Auth from '../Auth/Auth';
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import * as auth from "../../utils/auth";
import {clearCachedSearchState} from "../../utils/localStorage";

function Login({setLoggedIn}) {

  const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();
  const [loginError, setLoginError] = React.useState("");
  const isError = !!loginError;
  const defaultErrorText = 'Что-то пошло не так! Попробуйте ещё раз.';

  const navigate = useNavigate();

  const handleRemoveErrors = () => {
    resetForm();
    setLoginError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values.email, values.password);
    resetForm();
  }

  const handleLogin = (email, password) => {
    auth.authorize(email, password)
      .then((res) => {
        console.log(res)
        if (res?.error) {
          setLoginError(res.error);
        } else {
          clearCachedSearchState();
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginError(defaultErrorText);
      })
  }

  return (
    <Auth
      title="Рады видеть!"
      comment="Ещё не зарегистрированы?"
      buttonBlueName="Регистрация"
      buttonBlueTo="/signup"
      buttonBlueClick={handleRemoveErrors}
      submitName="Войти"
      handleSubmit={handleSubmit}
      isValid={isValid}
      values={values}
      errorText={loginError}
      isError={isError}>
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

export default Login;
