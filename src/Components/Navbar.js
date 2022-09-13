import React from 'react'
import poke from '../image/pkeball.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={poke} alt='PokemonLOGO' />
        <p>Pokemon</p>   
    </div>
  )
}

export default Navbar
