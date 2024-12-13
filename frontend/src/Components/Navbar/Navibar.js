import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import './Navibar.css'
import { UserContext } from "../../context/userContext";
import { Navbar as BootstrapNavbar , Container, Nav, NavDropdown} from 'react-bootstrap';


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
    // <BootstrapNavbar className="bg-body-tertiary">
    //   <Container>
    //     <BootstrapNavbar.Brand as={Link} to="/">Main</BootstrapNavbar.Brand>
    //     <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
    //     <BootstrapNavbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         {user ? (
    //           <>
    //             {/* log out */}
    //             <Nav.Item>
    //               <button
    //                 onClick={handleLogout}
    //                 className="logout-button"
    //               >
    //                 Logout
    //               </button>
    //             </Nav.Item>
    //             {/* avatar */}
    //             <Nav.Item>
    //               <Link to="/profile">
    //                 <img
    //                   src={user.avatar || '/default-avatar.png'}
    //                   alt="User Avatar"
    //                   className="user-avatar"
    //                 />
    //               </Link>
    //             </Nav.Item>
    //             {/* username & settings */}
    //             <NavDropdown title={<span>{user.name}</span>} id="user-nav-dropdown">
    //               <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
    //             </NavDropdown>
    //           </>
    //         ) : (
    //           <>
    //             {/* when logged out */}
    //             <Nav.Item>
    //               <Link to="/login">Login</Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //               <Link to="/register">Signup</Link>
    //             </Nav.Item>
    //           </>
    //         )}
    //       </Nav>
    //     </BootstrapNavbar.Collapse>
    //   </Container>
    // </BootstrapNavbar>
    <nav className='navbar'>
      {/* left */}
      <div className='navbar-left'>
        <Link to='/'>Main</Link>
      </div>

      {/* middle */}
      <div className='navbar-middle'>

      </div>


      {/* right */}
      <div className='navbar-right'>
      {user ? (
        <>
          <button
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </button>

          <Link to="/profile">
          <img
            src={user.avatar || '/default-avatar.png'}
            alt="User Avatar"
            className="user-avatar"
          />      
          </Link>

          <NavDropdown title={<span>{user.name}</span>} id="user-nav-dropdown" align="end" className="user-dropdown">
            <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
          </NavDropdown>
        
        </>
      ) : (
        <>
          {/* when logged out */}
          <Nav.Item><Link to="/login">Login</Link></Nav.Item>
          <Nav.Item><Link to="/register">Signup</Link></Nav.Item>
        </>
      )
    }
      </div>
      
    </nav>
  );
}
