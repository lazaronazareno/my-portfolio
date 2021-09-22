import React from 'react'
import './styles.scss'

function Header() {
  return (
    <header className='container-fluid d-flex position-fixed container__header text-center align-items-center' >
      <div className="container d-flex container__logo">
        <span>Portfolio</span>
      </div>
      <div className='justify-self-end container__menu'>
        <span>Sobre Mí</span>
        <span>Conocimientos</span>
        <span>Contacto</span>
        <span>Página alternativa</span>
      </div>
    </header>
  )
}

export default Header
