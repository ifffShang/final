import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import './Navibar.css'
import { UserContext } from "../../context/userContext";
import { Navbar as BootstrapNavbar, Container, Nav, NavDropdown, Navbar} from 'react-bootstrap';


export default function Navibar() {
  const { user, setUser} = useContext(UserContext);

  const handleLogout = async () => {
    try {
      console.log("logout...");
      const response = await axios.post('/logout', { withCredentials: true });

      setUser(null); 
    } catch (error) {
      console.error('Login failed', error);
    }
  }
  return (
    <BootstrapNavbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">Main</BootstrapNavbar.Brand>

      <Nav className="ml-auto">
        {user ? (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* line */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='ms-auto'>
                {/* log out */}
                <Nav.Item>
                    <button 
                      onClick={handleLogout} 
                      className="logout-button"
                    >
                      Logout
                    </button>
                </Nav.Item>
                {/* avator */}
                <Nav.Item>
                  <Link to="/profile">
                    <img 
                      src={user.avatar || '/default-avatar.png'} 
                      alt="User Avatar" 
                      className="user-avatar" 
                    />
                  </Link>
                </Nav.Item>
                {/* username & settings */}
            <NavDropdown title={<span>{user.name}</span>} id="user-nav-dropdown">
              <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
            </NavDropdown>
              </Nav>
            </Navbar.Collapse>

          </>
        ) : (
          // when logout
          <>
            <Nav.Item>
              <Link to="/login">Login</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/register">Signup</Link>
            </Nav.Item>
          </>
        )}
      </Nav>
      </Container>
    </BootstrapNavbar>
  )
}
