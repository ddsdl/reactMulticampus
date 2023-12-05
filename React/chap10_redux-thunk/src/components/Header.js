import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">INDEX | </Link>
      <Link to="/counter">COUNTER | </Link>
    </nav>
  )
}
export default Header
