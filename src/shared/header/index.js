import React, { useState } from 'react'
import './styles.scss'
import menu from '../../static/icons/menu1.png'
import cerrar from '../../static/icons/cerrar1.png'

function Header() {
  const [menuActive, setMenuState] = useState(false);
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
      <div className="header-responsive-burger" onClick={() => setMenuState(!menuActive)}>
        <img alt="icon" className="header-responsive-img" src={`${menuActive ? cerrar : menu}`}/>
      </div>
      <div className={`container__header-responsive ${menuActive ? "container__header-responsive-show" : ""}`}>
        <a href="#About">Sobre Mí / Conocimientos</a>
        <a href="#Works">Proyectos</a>
        <a href="#Bonus">Certifícados</a>
        <a href="#Contact">Contacto</a>
      </div>
    </header>
  )
}


export default Header
