function ImagePopup({card, onClose}) {

  return (
    <section className={`popup-image popup popup_type_image ${Object.keys(card).length !== 0 && 'popup_opened'}`}>
      <div className="popup-image__container">
        <img className="popup-image__item" src={card.link} alt={card.name} />
        <p className="popup-image__subtitle">{card.name}</p>

        <button className="popup__close" type="button" onClick={onClose}></button>
      </div>
    </section>
  );
}

export default ImagePopup;
