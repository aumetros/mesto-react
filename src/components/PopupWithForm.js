function PopupWithForm({title, name}) {

  return (
    <section className={`popup-${name} popup`}>
        <div className={`popup-${name}__container`}>
          <form
            className="popup__form"
            name={name}
            noValidate
          >
            <h2 className="popup__title">{title}</h2>
            
            <button
              className="popup__button"
              type="submit"
            >
              <span className="popup__button-text">Сохранить</span>
              <span className="popup__button-spinner">Сохранение...</span>
            </button>
          </form>

          <button className="popup__close" type="button"></button>
        </div>
      </section>
  )

}

export default PopupWithForm;