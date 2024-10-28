import React from 'react'
// component
import Header from './Header.jsx'
import Hero from './Hero.jsx'   
import Features from './Features.jsx'
import Power from './Power.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'

const Index = () => {
  return (
    <div className='fullScreen HomeColor'>
        <header> <Header/> </header>
            <div className="container">
                    <Hero/>
                    <Features/>
                    <Power/>
                    <About/>
            </div>
        <footer><Footer/></footer>
    </div>
  )
}

export default Index