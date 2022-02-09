import React from 'react'
import './styles.scss'

const proyects = [ 
  { name: "SuperHeroes App",
    description: "App desarrollada con Reactjs para el challenge de Alkemy, consumiendo SuperheroesAPI, contiene un login con contraseña y su funcion es buscar superheroes y poder armar un team de 6",
    img: "html",
    link : "https://alkemy-react-challenge.web.app/"
  },
  { name: "Quotes App",
    description: "App de prueba que se hizo para medir conocimientos al iniciar Alkemy, posee un login con contraseña y muestra varias citas, se pueden ver en detalle, editarlas y borrarlas",
    img: "css",
    link : "www"
  },
  { name: "Devil in the Details",
    description: "Pagina web de prueba para un emprendimiento, la idea de la pagina es copiar el diseño de otra pagina y aplicarlo con nuestras cosas.",
    img: "js",
    link : "https://wepage-ddtest.web.app/"
  },
  { name: "KanoKano",
    description: "Landing page de un famoso anime del 2021, contiene un switch al seleccionar los personajes que hacen que cambie el tema de la pagina gracias a react-redux",
    img: "git",
    link : "https://kanokano-fanpage.web.app/"
  },
]

function Works() {
  return (
    <div className="container-fluid d-flex flex-column works-container justify-content-center align-items-center">
      <h1 className="works-container__title">Proyectos/Trabajos</h1>
      <span className="p-2 text-center works-container__text">Algunos proyectos que realice hasta ahora:</span>
      <div className="works-proyects-container">
        { proyects.map( (element, index) => (
          <div className="d-flex">
            <img alt={element.name} src={element.img}/>
            <div>
              <h1>{element.name}</h1>
              <span className="fs-4">{element.description}</span>
              <span className="fs-4"><a href={element.link}>Ver</a></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Works;
