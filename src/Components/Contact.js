import "../CSS/Contact.css"
import React, { useState } from 'react';
import Navbars from "./Navbars"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
const Contact = () => {
  const[user_data,set_user_data]=useState({
    firstname:"",
    lastname:"",
    company:"",
    message:"",
  })
  const[display,set_display]=useState("hidden")
  const navigate=useNavigate();
  const[blur,setblur]=useState({})
  function onchange_listner(params) {
   let {name,value}=params.target;
   set_user_data({...user_data,[name]:value});
  }
  async function onclick_listner(params) {
    set_display("visible");
    setblur({filter:"blur(8px)",pointerEvents:"none"})
    await axios.post("https://vivek-portfolio-backend.onrender.com/insert_data",user_data).then((res)=>{
      set_display("hidden");
      setblur({});
    })

    alert("Submitted!!");
    // navigate("/");
    
   }
  return (
    <>
    <Navbars/>
    <Loader display={display} />
    <div className="row ms-auto">
    <center> <div className="col-md-6 col-md-offset-3">
        <form id="msform">
          {/* Progress Bar */}
          <ul id="progressbar">
            <li className="active">Personal Details</li>
            <li>Social Profiles</li>
            <li>Account Setup</li>
          </ul>
          
          {/* Fieldsets */}
          <fieldset style={blur}>
            <h2 className="fs-title">Contact Me</h2>
            <h3 className="fs-subtitle">Tell us something more about you</h3>
            <input onChange={onchange_listner} type="text" name="firstname" placeholder="First Name" />
            <input onChange={onchange_listner} type="text" name="lastname" placeholder="Last Name" />
            <input onChange={onchange_listner} type="text" name="company" placeholder="Company" />
            <input onChange={onchange_listner} type="text" name="message" placeholder="Sen Message" />
            <input onClick={onclick_listner} type="button" name="next" className="next action-button" value="SUBMIT" />
          </fieldset>
          
          
        </form>
       
      </div>
      </center> 
    </div>
    </>
  );
};

export default Contact;
