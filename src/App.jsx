import React from 'react'
import Navbar from "./components/Navbar"
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import Projects from './components/Projects'


const App = () => {
  return (
    <div className='app bg-slate-50 text-slate-900 dark:bg-gray-900 w-full min-h-screen dark:text-white transition-colors duration-300'>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App