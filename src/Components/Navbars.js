import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import vs_icon from "../Images/vs_icon.png"
import { Link } from 'react-router-dom';
function BrandExample() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='me-auto'>
            <div className='navbar_content' >
              <img
                alt=""
                src={vs_icon}
                width="48"
                height="40"
                className="d-inline-block align-top"
                style={{borderRadius:"20px"}}
              />{' '}
              VivekSharma
            </div>
          </Navbar.Brand>
          {/* Adding About Me, Projects, and Contact Me links */}
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
         <Link to="/Contact" style={{textDecoration:"none"}}>   <Nav.Link href="#contact" style={{textDecoration:"none"}}>Contact </Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
