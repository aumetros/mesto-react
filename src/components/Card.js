function Card(props) {
  return (
    <li className="element">

    <img className="element__foto" src='#' alt='#'/>

    <div className="element__description">
      <p className="element__title"></p>
      <div className="element__like-container">
        <button className="element__like-button" type="button"></button>
        <span className="element__like-counter"></span>
      </div>
    </div>

    <button className="element__trash-button" type="button"></button>

  </li>
  )
}

export default Card;