import React from 'react'
import '../style/layout.css'

function Layout({ children }) {
  return (
    <div className='layout'>{children}</div>
  )
}

export default Layout