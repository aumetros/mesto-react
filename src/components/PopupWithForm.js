function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  isDisabled,
  children,
  textButton,
  textSpinner,
  onSubmit
}) {
  return (
    <section className={`popup-${name} popup ${isOpen && "popup_opened"}`}>
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
            <span className="popup__button-text">{textButton || 'Сохранить'}</span>
            <span className="popup__button-spinner">{textSpinner || 'Сохранение...'}</span>
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
