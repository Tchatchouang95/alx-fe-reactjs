import React from 'react'
import { Link } from 'react-router-dom';
import './StyleApp.css'

function Navbar() {
  return (
    <nav style={{
           backgroundColor: 'black',
           padding: '0', 
           display: 'flex', 
           justifyContent:'center'
          }}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default Navbar;