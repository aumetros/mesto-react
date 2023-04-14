function Main() {

  function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector('.popup-edit-avatar');
    popupEditAvatar.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
   const popupEditProfile = document.querySelector('.popup-profile');
   popupEditProfile.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popupAddNewCard = document.querySelector('.popup-newcard');
    popupAddNewCard.classList.add('popup_opened');
  }


  return (
    <main>
    <section className="profile">
      <div className="profile__avatar" onClick={handleEditAvatarClick}>
        <div className="profile__avatar-overlay"></div>
      </div>

      <div className="profile__info">
        <h1 className="profile__name">#</h1>

        <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>

        <p className="profile__about"></p>
      </div>

      <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
    </section>

    <ul className="elements">{/* Контейнер для карточек */}</ul>
  </main>
  )
}

export default Main;