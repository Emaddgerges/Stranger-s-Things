import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar  id="NavBar">
      <Container>
      <ul>
      <li><Link to="/Login">   Login  </Link></li>
      <li> ~~~~~~~~~~~~~  </li>
      <li><Link to="/">   Logout  </Link></li>
     
      </ul>
         
      </Container>
    </Navbar>
  );
}

export default NavBar;