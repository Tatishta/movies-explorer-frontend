import React from 'react';
import './FormInput.css';


function FormInput(props) {

  const {label, placeholder, inputType, inputName, onChange, error } = props;
  const errorClassName = !!error ? 'form-input__error  form-input__error_active' : 'form__input-error';

  return (
    <label className="form-input">{label}
      <input
        className="form-input__input"
        placeholder={placeholder}
        type={inputType}
        name={inputName}
        onChange={onChange}
        required
      />
      <span className={errorClassName}>{error}</span>
    </label>
  );
}

export default FormInput;
