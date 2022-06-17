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
      <Link to={"/beers"}>
        <div>All Beers</div>
      </Link>
    </div>

  )
}

export default NavBar 