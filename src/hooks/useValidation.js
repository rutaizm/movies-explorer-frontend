import { useCallback, useState } from "react";

function useValidation(formSelector) {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState({});

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest(formSelector).checkValidity());
  }

  const resetForms = useCallback(
    (updatedValues = {}, updatedErrors = {}, updatedIsValid = false) => {
      setValues(updatedValues);
      setErrors(updatedErrors);
      setIsValid(updatedIsValid);
    },
    [setValues, setErrors, setIsValid]
  );
  return { values, errors, isValid, handleChange, resetForms };
}

export default useValidation;