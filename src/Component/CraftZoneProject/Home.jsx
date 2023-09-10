import React from 'react'
import "../Style/Home.css"
import FeturesData from './FeturesData'
import Product from './Product'
import Registration from './Registration'
import Login from './Login'

function Home() {
  return (
    <>
      <h1 className='HeroText'>
        Crafts-Zone</h1>
      <FeturesData></FeturesData>
      <Registration/>
      <Login/>
       <Product/> 
          
   </> 
  )
}

export default Home
