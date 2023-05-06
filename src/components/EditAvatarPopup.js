import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "../hooks/useForm";
import { validators } from "../utils/validators";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
  onEsc,
}) {
  const { values, handleChange, setValues } = useForm();

  const [errors, setErrors] = React.useState({
    avatarLink: {
      required: true,
      url: true,
    },
  });

  const isAvatarLinkInvalid = Object.values(errors.avatarLink).some(Boolean);
  const isFormInvalid = isAvatarLinkInvalid;

  const [visibilityValidate, setVisibilityValidate] = React.useState(false);

  const avatarLinkErrorClassName = `popup__input popup__input_type_error ${
    visibilityValidate && isAvatarLinkInvalid && "popup__error_visible"
  }`;

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(values.avatarLink);
  }

  function handleChangeInput(e) {
    handleChange(e);
    setVisibilityValidate(true);
  }

  function showAvatarLinkErrors() {
    if (visibilityValidate) {
      return (
        <>
          {errors.avatarLink.required &&
            errors.avatarLink.url &&
            "Заполните это поле."}
          {!errors.avatarLink.required &&
            errors.avatarLink.url &&
            "Введите URL."}
        </>
      );
    }
  }

  React.useEffect(() => {
    setValues({ avatarLink: "" });
    setVisibilityValidate(false);
  }, [isOpen, setValues]);

  React.useEffect(() => {
    const { avatarLink } = values;

    const avatarLinkValidationResult = Object.keys(validators.avatarLink)
      .map((errorKey) => {
        const errorResult = validators.avatarLink[errorKey](avatarLink);
        return { [errorKey]: errorResult };
      })
      .reduce((acc, el) => ({ ...acc, ...el }), {});

    setErrors({ avatarLink: avatarLinkValidationResult });
  }, [values, setErrors]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      onEsc={onEsc}
      isInvalid={isFormInvalid}
    >
      <input
        type="url"
        id="avatarLink"
        className="popup__input popup-edit-avatar__input"
        name="avatarLink"
        placeholder="Введите cсылку на новый аватар"
        value={values.avatarLink}
        onChange={handleChangeInput}
      />
      <span className={avatarLinkErrorClassName}>{showAvatarLinkErrors()}</span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
