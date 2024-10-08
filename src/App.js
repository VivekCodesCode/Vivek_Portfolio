import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footers from './Components/Footers';
function App() {
  return (
   <>

   <Router>
    <Routes>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects' element={<Projects/>}/>
    </Routes>
   </Router>

  <Footers/>
  
   </>
  );
}

export default App;
