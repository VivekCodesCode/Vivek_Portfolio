import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import vs_icon from "../Images/vs_icon.png";
import "../App.css";
import { Link } from 'react-router-dom';

function BrandExample() {
  return (
    <>
      <Navbar className="navbar_container" fixed="top">
        <Container className='child_container'>
          <Navbar.Brand href="#home" className='me-auto'>
            <Nav.Link>
              <div>
                <img
                  alt=""
                  src={vs_icon}
                  width="48"
                  height="35"
                  className="d-inline-block align-top"
                  style={{ borderRadius: "20px" }}
                />{' '}
                <span style={{ color: "white" }} className='viveks'>VivekSharma</span>
              </div>
            </Nav.Link>
          </Navbar.Brand>
          {/* Aligning the Nav Links to the right */}
          <Nav className="ms-auto navbar_content justify-content-end">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Nav.Link className='navbar_content' style={{ color: "white", fontFamily: "initial" }} href="#about">Home</Nav.Link>
            </Link>
            <Link to="/Projects" style={{ textDecoration: "none" }}>
              <Nav.Link className='navbar_content' style={{ color: "white", fontFamily: "initial" }} href="#projects">Projects</Nav.Link>
            </Link>
            <Link to="/Contact" style={{ textDecoration: "none" }}>
              <Nav.Link className='navbar_content' href="#contact" style={{ textDecoration: "none", color: "whitesmoke", fontFamily: "initial" }}>Contact</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
