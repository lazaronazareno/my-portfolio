import React from 'react'
import './styles.scss'
import github from '../../static/icons/github.svg'
import linkedin from '../../static/icons/linkedin.svg'
import arrow from '../../static/images/arrow.png'

function Welcome() {
  return (
    <div className="container-fluid d-flex flex-column text-light welcome-container pt-5 justify-content-center align-items-center">
      <span className="welcome-container__title">LAZARO VEGA SANCHEZ</span>
      <span className="welcome-container__text">FRONTEND WEB DEVELOPER JR</span>
      <div className="welcome-container__icons">
        <img className="welcome-container__icon" src={github} alt="Github" />
        <img className="welcome-container__icon" src={linkedin} alt="Linkedin" />
      </div>
    </div>
  )
}

export default Welcome
