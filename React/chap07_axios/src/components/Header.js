import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="mb-3">
      <Link to="/">HOME | </Link>
      <Link to="/A01Axios">HOME | </Link>
      <Link to="/contactList">LIST | </Link>
      <Link to="/contact">VIEW | </Link>
      <Link to="/addContect">ADD | </Link>
    </nav>
  )
}

export default Header