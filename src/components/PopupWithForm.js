import React from "react";

function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  isDisabled,
  children,
  textButton,
  textSpinner,
  onSubmit,
  isLoading,
  onEsc
}) {
  const buttonTextClassName = `popup__button-text ${
    isLoading ? "popup__button-text_hidden" : ""
  }`;

  const buttonSpinnerClassName = `popup__button-spinner ${
    isLoading ? "popup__button-spinner_visible" : ""
  }`;

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", onEsc);
      return () => document.removeEventListener("keydown", onEsc);
    }
  }, [isOpen, onEsc]);

  return (
    <section
      className={`popup-${name} popup ${isOpen && "popup_opened"}`}
      onClick={onClose}
    >
      <div className={`popup__container`}>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>

          {children}

          <button
            className={`popup__button ${
              isDisabled && "popup__button_disabled"
            }`}
            type="submit"
            disabled={isDisabled}
          >
            <span className={buttonTextClassName}>
              {textButton || "Сохранить"}
            </span>
            <span className={buttonSpinnerClassName}>
              {textSpinner || "Сохранение..."}
            </span>
          </button>
        </form>

        <button className="popup__close" type="button"></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
