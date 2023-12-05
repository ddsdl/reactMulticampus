import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@comps/Header'

function Layout() {
  return (
    <div className="mb-3">
      <Header></Header>
      <hr />
      <Outlet></Outlet>
    </div>
  )
}

export default Layout