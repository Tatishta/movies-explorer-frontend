import React from 'react';
import './Auth.css';
import Logo from '../Logo/Logo';
import ButtonBlue from '../ButtonBlue/ButtonBlue';

function Auth(props) {

  const {title, handleSubmit, submitName, comment, buttonBlueName, children, buttonBlueTo, buttonBlueClick, isValid, errorText, isError} = props;

  return (
    <div className="auth">
      <Logo />
      <h4 className="auth__title">{title}</h4>
      <form
        className="auth__form"
        onSubmit={handleSubmit}
        noValidate>
        {children}
        <span className={`auth__error ${!isError ? '':'auth__error_visible'}`}>{errorText}</span>
        <button
            className={`auth__submit ${!isValid ? 'auth__submit_disabled' : ''}`}
            type="submit" disabled={!isValid}>{submitName}</button>
      </form>
      <div className="auth__comment">
        <p className="auth__text">{comment}</p>
        <ButtonBlue
          name={buttonBlueName}
          to={buttonBlueTo}
          onClick={buttonBlueClick}/>
      </div>
    </div>
  );
}

export default Auth;
