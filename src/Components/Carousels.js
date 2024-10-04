import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded
import cimg1 from "../Images/cimg1.avif"
import cimg3 from "../Images/cimg3.avif"
import "../App.css"
import cimg4 from "../Images/simg4.avif"
import cimg8 from "../Images/cimg8.avif"

function CarouselComponent() {
  return (
    <div >

    
    <Carousel className='carousel_container'>
      <Carousel.Item className='carousel_container_child' >
        <img
          className="d-block w-100"
          src={cimg1} // Replace with your image path
          alt="First slide"
          height="650px"
        />
        <Carousel.Caption>
          <h3>Front End Development</h3>
          <p>Empowered by React.js, I build cutting-edge applications that not only<br/> meet demands but also anticipate user needs with seamless functionality</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel_container_child'>
        <img
          className="d-block w-100"
          src={cimg3} // Replace with your image path
          alt="Second slide"
          height="650px"
        />
        <Carousel.Caption>
          <h3>Backend Development</h3>
          <p>Harnessing the power of Node.js, I craft seamless and high-performance <br/> applications that redefine user experiences.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel_container_child'>
        <img
          className="d-block w-100"
          src={cimg8} // Replace with your image path
          alt="Third slide"
          height="650px"
        />
        <Carousel.Caption>
          <h3>Higly Skilled Developer</h3>
          "As a highly skilled developer, I leverage React.js to create robust applications that seamlessly<br/> blend functionality with exceptional user experiences."
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselComponent;
