import React from 'react'
import Footer from '../footer'
import Header from '../header'

function Layout(props) {
  return (
      <>
          <Header />
            {props.children}
          <Footer />  
      </>
  )
}

export default Layout
