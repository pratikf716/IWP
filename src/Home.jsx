import React from "react";
import Topbar from "./Pages/Topbar";
import Navbar from "./Pages/Navbar";
import Testo from "./Pages/Testo";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Call from "./Pages/Call";
function Home(){
    return(
        <>
         <Topbar></Topbar>
         <Navbar></Navbar>
         <Hero></Hero>
         <About></About>
         <Testo></Testo>
         <Call></Call>
        
        </>
    )
}

export default Home;