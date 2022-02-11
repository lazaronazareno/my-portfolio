import React from 'react'
import './styles.scss'
import github from '../../static/icons/github.svg'
import linkedin from '../../static/icons/linkedin.svg'

function Welcome() {
  return (
    <div id="Welcome" className="container-fluid d-flex flex-column text-light welcome-container pt-5 justify-content-center align-items-center">
      <span className="welcome-container__title">LAZARO VEGA SANCHEZ</span>
      <span className="welcome-container__text text-center">FRONTEND WEB DEVELOPER JR</span>
      <div className="welcome-container__icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/lazaronazareno">
          <img className="welcome-container__icon" src={github} alt="Github" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lazaro-vega-sanchez" >
          <img className="welcome-container__icon" src={linkedin} alt="Linkedin" />
        </a>
      </div>
    </div>
  )
}

export default Welcome
