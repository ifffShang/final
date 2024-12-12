import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import './Navbar.css'
import { UserContext } from "../../context/userContext";

export default function Navbar() {
  const { user, setUser} = useContext(UserContext);

  const handleLogout = async () => {
    // todo: logout api
    try {
      const response = await axios.get('/logout');

      setUser(null); 
    } catch (error) {
      console.error('Login failed', error);
    }
  }
  return (
    <nav>
      <Link to="/">Main</Link>

      {user ? (
        <>
          {/* already logged in*/}
          <button onClick={handleLogout} className='logout-button'>Logout</button>
          <Link to="/profile">Profile</Link>
        </>
      ) : (
        <>
          {/* logged out */}
          <Link to="/login">Login</Link>
          <Link to="/register">Signup</Link>
        </>
      )}
    </nav>
  )
}
