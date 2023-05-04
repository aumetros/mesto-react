import React from "react";

export function useForm(inputValues={
  name: '',
  about: ''
}) {
  const [values, setValues] = React.useState(inputValues);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues(prevState => ({ ...prevState, [name]: value }));
  };

  return { values, handleChange, setValues };
}
