import React from 'react'
import CarouselComponent from '../../components/carousel/CarouselComponent'
import Navbar from './../../components/navbar/Navbar';

const Landing = () => {
  console.log("first")
  return (
    <div>
      <Navbar/>
      <CarouselComponent/>
    </div>
  )
}

export default Landing