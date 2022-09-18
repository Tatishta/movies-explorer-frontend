import React from 'react';

export function useFormAndValidation(defaultValues = {}) {
  const [ values, setValues ] = React.useState(defaultValues);
  const [ errors, setErrors ] = React.useState({});
  const [ isValid, setIsValid ] = React.useState(false);

  const handleChange = (event) => {
    const target = event.currentTarget;
    const {name, value} = target;
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: target.validationMessage});
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = React.useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  const isSameProfileData = (currentUser, values) => {
    return values.name === currentUser.name && values.email === currentUser.email;
  }

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid, isSameProfileData };
}
