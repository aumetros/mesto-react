import React from "react";

export function useFormErrors() {
  const [errors, setErrors] = React.useState({
    name: {
      required: true,
      minLenght: true,
      maxLength: true,
    },
    about: {
      required: true,
      minLenght: true,
      maxLength: true,
    },
  });

  return { errors, setErrors };
}
