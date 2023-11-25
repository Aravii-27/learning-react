import React from 'react'
import Header from './components/header/Header'
import Topcontainer from './components/topcontainer/Topcontainer'
import Skillcontainer from './components/skillcontainer/Skillcontainer'
import Projectcontainer from './components/projectcontainer/Projectcontainer'
import './App.css'
import ExperienceContainer from './components/experiencecontainer/ExperienceContainer'
import Contact from './components/contact/Contact'
 

const App = () => {
  return (
    <>
    <Header/>
    <Topcontainer/>
    <Skillcontainer/>
    <Projectcontainer/>
    <ExperienceContainer/>
    <Contact/>
    </>
  )
}

export default App
