import React from 'react'
import NavBar from './components/NavBar'
import IntroName from './components/IntroName'
import Skillset from './components/Skillset'
import ProjectPreview from './components/ProjectPreview'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='app-wrapper'>
      <NavBar/>
      <h1 className = "text-9xl font-poppins fw-black text-off-white">Michael Deng</h1>
      <IntroName/>
      <Skillset/>
      <ProjectPreview/>
      <Contact/>
    </div>
  )
}

export default App