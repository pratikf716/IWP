import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components

import Navbar from "./Pages/Navbar";
import Testo from "./Pages/Testo";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Call from "./Pages/Call";
import Service from "./Pages/Service";
import GetAQuote from "./Pages/GetAQuote";
// import TeamCards from "./Pages/TeamCards";
import Footer from "./Pages/Footer";
import Project from "./Pages/Project";
import ProjectDetails from "./Pages/ProjectDetails"; // Import ProjectDetails component
import './App.css';


// src/index.js or src/App.js
import '@fontsource/lexend-deca'; // Defaults to weight 400
import '@fontsource/lexend-deca/700.css'; // Optional for additional weights
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Service />
              <GetAQuote />
              {/* <TeamCards /> */}
              <Project />
              <Testo />
              <Call />
              <Footer />
            </>
          }
        />
        {/* About Page Route */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        {/* Services Page Route */}
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Service />
              <Footer />
            </>
          }
        />
        {/* Project Details Route */}
        <Route 
        path="/projects" 
        element={
          <>
        <ProjectDetails />
        <Footer />
        </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
