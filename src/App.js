// import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="page">

      <header className="header">
        <img
          src="<%=require('./images/mesto-logo.svg')%>"
          className="header__logo"
          alt="Логотип сайта Mesto Russia"
        />
        <div className="header__line"></div>
      </header>

      <main>
        <section className="profile">
          <div className="profile__avatar">
            <div className="profile__avatar-overlay"></div>
          </div>

          <div className="profile__info">
            <h1 className="profile__name">#</h1>

            <button className="profile__edit-button" type="button"></button>

            <p className="profile__about"></p>
          </div>

          <button className="profile__add-button" type="button"></button>
        </section>

        <ul className="elements">{/* Контейнер для карточек */}</ul>
      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>

      {/* Секция попапов */
      /* Попап редактирования профиля */}
      <section className="popup-profile popup">
        <div className="popup-profile__container">
          <form
            className="popup__form popup__form-profile-edit"
            name="profile-edit"
            novalidate
          >
            <h2 className="popup-profile__title">Редактировать профиль</h2>

            <input
              type="text"
              id="name-input"
              className="popup__input popup-profile__input popup-profile__input_type_name form-input"
              name="name"
              placeholder="Введите своё имя"
              minlength="2"
              maxlength="40"
              required
            />
            <span className="popup__input popup__input_type_error name-input-error"></span>

            <input
              type="text"
              id="about-input"
              className="popup__input popup-profile__input popup-profile__input_type_about form-input"
              name="about"
              placeholder="Напишите о себе"
              minlength="2"
              maxlength="200"
              required
            />
            <span className="popup__input popup__input_type_error about-input-error"></span>

            <button className="popup__button" type="submit">
              <span className="popup__button-text">Сохранить</span>
              <span className="popup__button-spinner">Сохранение...</span>
            </button>
          </form>

          <button className="popup__close" type="button"></button>
        </div>
      </section>

      {/* Попап добавления новой карточки */}
      <section className="popup-newcard popup">
        <div className="popup-newcard__container">
          <form
            className="popup__form popup-newcard__form-card-add"
            name="card-add"
            novalidate
          >
            <h2 className="popup-newcard__title">Новое место</h2>

            <input
              type="text"
              id="place-name"
              className="popup__input popup-newcard__input popup-newcard__input_type_name form-input"
              name="name"
              placeholder="Название"
              minlength="2"
              maxlength="30"
              required
            />
            <span className="popup__input popup__input_type_error place-name-error"></span>

            <input
              type="url"
              id="link"
              className="popup__input popup-newcard__input popup-newcard__input_type_link form-input"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input popup__input_type_error link-error"></span>

            <button
              className="popup__button popup__button_disabled popup__new-card-button"
              type="submit"
              disabled
            >
              <span className="popup__button-text">Сохранить</span>
              <span className="popup__button-spinner">Сохранение...</span>
            </button>
          </form>

          <button className="popup__close" type="button"></button>
        </div>
      </section>

      {/* Попап просмотра фотографии */}
      <section className="popup-image popup popup_type_image">
        <div className="popup-image__container">
          <img className="popup-image__item" src="#" alt="#" />
          <p className="popup-image__subtitle"></p>

          <button className="popup__close" type="button"></button>
        </div>
      </section>

      {/* Попап подтверждения удаления карточки */}
      <section className="popup-confirm-delete popup">
        <div className="popup-confirm-delete__container">
          <form className="popup__form popup-confirm-delete__form">
            <h2 className="popup-confirm-delete__title">Вы уверены?</h2>
            <button
              className="popup__button popup__confirm-delete-button"
              type="submit"
            >
              Да
            </button>
          </form>

          <button className="popup__close" type="button"></button>
        </div>
      </section>

      {/* Попап редактирования аватара пользователя */}
      <section className="popup-edit-avatar popup">
        <div className="popup-edit-avatar__container">
          <form className="popup__form popup-edit-avatar__form">
            <h2 className="popup-edit-avatar__title">Обновить аватар</h2>

            <input
              type="url"
              id="avatar-link"
              className="popup__input popup-edit-avatar__input form-input"
              name="link"
              placeholder="Введите cсылку на новый аватар"
              required
            />

            <span className="popup__input popup__input_type_error avatar-link-error"></span>

            <button
              className="popup__button popup__button_disabled popup-edit-avatar__button"
              type="submit"
              disabled
            >
              <span className="popup__button-text">Сохранить</span>
              <span className="popup__button-spinner">Сохранение...</span>
            </button>
          </form>

          <button className="popup__close" type="button"></button>
        </div>
      </section>
    </div>
  );
}

export default App;
