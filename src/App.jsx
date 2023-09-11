import React from 'react'
import './index.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'

// Define a functional component called 'App'
const App = () => {

  // Return JSX code representing the component's output
  // In this case, it renders a div element
  return (
    
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Footer />

    
    </>
  )
}

// Export the 'App' component as the default export of this module
export default App
