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
            Esta es la version alternativa(de prueba) que es algo mas "salvaje", algo que no parece tanto una pagina web
            pero a mi me gusta como quedo. Basicamente es una galeria multidireccional como yo lo llamo.
            El objetivo fue hacer una portfolio basado en el dibujo que realice durante mi primer curso
            y sé que no esta tal cual lo imagine, pero se acerca bastante.
          </span>
        </div>
          <img className="container__pixel_img" src={diseño} alt="Mi primer wireframe" data-bs-toggle="modal" data-bs-target="#exampleModal" />
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <img className="container__pixel_modalImg rounded" src={diseño} alt="Mi primer wireframe" />
            </div>
          </div>  
        <span>Me presento nuevamente Soy Lazaro y este es mi portfolio, espero lo disfrutes tanto como yo disfrute hacerlo.</span>
        <span>Cada sección es distinta y va contando distintos aspectos de mi vida.</span>
        <span>enlaces</span>
        <div>
          <img className="container__pixel_icon" src={github} alt="Github" />
          <img className="container__pixel_icon" src={linkedin} alt="Linkedin" />
        </div>
      </div>
    </div>
  )
}

export default PixelCenter
