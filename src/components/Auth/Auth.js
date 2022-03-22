import React from 'react';
import './Auth.css';
import Logo from '../Logo/Logo';
import ButtonBlue from '../ButtonBlue/ButtonBlue';

function Auth(props) {

  return (
    <div className="auth">
      <Logo />
      <h4 className="auth__title">{props.title}</h4>
      <form
        className="auth__form"
        onSubmit={props.onSubmit}>
        {props.children}
        <button
            className="auth__submit"
            type="submit">{props.submit}</button>
      </form>
      <div className="auth__comment">
        <p className="auth__text">{props.comment}</p>
        <ButtonBlue
          name={props.buttonBlueName}
          to={props.buttonBlueTo} />
      </div>
    </div>
  );
}

export default Auth;
