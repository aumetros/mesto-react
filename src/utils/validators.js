export const validators = {
  name: {
    required: (value) => {
      return value === "";
    },
    minLenght: (value) => {
      return value.length < 2;
    },
    maxLength: (value) => {
      return value.length > 200;
    },
  },
  about: {
    required: (value) => {
      return value === "";
    },
    minLenght: (value) => {
      return value.length < 2;
    },
    maxLength: (value) => {
      return value.length > 200;
    },
  },
};