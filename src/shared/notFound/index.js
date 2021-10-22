import React from 'react'
import './styles.scss'

function NotFound() {
  return (
    <div className="container-fluid d-flex flex-column notfound-container justify-content-center align-items-center">
      <h1>Pagina no encontrada</h1>
      <button className="btn btn-dark">volver al inicio</button>
    </div>
  )
}

export default NotFound
