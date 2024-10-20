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
    const [rivew_data, set_rivew_data] = useState([1, 1, 1, 1]);
    const [rivew, set_rivew] = useState({
        name: "",
        title: "",
        ratings: "",
        message: "",
    });

    const [show, setShow] = useState(false);
    const [blur, set_blur] = useState({});
    const [blur2, set_blur2] = useState({ filter: "blur(8px)", pointerEvents: "none" }); // Initial blur applied
    const [rivew_loader, set_rivew_loade] = useState("visible")
    const [average_ratings, set_average_ratings] = useState(0);
    const [read_more_rivews, set_read_more_rivews] = useState(false);
    // Effect to load reviews
    useEffect(() => {
        axios.get("https://vivek-portfolio-backend.onrender.com/get_rivews")
            .then((res) => {
                set_rivew_data(res.data); // Setting received data to rivew_data
                set_blur2({}); // Remove blur after data is loaded
                set_rivew_loade("hidden")
                let avg_val = 0;
                res.data.map((val, i, arr) => (
                    avg_val = avg_val + val.ratings
                ))
                console.log("wejibgfwe", avg_val / res.data.length);
                set_average_ratings(avg_val / res.data.length)
            });
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onchange_listner(params) {
        let { name, value } = params.target;
        set_rivew({ ...rivew, [name]: value });
    }


    async function saveChanges(params) {
        set_blur({ filter: "blur(8px)", pointerEvents: "none" });
        // //console.log(rivew);
        await axios.post("https://vivek-portfolio-backend.onrender.com/insert_rivew", rivew);
        window.location.reload();
        setShow(false);
    }

    return (
        <>

            <button class="button-17" role="button" onClick={handleShow}>Add Review+</button>
            <br /><br />
            <center><h3 className='avg_rating_head'>Vivek's Avg Rating<Ratings star={average_ratings} /></h3></center>

            <br /><br />
            <Modal className='rivew_modal' style={blur} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                autoFocus
                                name='name'
                                onChange={onchange_listner}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Title"
                                name='title'
                                onChange={onchange_listner}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Ratings</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Give Ratings out of 5"
                                name='ratings'
                                onChange={onchange_listner}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Enter in detail</Form.Label>
                            <Form.Control onChange={onchange_listner} name='message' as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-outline-danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="btn btn-outline-success" onClick={saveChanges}>
                        Add Review
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Rendering the review data */}
            <div className='rivew_container'>
                <div style={{ visibility: rivew_loader }} className='loader_rivew'></div>
                {
                    rivew_data.map((val, i) => {
                        if (!read_more_rivews && i > 1) return;
                        return (<div key={i}>
                            <Card style={blur2} className='rivew_container'>
                                <Card.Header>
                                    <img style={{ borderRadius: "14px" }} height="24px" width="29px" src={profile} alt="profile" />
                                    {val.name}
                                </Card.Header>
                                <Card.Body>

                                    <blockquote className="blockquote mb-0">
                                        <p>{val.title}</p>
                                        <footer className="blockquote-footer">
                                            {val.message} <cite title="Source Title">{val.ratings}</cite>
                                            <Ratings star={Number.parseFloat(val.ratings)} />
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                            <br /><br />
                            {

                            }
                        </div>)
                    }





                    )
                }
                <center style={{ cursor: "pointer" }} onClick={() => { set_read_more_rivews(!read_more_rivews) }}>{read_more_rivews ? "Read Less" : "Read More"}</center>
            </div>


        </>
    );
}

export default WithHeaderAndQuoteExample;
