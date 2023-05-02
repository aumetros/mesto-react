import React from "react";

function ImagePopup({card, onClose, onEsc}) {

  React.useEffect(() => {
    if (Object.keys(card).length) {
      document.addEventListener("keydown", onEsc);
      return () => document.removeEventListener("keydown", onEsc);
    }
  });

  return (
    <section className={`popup-image popup popup_type_image ${Object.keys(card).length && 'popup_opened'}`}>
      <div className="popup-image__container">
        <img className="popup-image__item" src={card.link} alt={card.name} />
        <p className="popup-image__subtitle">{card.name}</p>

        <button className="popup__close" type="button" onClick={onClose}></button>
      </div>
    </section>
  );
}

export default ImagePopup;
