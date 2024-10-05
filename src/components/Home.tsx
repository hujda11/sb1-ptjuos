import React from 'react'
import Hero from './Hero'
import Features from './Features'
import Testimonials from './Testimonials'
import FeaturedVenues from './FeaturedVenues'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <FeaturedVenues />
    </div>
  )
}

export default Home