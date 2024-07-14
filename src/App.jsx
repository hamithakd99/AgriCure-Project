import React from 'react'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import HeroSection from './Components/Hero Section/HeroSection'
import Footer from './Components/Footer Section/Footer'
import ScanningArea from './Components/BodyContent/ScanningArea'

function App() {
  return (
    <div>
      <NavigationBar/>
      <HeroSection/>
      <ScanningArea/>
      <Footer/>
      
    </div>
  )
}

export default App
