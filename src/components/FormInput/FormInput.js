import React from 'react';
import './FormInput.css';


function FormInput(props) {

  return (
    <label className="form-input">{props.label}
      <input
        className="form-input__input"
        placeholder={props.placeholder}
        type={props.type}
        name={props.inputName}
        onChange={props.onChange}
        required
      />
      <span className="form-input__error"></span>
    </label>
  );
}

export default FormInput;
