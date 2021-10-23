import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

function BonusPage() {
  return (
    <div className="container-fluid d-flex flex-column bonus-container justify-content-center align-items-center">
      <h1 className="bonus-container__title">Bonus Track</h1>
      <span className="p-2 text-center bonus-container__text">Una pagina excentrica que me gustaria hacer en un futuro de mejor manera, más "elegante", que a medida que avance mis conocimientos pueda mejorar y hacerla mi pagina principal</span>
      <Link to="/alternative" className="bonus-container__button btn btn-outline-dark btn-lg">Ir a la pagina alternativa</Link>
    </div>
  )
}

export default BonusPage
