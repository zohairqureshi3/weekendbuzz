
import React from "react";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Practice from "./Practice";
import Performers from "./Performers";
import Ready from "./Ready";
import Footer from "./Footer";
import { Image } from 'react-bootstrap';


const Mainpage = (props) =>{
    return (
        <>
                <Header/>
            <div className="wrapper">

                <div className="arhamsoft-logo">
                    <Image src="/images/arhamsoft-logo.svg" fluid/>
                </div>
                <Main/>
                <About/>
                <Practice/>
                <Performers/>
                <Ready/>
            </div>
                <Footer/>
                </>
    )
            
}

export default Mainpage;