import Card from 'react-bootstrap/Card';
import Ratings from "./Ratings"
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../CSS/Rivews.css"

import { useEffect, useState } from 'react';
import profile from "../Images/profile.png"
import { Button } from 'react-bootstrap';
import axios from 'axios';
function WithHeaderAndQuoteExample() {
    useEffect(()=>{
     axios.get("https://vivek-portfolio-backend.onrender.com/get_rivews").then((res)=>{
        console.log(res.data[0].ratings)
        set_rivew_data(res.data)
     })
    },[])
    const [rivew_data, set_rivew_data] = useState([1, 1, 1, 1])
    const[rivew,set_rivew]=useState({
        name:"",
        title:"",
        ratings:"",
        message:"",
      })
    const [show, setShow] = useState(false);
    const [blur,set_blur]=useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function onchange_listner(params) {
    let {name,value}=params.target;
    set_rivew({...rivew,[name]:value})
  }
 async function saveChanges(params) {
    
    set_blur({filter:"blur(8px)",pointerEvents:"none"})
    console.log(rivew);
    await axios.post("https://vivek-portfolio-backend.onrender.com/insert_rivew",rivew);
    window.location.reload()

    setShow(false);
  }
  
    return (
        <>
            <br /><br /><br />
            <Button variant="primary" onClick={handleShow}>
                Add Rivew
            </Button>

            <Modal style={blur} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Rivew</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Name"
                                autoFocus
                                name='name'
                                onChange={onchange_listner}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Title</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Title"
                                autoFocus
                                name='title'
                                onChange={onchange_listner}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Ratings</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Give Ratings out of 5"
                                autoFocus
                                name='ratings'
                                onChange={onchange_listner}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Enter in detail</Form.Label>
                            <Form.Control  onChange={onchange_listner} name='message' as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {

                rivew_data.map((val,i,arr) => (
                    <>
                        <Card className='rivew_container'>
                            <Card.Header> <img style={{ borderRadius: "14px" }} height="24px" width="29px" src={profile} /> {val.name}</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                       { val.title}

                                    </p>
                                    <footer className="blockquote-footer">
                                        {val.message} <cite title="Source Title">{val.ratings}</cite>
                                        <Ratings  star={Number(val.ratings)}/>
                                    </footer>
                                </blockquote>
                            </Card.Body>

                        </Card>
                        <br /><br />
                    </>
                ))
            }
            <br /><br />
        </>
    );
}

export default WithHeaderAndQuoteExample;