import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "../hooks/useForm";
import { validators } from "../utils/validators";
import { useFormErrors } from "../hooks/useFormErrors";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
  onEsc,
}) {
  const { values, handleChange, setValues } = useForm();
  const { errors, setErrors } = useFormErrors();

  const isAvatarLinkInvalid = Object.values(errors.avatarLink).some(Boolean);
  const isFormInvalid = isAvatarLinkInvalid;

  const avatarLinkErrorClassName = `popup__input popup__input_type_error ${
    isAvatarLinkInvalid && "popup__error_visible"
  }`;

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(values.avatarLink);
  }

  React.useEffect(() => {
    setValues({ ...values, avatarLink: "" });
  }, [isOpen, setValues]);

  React.useEffect(() => {
    const { avatarLink } = values;

    const avatarLinkValidationResult = Object.keys(validators.avatarLink)
      .map((errorKey) => {
        const errorResult = validators.avatarLink[errorKey](avatarLink);
        return { [errorKey]: errorResult };
      })
      .reduce((acc, el) => ({ ...acc, ...el }), {});

    setErrors({ ...errors, avatarLink: avatarLinkValidationResult });
  }, [values, setErrors]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
      isDisabled={false}
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
        onChange={handleChange}
      />
      <span className={avatarLinkErrorClassName}>
        {errors.avatarLink.required && errors.avatarLink.url && "Заполните это поле."}
      {!errors.avatarLink.required && errors.avatarLink.url && 'Введите URL.'}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
