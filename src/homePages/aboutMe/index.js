import React, { useState } from 'react'
import './styles.scss'
import info from '../../static/info'
import html from '../../static/icons/html.png'
import css from '../../static/icons/css.png'
import js from '../../static/icons/js.png'
import git from '../../static/icons/git.png'
import me from '../../static/images/yo.jpg'
import efset from '../../static/images/efset.png'
import n5 from '../../static/images/n5.png'
import node from '../../static/images/nodejs.png'
import sql from '../../static/images/mysql.png'


function AboutMe() {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className="container-fluid d-flex flex-column about-container justify-content-center align-items-center">
      <div className="about-container__profile d-flex">
        <img className="about-container___profile-img" src={me} alt="Lázaro Vega Sanchez profile" /> 
        <div className="d-flex flex-column about-container__info">
          <h1 className="about-container__title ps-3">SOBRE MÍ</h1>
          <ul >
          <li className="fs-4">{info.name}</li>
          <li className="fs-4">{info.date}</li>
          <li className="fs-4">{info.place}</li>
          <li className="fs-4">{info.about}</li>
          </ul>
        </div>
      </div>
      <h1 className="about-container__title">CONOCIMIENTOS:</h1>
      <div className="d-flex about-container__skills justify-content-evenly">
        <div className="about-container__card" onClick={() => handleClick()}>
          <img className="about-container__icon" src={html} alt="html icon"/>
          <span className="about-container__hidden">Html</span>
        </div>
        <div className="about-container__card">
          <img className="about-container__icon" src={css} alt="css icon"/>
          <span className="about-container__hidden">Css</span>
        </div>
        <div className="about-container__card">
          <img className="about-container__icon" src={js} alt="js icon"/>
          <span className="about-container__hidden">JavaScript</span>
        </div>
        <div className="about-container__card">
          <img className="about-container__icon" src={git} alt="git icon"/>
          <span className="about-container__hidden">Git</span>
        </div>
      </div>
      <div className="d-flex about-container__skills justify-content-evenly">
        <div>
          <span className="about-container__title">IDIOMAS :</span>
          <div className="d-flex justify-content-evenly">
            <div className="about-container__card">
              <img className="about-container__icon" src={efset} alt=" official efset test certificate"/>
              <span className="about-container__hidden">Ingles C1 Avanzado</span>
            </div>
            <div className="about-container__card">
              <img className="about-container__icon" src={n5} alt="jlpt n5"/>
              <span className="about-container__hidden">JLPT N5* Pendiente</span>
            </div>
          </div>
        </div>
        <div>
          <span className="about-container__title">APRENDIENDO :</span>
          <div className="d-flex justify-content-evenly">
            <div className="about-container__card">
              <img className="about-container__icon" src={node} alt="node js nodejs icon"/>
              <span className="about-container__hidden">Node JS</span>
            </div>
            <div className="about-container__card">
              <img className="about-container__icon" src={sql} alt="mysql sql icon"/>
              <span className="about-container__hidden">MySql</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
