import React from 'react'
import AboutMe from '../../homePages/aboutMe'
import Contact from '../../homePages/contact'
import Welcome from '../../homePages/welcome'
import './styles.scss'

function Home() {
  return (
    <div>
      <Welcome />
      <AboutMe />
      <Contact />
    </div>
  )
}

export default Home
