import React from 'react'
import { Link } from 'react-router-dom'
import alkemy from '../../static/images/Alkemy.png'
import argp from '../../static/images/ArgentinaPrograma.png'
import './styles.scss'

function BonusPage() {
  return (
    <div id="Bonus" className="container-fluid bonus-container d-flex p-0 justify-content-center align-items-center">
      <div className="bonus-container-cert d-flex flex-column align-items-center justify-content-center ">
        <h1 className="bonus-container__title">Certificados</h1>
        <div className="d-flex bonus-container-cert__div align-items-center justify-content-around">
          <a target="_blank" rel="noopener noreferrer" href="https://assets.alkemy.org/certificates/auth0%7C60f9cfed31de08001aba5a5f/16b3f3cf-65e3-4f8e-9fdf-6d8e68d415e1.pdf" className="bonus-container__links">
            <img className="" src={alkemy} alt="Alkemy Certificado" />
            <div>
              <h1>Certificación Alkemy</h1>
              <span className="fs-5">Perfil Job-Ready React: Autentificación de usuarios, Integración con API`s externas, Manejo del estado y diseño de vistas</span>
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://mumuki.io/argentina-programa/certificates/verify/BC_2JZb6_QrrgJlQ" className="bonus-container__links">
            <img className="responsive-img" src={argp} alt="Argentina Programa Certificado" />
            <div>
              <h1>Certificacion #SéProgramar</h1>
              <span className="fs-5">Conocimientos basico de Javascript y Ruby. Actualmente cursando la segunda etapa del programa.</span>
            </div>
          </a>
        </div>
      </div>
      <div className="d-flex flex-column bonus-container-more justify-content-center align-items-center">
        <h1 className="bonus-container__title">Más Sobre Mí</h1>
        <span className="p-2 text-center fs-3">Una de las cosas que mas me gusta sobre el desarrollo web es diseñar paginas, mis diseños no son los mejores pero al menos los considero creativos.</span>
        <span className="p-2 text-center fs-3">Aqui podrás encontrar el diseño de una pagina excentrica, la cual cuando finalice quiero que sea mi nuevo portfolio.</span>
        <Link to="/alternative" className="bonus-container__button btn btn-outline-dark btn-lg">Ir a la pagina alternativa</Link>
      </div>
    </div>
  )
}

export default BonusPage
