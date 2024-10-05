import React from "react";
import Navbars from "./Navbars";
import { Carousel } from "react-bootstrap";
import Rivews from "./Rivews"
import Carousels from "./Carousels";
import Ratings from "./Ratings";
function Home(params) {
    return(
        
<>
<Navbars/>
<Carousels/>
<Rivews/>
</>
    );
}
export default Home;