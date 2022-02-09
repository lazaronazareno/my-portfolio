import React from 'react'
import AboutMe from '../../homePages/aboutMe'
import BonusPage from '../../homePages/alternative'
import Contact from '../../homePages/contact'
import Welcome from '../../homePages/welcome'
import Works from '../../homePages/works'
import Layout from '../../shared/layout'
import './styles.scss'

function Home() {
  return (
    <Layout>
      <Welcome />
      <AboutMe />
      <BonusPage />
      <Works />
      <Contact />
    </Layout>
  )
}

export default Home
