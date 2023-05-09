import React from "react";
import { validators } from "../utils/validators";

export function useValidation(value, key) {

  const [validationResult, setvalidationResult] = React.useState({});

  React.useEffect(() => {
    const result = Object.keys(validators[key])
      .map((errorKey) => {
        const errorResult = validators[key][errorKey](value);
        return { [errorKey]: errorResult };
      })
      .reduce((acc, el) => ({ ...acc, ...el }), {});

      setvalidationResult(result)

  }, [value, key, setvalidationResult]);

  return validationResult;
}
