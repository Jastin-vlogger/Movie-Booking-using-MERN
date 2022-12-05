import React from 'react'
import Navbar from '../../../components/Public/Navbar/Navbar'
import HeroSection from '../../../components/Public/PublicDashboard/components/Banner/HeroSection'
import Cards from '../../../components/Public/PublicDashboard/components/Card/Cards'


function HomePage() {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <Cards/>
    </>
  )
}

export default HomePage
