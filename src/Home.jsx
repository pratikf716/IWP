import React from "react";
import Topbar from "./Pages/Topbar";
import Navbar from "./Pages/Navbar";
import Testo from "./Pages/Testo";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Call from "./Pages/Call";
import Service from "./Pages/Service";
import GetAQuote from "./Pages/GetAQuote";
import TeamCards from "./Pages/TeamCards";
import BlogSection from "./Pages/BlogSection";
import Footer from "./Pages/Footer";

function Home(){
    return(
        <>
        
         <Navbar></Navbar>
         <Hero></Hero>
         <About></About>
         <Service></Service>
         <GetAQuote></GetAQuote>
         <TeamCards></TeamCards>
         <Testo></Testo>      
         <Call></Call>
         <Footer></Footer>
         
         
               
        </>
    )
}

export default Home;