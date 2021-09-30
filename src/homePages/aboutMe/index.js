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

const skills = [ 
  { name: "Html",
    description: "HTML es el lenguaje estándar para crear páginas web.",
    img: html,
    alt : "html icon"
  },
  { name: "Css",
    description: "CSS es el lenguaje para estilizar un documento HTML",
    img: css,
    alt : "css icon"
  },
  { name: "JavaScript",
    description: "Js, orientado a objetos, permite 'darle vida' a la página",
    img: js,
    alt : "js icon"
  },
  { name: "Git",
    description: "Git es un software de control de versiones",
    img: git,
    alt : "js icon"
  },
]

const learningSkills = [
  { name: "NodeJs",
  description: "HTML es el lenguaje estándar para crear páginas web.",
  img: node,
  alt : "node js nodejs icon"
  },
  { name: "MySql",
    description: "HTML es el lenguaje estándar para crear páginas web.",
    img: sql,
    alt : "mysql sql icon"
  }
]


function AboutMe() {
  const [show, setShow] = useState(-1)

  const handleClick = (id) => {
    setShow(id)
  }

  const handleBack = () => {
    setShow(5)
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
        { skills.map( (element, index) => (
          <div className="about-container__card">
            <div onClick={() => handleClick(index)}>
              <img className={`${show !== index ? "about-container__icon" : "about-container__show-not"}`} src={element.img} alt={element.alt}/>
            </div>
            <div className={`about-container__hidden-card ${show !== index ? "" : "about-container__show text-light"}`}>
              <span>{element.description}</span>
              <button className="btn btn-warning" onClick={() => handleBack()}>Regresar</button>
            </div>
          </div>
        ))}
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
          { learningSkills.map( (element, index) => (
          <div className="about-container__card">
            <div onClick={() => handleClick(index)}>
              <img className={`${show !== index ? "about-container__icon" : "about-container__show-not"}`} src={element.img} alt={element.alt}/>
            </div>
            <div className={`about-container__hidden-card ${show !== index ? "" : "about-container__show text-light"}`}>
              <span>{element.description}</span>
              <button className="btn btn-warning" onClick={() => handleBack()}>Regresar</button>
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
