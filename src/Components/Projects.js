import Card from 'react-bootstrap/Card';
import Navbars from "./Navbars";
import pimg from "../Images/pimg.avif";
import restro from "../Images/resto.avif";
import "../App.css";
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <Navbars />
      <br /><br /><br />
      <Card className='project_cards'>
        <Card.Img className='project_cards_image' height="200px" variant="top" src={pimg} />
        <Card.Body>
          <Card.Text>
            <center>
              <h3>Smart Projector</h3>
            </center>
            Description: Designed a Python-based smart projector system that allows users to control 
            it using hand gestures.<br /><br />
            <center>
              <button
                className="button-69"
                // onClick={() => window.open("https://drive.google.com/file/d/1U_4ZjMWq0ycLrDyMDXUdjJr94t_pOrCu/view", "_blank")}
                role="button"
              >
                Watch Video
              </button>
            </center>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <br /><br /><br /><br />

      <Card className='project_cards'>
        <Card.Img className='project_cards_image' height="200px" variant="top" src={restro} />
        <Card.Body>
          <Card.Text>
            <center>
              <h3>Restaurant Management System</h3>
            </center>
            Description: Designed a Python-based smart projector system that allows users to control 
            it using hand gestures.<br /><br />
            <center>
              <button
                className="button-69"
                // onClick={() => window.open("https://drive.google.com/file/d/1U_4ZjMWq0ycLrDyMDXUdjJr94t_pOrCu/view", "_blank")}
                role="button"
              >
                Watch Video
              </button>
            </center>
          </Card.Text>
        </Card.Body>
      </Card>
      <br/>
    </>
  );
}

export default Projects;
