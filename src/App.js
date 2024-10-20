import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { AnimatePresence, motion } from "framer-motion";
import Footers from './Components/Footers';
import { useState } from 'react';
import Navbars from "./Components/Navbars";

function App() {
  const [dark_mode, set_dark_mode] = useState(false);

  const setting_dark_mode = () => {
    set_dark_mode(!dark_mode);
  };

  const AnimatedRoutes = () => {
    const location = useLocation();

    const pageTransition = {
      hidden: { opacity: 0, z: -100 },
      visible: { opacity: 1, z: 0, transition: { duration: 0.5 } },
      exit: { opacity: 0, z: 100, transition: { duration: 0.5 } }
    };

    return (
      <>
        <Navbars />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageTransition}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  variants={pageTransition}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/projects"
              element={
                <motion.div
                  variants={pageTransition}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Projects />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </>
    );

  };

  return (
    <>
      <button
        style={
          !dark_mode
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
        onClick={setting_dark_mode}
        className="dark_mode"
      >
        {!dark_mode ? " Dark" : " Light"}
      </button>

      <div
        className="all_portfolio"
        style={
          dark_mode
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      >
        <Router>
          <AnimatedRoutes />
          <Footers />
        </Router>
      </div>
    </>
  );
}

export default App;
