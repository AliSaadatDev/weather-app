import React from 'react'
import './globals.css'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'

export default function page() {
  return (
    <div className='flex border bg-blue-50'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}
