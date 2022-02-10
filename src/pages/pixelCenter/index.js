import React from 'react'
import './styles.scss'
import diseño from '../../static/images/diseño.jpg'
import github from '../../static/icons/github.svg'
import linkedin from '../../static/icons/linkedin.svg'

function PixelCenter() {
  return (
    <div className="container__pixel d-flex justify-content-center align-items-center">
      <div className="container container__pixel_center text-center d-flex flex-column fs-5 align-items-center p-3">
        <h1 className="container__pixel_title">Bienvenidos</h1>
        <div className="d-flex align-items-center">
          <span>
            Esta es la version alternativa (test) que no es algo habitual en una pagina web
            pero a mi me gusta como quedo. El objetivo final es un carousel multidireccional.
            La idea era hacer portfolio basado en el dibujo que realice durante mi primer curso de desarrollo web
            y sé que no esta tal cual lo imagine, pero se acerca bastante:
          </span>
        </div>
          <img className="container__pixel_img" src={diseño} alt="Mi primer wireframe" data-bs-toggle="modal" data-bs-target="#exampleModal" />
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <img className="container__pixel_modalImg rounded" src={diseño} alt="Mi primer wireframe" />
            </div>
          </div>  
        <span>Me presento nuevamente Soy Lazaro y este es mi nuevo intento de portfolio, es mucho mas informal que el anterior pero es por él estilo que le quiero dar, espero te resulte entretenido.</span>
        <span>Cada sección es distinta y contiene informacion sobre mí.</span>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/lazaronazareno" className="container__pixel_icon">
            <img className="container__pixel_icon" src={github} alt="Github" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lazaro-vega-sanchez" className="container__pixel_icon">
            <img className="container__pixel_icon" src={linkedin} alt="Linkedin" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PixelCenter
