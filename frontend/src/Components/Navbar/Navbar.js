import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Main</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  )
}
