import React from 'react'
import Header from '../../components/layout/Header/Header'
import Booking from '../../components/layout/Booking-Section/Booking'
import Community from '../../components/layout/Community/Community'
import Footer from '../../components/layout/Footer/Footer'
import Faq from '../../components/layout/FAQ/Faq'
import CitySection from '../../components/layout/Citysection/CitySection'

const Home = () => {
  return (
    <>
      <Header/>
      <Booking/>
      <Community/>
      <CitySection/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Home
