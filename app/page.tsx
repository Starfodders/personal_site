import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import IntroName from './components/IntroName'
import BackgroundAsset from './components/BackgroundAsset'
import Skillset from './components/Skillset'
import ProjectPreview from './components/ProjectPreview'
import Contact from './components/Contact'
import ReturnToTop from './components/ReturnToTop'

const App = () => {
  return (
    <div className='app-wrapper'>
      <NavBar/>
      <IntroName/>
      <Skillset/>
      <ProjectPreview/>
      <Contact/>
      <ReturnToTop/>
    </div>
  )
}

export default App