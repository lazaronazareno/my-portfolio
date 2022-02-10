import React from 'react'
import './styles.scss'

function Header() {
  return (
    <header className='container-fluid d-flex position-fixed container__header text-center align-items-center' >
      <div className="container d-flex container__logo">
        <a className="container__logo-a" href="#Welcome">Portfolio</a>
      </div>
      <div className='justify-self-end container__menu'>
        <a href="#About">Sobre Mí / Conocimientos</a>
        <a href="#Works">Proyectos</a>
        <a href="#Bonus">Certifícados</a>
        <a href="#Contact">Contacto</a>
      </div>
    </header>
  )
}

export default Header
