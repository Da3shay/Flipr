import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Datatable from './components/Datatable'


export default function Users() {
  return (
    <div>
    <div className="Profile">
    <Sidebar />
    <div className="Profilecontainer">
      <Navbar />
      <Datatable/>


      

    </div>
  </div>
  </div>
  )
}
