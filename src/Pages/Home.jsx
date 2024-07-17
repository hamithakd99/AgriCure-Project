import React from 'react'
import NavigationBar from '../Components/NavigationBar/NavigationBar'
import HeroSection from '../Components/Hero Section/HeroSection'
import ScanningArea from '../Components/BodyContent/ScanningArea'
import Footer from '../Components/Footer Section/Footer'

function Home() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <ScanningArea />
      <Footer />
    </div>
  )
}

export default Home
