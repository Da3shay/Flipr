import React from 'react'
import './profile.scss'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function Profile() {
  return (
    <div>
    <div className="Profile">
    <Sidebar />
    <div className="Profilecontainer">
      <Navbar />

    </div>
  </div>
  </div>
  )
}
