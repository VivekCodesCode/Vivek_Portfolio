import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import vs_icon from "../Images/vs_icon.png"
import "../App.css"
import { Link } from 'react-router-dom';
function BrandExample() {
  return (
    <div className='navbar_container'>
      <Navbar className=" navbar_container">
        <Container className=''>
          <Navbar.Brand href="#home" className='me-auto'>
           <Nav.Link> <div className='navbar_content' >
              <img
                alt=""
                src={vs_icon}
                width="48"
                height="35"
                className="d-inline-block align-top"
                style={{borderRadius:"20px"}}
              />{' '}
            <span className='viveks'>VivekS</span>  
            </div>
            </Nav.Link>
          </Navbar.Brand>
          {/* Adding About Me, Projects, and Contact Me links */}
          <Nav className="ms-auto navbar_content">
          <Link to="/" style={{textDecoration:"none"}}>  <Nav.Link className='navbar_content' href="#about">Home</Nav.Link></Link>
            <Link to="/Projects" style={{textDecoration:"none"}}>  <Nav.Link href="#projects">Projects</Nav.Link></Link>
         <Link to="/Contact" style={{textDecoration:"none"}}>   <Nav.Link href="#contact" style={{textDecoration:"none"}}>Contact </Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default BrandExample;
