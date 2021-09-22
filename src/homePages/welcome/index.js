import React from 'react'
import './styles.scss'
import github from '../../static/icons/github.svg'
import linkedin from '../../static/icons/linkedin.svg'
import arrow from '../../static/images/arrow.png'

function Welcome() {
  return (
    <div className="container-fluid d-flex flex-column text-light container__welcome pt-5 justify-content-center align-items-center">
      <span className="container__title">HOLA! SOY LAZARO</span>
      <span className="container__text">FRONTEND WEB DEVELOPER JR</span>
      <div className="container__icons">
        <img className="container__icon" src={github} alt="Github" />
        <img className="container__icon" src={linkedin} alt="Linkedin" />
      </div>
    </div>
  )
}

export default Welcome
