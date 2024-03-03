import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../img/cine-verse-logo.svg";



export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
   
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img
            src= {Logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
        /> {' '}
            Cine-Verse App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user ? (
              <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/users"> Signup </Nav.Link>
              </>
            ) : (    
              <>
              <Nav.Link as={Link} to="/">Movies</Nav.Link>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link> 
              <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link> 
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};
NavigationBar.propTypes = {
   user: PropTypes.string.isRequired,
   onLoggedOut: PropTypes.func.isRequired
 };