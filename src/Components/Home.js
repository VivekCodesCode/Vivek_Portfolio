import React from "react";
import Navbars from "./Navbars";
import { Carousel } from "react-bootstrap";
import Rivews from "./Rivews"
import Carousels from "./Carousels";
import "../App.css"
import Ratings from "./Ratings";
import Footers from "./Footers";
import Skills from "./Skills";
function Home(params) {
    return(
        
<>
<Navbars/>
<Carousels/>
<br/><br/><br/>
<center><h3 className="skillset-tools">Skillset And Tools</h3></center>
<br/><br/><br/>
<Skills/>
<Rivews/>
</>
    );
}
export default Home;