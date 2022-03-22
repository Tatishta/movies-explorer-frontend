import React from 'react';
import FormInput from '../FormInput/FormInput';
import Auth from '../Auth/Auth';

function Register({handleRegister}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password} = state;
    handleRegister(name, email, password)
  }

  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        inputName="name"
        onChange={handleChange} />
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

export default Register;
