import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <div>Navbar</div>
        <Outlet />
    </div>
  )
}

export default Layout