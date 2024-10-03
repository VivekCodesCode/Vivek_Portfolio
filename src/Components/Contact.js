import "../CSS/Contact.css"
import React from 'react';
import Navbars from "./Navbars"
const Contact = () => {
  return (
    <>
    <Navbars/>
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
          <fieldset>
            <h2 className="fs-title">Contact Me</h2>
            <h3 className="fs-subtitle">Tell us something more about you</h3>
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="lname" placeholder="Last Name" />
            <input type="text" name="phone" placeholder="Company" />
            <input type="text" name="phone" placeholder="Sen Message" />
            <input type="button" name="next" className="next action-button" value="SUBMIT" />
          </fieldset>
          
          
        </form>
       
      </div>
      </center> 
    </div>
    </>
  );
};

export default Contact;
