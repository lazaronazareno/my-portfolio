import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

function NotFound() {
  return (
    <div className="container-fluid d-flex flex-column notfound-container justify-content-center align-items-center">
      <h1 className="notfound-title__number">404</h1>
      <h1 className="notfound-title__text text-center">La página a la que intenta acceder no existe o no se encuentra disponible actualmente</h1>
      <Link to="/" className="btn btn-dark btn-lg">Volver al inicio</Link>
    </div>
  )
}

export default NotFound
