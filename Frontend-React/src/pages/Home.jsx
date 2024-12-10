import React from 'react'
import Hero from '../Components/Hero'
import Hero2 from '../Components/Hero2'
import Upcoming from '../Components/Upcoming'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'


function Home() {
  return (
    <div>
      <Hero />
      <Hero2 />
      <Upcoming />
      <Categories />
    </div>
  )
}

export default Home