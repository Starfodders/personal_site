import React from 'react'
import NavBar from './components/NavBar'
import IntroName from './components/IntroName'
import BackgroundAsset from './components/BackgroundAsset'
import Skillset from './components/Skillset'
import ProjectPreview from './components/ProjectPreview'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='app-wrapper'>
      <NavBar/>
      <IntroName/>
      {/* <BackgroundAsset/> */}
      <Skillset/>
      <ProjectPreview/>
      <Contact/>
    </div>
  )
}

export default App