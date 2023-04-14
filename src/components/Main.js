function Main() {
  return (
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
  )
}

export default Main;