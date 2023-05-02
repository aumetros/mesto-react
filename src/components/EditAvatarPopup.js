import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
  onEsc,
}) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
    avatarRef.current.value = "";
  }

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
    >
      <input
        type="url"
        id="avatar-link"
        className="popup__input popup-edit-avatar__input form-input"
        name="link"
        placeholder="Введите cсылку на новый аватар"
        required
        ref={avatarRef}
      />
      <span className="popup__input popup__input_type_error avatar-link-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
