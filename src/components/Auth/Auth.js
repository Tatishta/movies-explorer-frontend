import React from 'react';
import './Auth.css';
import Logo from '../Logo/Logo';
import ButtonBlue from '../ButtonBlue/ButtonBlue';

function Auth(props) {

  const {title, onSubmit,  submit, comment, buttonBlueName, children, buttonBlueTo, values, isValid} = props;

  const defaultError = 'Произошла ошибка. Попробуйте еще раз!';

  const [status, setStatus] = React.useState({ ok: true, text: defaultError });

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values)
      .then(res => {
        setStatus({
          ok: true,
          text: props.succesText || 'Успешно!',
        })
      })
      .catch(err => {
        setStatus({
          ok: false,
          text: err.message || defaultError,
        })
      })
  }

  return (
    <div className="auth">
      <Logo />
      <h4 className="auth__title">{title}</h4>
      <form
        className="auth__form"
        onSubmit={handleSubmit}
        noValidate>
        {children}
        <span className={`auth__error ${status.ok?'':'auth__error_visible'}`}>{status.text}</span>
        <button
            className={`auth__submit ${!isValid ? 'auth__submit_disabled' : ''}`}
            type="submit" disabled={!isValid}>{submit}</button>
      </form>
      <div className="auth__comment">
        <p className="auth__text">{comment}</p>
        <ButtonBlue
          name={buttonBlueName}
          to={buttonBlueTo} />
      </div>
    </div>
  );
}

export default Auth;
