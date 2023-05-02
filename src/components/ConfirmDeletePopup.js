import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup({ isOpen, onClose, onConfirmDelete, isLoading, onEsc }) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirmDelete();
  }

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", onEsc);
      return () => document.removeEventListener("keydown", onEsc);
    }
  }, [isOpen, onEsc]);

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirm-delete"
      isOpen={isOpen}
      onClose={onClose}
      isDisabled={false}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      textButton="Удалить"
      textSpinner="Удаление..."
    />
  );
}

export default ConfirmDeletePopup;
