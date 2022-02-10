import React, { useState } from 'react'
import './styles.scss'
import page from '../../static/images/mostaza 2.png'
import page1 from '../../static/images/page1.png'
import page3 from '../../static/images/page3.png'
import page4 from '../../static/images/page4.png'
import arrow from '../../static/images/arrow.png'

const proyects = [ 
  { name: "SuperHeroes App",
    description: "React App desarrollada para el challenge de Alkemy, consumiendo SuperheroesAPI, contiene un login con contraseña y su funcion es buscar superheroes y poder armar un team de 6. Las credenciales para iniciar sesion y utilizarla son: email: challenge@alkemy.org y password: react ",
    img: page1,
    link : "https://alkemy-react-challenge.web.app/"
  },
  { name: "Quotes App",
    description: "App de prueba que se hizo para medir conocimientos al iniciar Alkemy, posee un login con contraseña y muestra varias citas, se pueden ver en detalle, editarlas y borrarlas",
    img: page,
    link : "www"
  },
  { name: "Pagina de Devil in the Details",
    description: "Web de prueba para un emprendimiento, la primera pagina que desarrolle por mi cuenta, la idea era copiar el diseño de la pagina del anime wonder egg y aplicarlo con las imagenes e informacion del proyecto.",
    img: page3,
    link : "https://wepage-ddtest.web.app/"
  },
  { name: "KanoKano App",
    description: "Pagina diseñada para informar sobre el anime Kanojo to Kanojo, contiene un switch al seleccionar los personajes que hacen que cambie el tema de la pagina gracias a react-redux",
    img: page4,
    link : "https://kanokano-fanpage.web.app/"
  },
]

function Works() {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (proyects.length - 1)) : setX(x + 100);
  }
  const goRight = () => {
    x === -100 * (proyects.length - 1) ? setX(0) : setX(x - 100);
  }

  return (
    <div id="Works" className="container-fluid d-flex flex-column works-container justify-content-center align-items-center">
      <h1 className="works-container__title">Proyectos/Trabajos</h1>
      <span className="p-2 text-center works-container__text">Algunos proyectos que realice hasta ahora:</span>
      <div className="works-proyects-container">
        { proyects.map( (element, index) => (
          <div key={index} className="works-proyects-container__slider" style={{ transform: `translateX(${x}%)` }}>
            <img alt={index} className="works-proyects-container__slider-image" src={element.img} />
            <h1 className="marca">{element.name}</h1>
            <span className="fs-4 text-center">{element.description}</span>
            <a target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm w-25 fs-4 align-self-center" href={element.link}>Ver</a>
          </div>
        ))}
      <button type="button" className="works-slider__goLeft" onClick={goLeft}>
        <img className="works-proyects-container__button-left" alt="arrowleft" src={arrow} />
      </button>
      <button type="button" className="works-slider__goRight" onClick={goRight}>
        <img className="works-proyects-container__button-image" alt="arrowright" src={arrow} />
      </button>
      </div>
    </div>
  )
}

export default Works;
