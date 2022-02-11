import React from 'react'
import alkemy from '../../static/images/certificado-alkemy.png'
import argp from '../../static/images/certificado-argentina-programa.png'
import wolox from '../../static/images/certificado-wolox.png'
import './styles.scss'

const Studies = [
  {
    link: "https://drive.google.com/file/d/15s58jwx0-jXI3vGznxtKic5jZ92XiR8u/view",
    img: wolox,
    classname: "theme-violet",
    name:"Capacitacion Wolox-Empujar",
    description: "Formación intensiva en Desarrollo Web Front End(HTML, CSS, JavaScript y React), trabajo con metodologías ágiles y desarrollo de habilidades socioemocionales y competencias laborales.",
  },
  {
    link: "https://assets.alkemy.org/certificates/auth0%7C60f9cfed31de08001aba5a5f/16b3f3cf-65e3-4f8e-9fdf-6d8e68d415e1.pdf",
    img: alkemy,
    classname: "theme-light",
    name:"Certificación Alkemy",
    description: "Perfil Job-Ready React: Autentificación de usuarios, Integración con API`s externas, Manejo del estado y diseño de vistas. Proyecto de pagina web para una ONG con NodeJs y ReactJs, trabajo en equipo con metodologia SCRUM",
  },
  {
    link: "https://mumuki.io/argentina-programa/certificates/verify/BC_2JZb6_QrrgJlQ",
    img: argp,
    classname: "theme-lightblue",
    name:"Certificacion #SéProgramar",
    description: "Conocimientos basico de Javascript y Ruby. Actualmente cursando la segunda etapa del programa.",

  },
  
] 

function BonusPage() {
  return (
    <div id="Bonus" className="container-fluid bonus-container d-flex flex-column text-center p-0 justify-content-center align-items-center">
        <h1 className="bonus-container__title">Certificados</h1>
          { Studies.map((element, index) => (
            <div className={`sheet-container d-flex ${element.classname} `} key={index}>
              <a target="_blank" rel="noopener noreferrer" href={element.link} className="bonus-container__links">
                <img className="sheet-container__img" src={element.img} alt={element.name} />
              </a>
              <div className="sheet-container__div">
                <h1>{element.name}</h1>
                <span className="fs-5">{element.description}</span>
              </div>
            </div>
          ))}
      {/* <div className="d-flex flex-column bonus-container-more justify-content-center align-items-center">
        <h1 className="bonus-container__title">Más Sobre Mí</h1>
        <span className="p-2 text-center fs-3">Una de las cosas que mas me gusta sobre el desarrollo web es diseñar paginas, mis diseños no son los mejores pero al menos los considero creativos.</span>
        <span className="p-2 text-center fs-3">Aqui podrás encontrar el diseño de una pagina excentrica, la cual cuando finalice quiero que sea mi nuevo portfolio.</span>
        <Link to="/alternative" className="bonus-container__button btn btn-outline-dark btn-lg">Ir a la pagina alternativa</Link>
      </div> */}
    </div>
  )
}

export default BonusPage
