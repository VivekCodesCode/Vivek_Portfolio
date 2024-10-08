import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footers from './Components/Footers';
import { useState } from 'react';
import { color } from 'framer-motion';
function App() {
  const[dark_mode,set_dark_mode]=useState(false)
  function setting_dark_mode(params) {
    set_dark_mode(!dark_mode)
  }
  return (
   <>
 <button style={!dark_mode?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}} onClick={setting_dark_mode} className='dark_mode' >{!dark_mode?" Dark":" Light"}
  
 </button>
 <div className='all_portfolio' style={dark_mode?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>


   <Router>
    <Routes>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects' element={<Projects/>}/>
    </Routes>
   </Router>

  <Footers/>
  </div>
   </>
  );
}

export default App;
