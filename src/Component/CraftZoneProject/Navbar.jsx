import React from 'react'
import "../Style/Navbar.css"
import Product from './Product'

function Navbar() {
  function product()
  {
    <Product/>
  } 
  return (
    <>
      <div className='Navbar'>
        <img className='NavLogo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqm9aI0G6juriWIHerBnkGDmGgqfxUJ0pyW9k0ThHpRW-ISmTdhgkP5zKTvt203qgXHkU&usqp=CAU" alt="mob"  />
        <select className=' p-2 m-2'>
                        <option value="" >..Filter..</option>
                        <option value="all" >A-Z</option>
                        <option value="revall" >Z-A</option>
                        <option value="ascending" >1-10</option>   
                        <option value="descending" >10-1</option></select>
        <a className='NavItem one' href="link">Home</a>
        <a className='NavItem two' href="link" onClick={product}>Product</a>
        <a className='NavItem three' href="link">Login</a>
        <a className='NavItem four' href="link">Register</a>
        <span>Search  :</span><input type='search'  placeholder='search here'></input>
        <a className='NavItem five' href="link"><i class="fa-solid fa-cart-shopping"></i></a>
        
                        
      </div>
    </>
  )
}

export default Navbar
