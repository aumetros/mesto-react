import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useForm } from "../hooks/useForm";

const validators = {
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

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading, onEsc }) {
  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, setValues } = useForm();

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

  const isUserNameInvalid = Object.values(errors.name).some(Boolean);
  const isUserAboutInvalid = Object.values(errors.about).some(Boolean);
  const isFormValid = !isUserNameInvalid && !isUserAboutInvalid;

  const userNameErrorClassName = `popup__input popup__input_type_error ${
    isUserNameInvalid && "popup__error_visible"
  }`;

  const userAboutErrorClassName = `popup__input popup__input_type_error ${
    isUserAboutInvalid && "popup__error_visible"
  }`;

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      about: values.about,
    });
  }

  React.useEffect(() => {
    setValues({
      name: currentUser.name || "",
      about: currentUser.about || "",
    });
  }, [currentUser, isOpen, setValues]);

  React.useEffect(() => {
    const { name, about } = values;

    const userNameValidationResult = Object.keys(validators.name)
      .map((errorKey) => {
        const errorResult = validators.name[errorKey](name);
        return { [errorKey]: errorResult };
      })
      .reduce((acc, el) => ({ ...acc, ...el }), {});

    const userAboutValidationResult = Object.keys(validators.about)
      .map((errorKey) => {
        const errorResult = validators.about[errorKey](about);
        return { [errorKey]: errorResult };
      })
      .reduce((acc, el) => ({ ...acc, ...el }), {});

    setErrors({
      name: userNameValidationResult,
      about: userAboutValidationResult,
    });
  }, [values, setErrors]);

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      isDisabled={false}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      onEsc={onEsc}
      isValid={isFormValid}
    >
      <input
        type="text"
        id="name-input"
        className="popup__input popup-profile__input"
        name="name"
        placeholder="Введите своё имя"       
        value={values.name || ""}
        onChange={handleChange}
      />
      <span className={userNameErrorClassName}>
        {errors.name.required && errors.name.minLenght && "Заполните это поле."}
        {!errors.name.required && errors.name.minLenght && 'Текст должен быть не короче 2 симв.'}
        {errors.name.maxLength && 'Текст должен быть не длинее 40 симв.'}
      </span>
      <input
        type="text"
        id="about-input"
        className="popup__input popup-profile__input"
        name="about"
        placeholder="Напишите о себе"
        value={values.about || ""}
        onChange={handleChange}
      />
      <span className={userAboutErrorClassName}>
        {errors.about.required && errors.about.minLenght && "Заполните это поле."}
        {!errors.about.required && errors.about.minLenght && 'Текст должен быть не короче 2 симв.'}
        {errors.about.maxLength && 'Текст должен быть не длинее 200 симв.'}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
