import React from 'react'
import Navbar from "./components/Navbar"
import Intro from './components/Intro'

const App = () => {
  return (
    <div className='app bg-gray-900 w-full h-screen text-white'>
      <Navbar />
      <Intro />
    </div>
  )
}

export default App