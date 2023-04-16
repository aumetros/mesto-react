function PopupWithForm({ title, name, isOpen, onClose, isDisabled, children }) {
  return (
    <section className={`popup-${name} popup ${isOpen && "popup_opened"}`}>
      <div className={`popup-${name}__container`}>
        <form className="popup__form" name={name} noValidate>
          <h2 className="popup__title">{title}</h2>

          {children}

          <button
            className={`popup__button ${
              isDisabled && "popup__button_disabled"
            }`}
            type="submit"
            disabled={isDisabled}
          >
            <span className="popup__button-text">Сохранить</span>
            <span className="popup__button-spinner">Сохранение...</span>
          </button>
        </form>

        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
