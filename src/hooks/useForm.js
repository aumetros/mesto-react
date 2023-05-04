import React from "react";

export function useForm() {
  const [values, setValues] = React.useState({
    name: '',
    about: ''
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues(prevState => ({ ...prevState, [name]: value }));
  };

  return { values, handleChange, setValues };
}
