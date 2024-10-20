import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import vs_icon from "../Images/vs_icon.png";
import "../App.css";
import { Link } from 'react-router-dom';

function BrandExample() {
  return (
    <>
      {/* Added expand="lg" to make it responsive */}
      <Navbar className="navbar_container" fixed="top" expand="lg">
        <Container className="child_container">
          {/* Brand section with logo and name */}
          <Navbar.Brand className="me-auto">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div>
                <img
                  alt="Vivek Sharma Logo"
                  src={vs_icon}
                  width="48"
                  height="35"
                  className="d-inline-block align-top"
                  style={{ borderRadius: "20px" }}
                />{' '}
                <span style={{ color: "white" }} className="viveks">VivekSharma</span>
              </div>
            </Link>
          </Navbar.Brand>

          {/* Navbar toggle button for small screens */}
          <Navbar.Toggle  aria-controls="basic-navbar-nav"className='custom-toggler' />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Aligning the Nav Links to the right */}
            <Nav className="ms-auto navbar_content">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Nav.Link as="span" className="navbar_content" style={{ color: "white", fontFamily: "initial" }}>Home</Nav.Link>
              </Link>
              <Link to="/Projects" style={{ textDecoration: "none" }}>
                <Nav.Link as="span" className="navbar_content" style={{ color: "white", fontFamily: "initial" }}>Projects</Nav.Link>
              </Link>
              <Link to="/Contact" style={{ textDecoration: "none" }}>
                <Nav.Link as="span" className="navbar_content" style={{ color: "whitesmoke", fontFamily: "initial" }}>Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
