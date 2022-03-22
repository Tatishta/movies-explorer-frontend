import React from 'react';
import { useNavigate } from "react-router-dom";
import FormInput from '../FormInput/FormInput';
import Auth from '../Auth/Auth';

function Login({handleLogin}) {

  const [state, setState] = React.useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const reset = () => {
    setState({
      email:'',
      password:'',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.email || !state.password) {
      return;
    }

    handleLogin(state.email, state.password)
      .then(reset)
      .then(() => navigate("/movies"))
      .catch((e) => {
        console.log(e);
      });
  };

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
        inputName="email"
        onChange={handleChange} />
      <FormInput
        label="Пароль"
        type="text"
        inputName="password"
        onChange={handleChange} />
    </Auth>
  );
}

export default Login;
