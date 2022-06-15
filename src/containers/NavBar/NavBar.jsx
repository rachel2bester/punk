import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.scss"

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to={"/"}>
        <div>Home</div>
      </Link>
      <div></div>
      <div>BEERS</div>
      <div>All Beers</div>
    </div>

  )
}

export default NavBar 