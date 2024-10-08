import React from "react";
import Navbars from "./Navbars";
import { Carousel } from "react-bootstrap";
import Rivews from "./Rivews"
import Carousels from "./Carousels";
import Ratings from "./Ratings";
import Footers from "./Footers";
import Skills from "./Skills";
function Home(params) {
    return(
        
<>
<Navbars/>
<Carousels/>
<br/><br/><br/><br/><br/><br/>
<Skills/>
<Rivews/>

</>
    );
}
export default Home;