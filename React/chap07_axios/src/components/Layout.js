import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'

function Layout() {
  return (
    <div className="mb-5">
      <Header />
      <Outlet></Outlet>
    </div>
  )
}

export default Layout