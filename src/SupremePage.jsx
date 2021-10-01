import React, { useEffect, useState } from "react";
import "./SupremePage.css";
import Homepageback from "./homepageback.gif";
import Mobileback from "./mobileback.gif";
import SupremeSample from "./SupremeSampleArea";
import SupremePageTopNav from "./SupremePageTopNav.jsx";
import SupremeFooter from "./SupremePageFooter";
import Gifapploader from "./gifapploader.gif"


function SupremePage() {
    let [cursorIcon, setCursorIcon] = useState({ fontSize: "35px", color: "white", });
    let [textType, setTextType] = useState({ fontSize: "45px", });
    let [textTypeMain, setTextTypeMain] = useState({ minHeight: "20vh" });
    let [insta, setInsta] = useState({ fontSize: "14px" });
    let [face, setFace] = useState({ fontSize: "14px" });
    let [wa, setWa] = useState({ fontSize: "14px" });
    let [changeBack, setChangeBack] = useState({backgroundImage: `url(${Homepageback})`,height:"85vh"});
    let [welcome, setWelcome] = useState({ margin: "0px" });
    let [welcomeText, setWelcomeText] = useState({ color: "white", fontSize: "50px",margin:"0 0 60px 0" });
    let[overlay,setOverlay] = useState({backgroundColor:"rgba(0,0,0,0.6)"});
    

    useEffect(() => {
        if (window.screen.width <= 1080) {
            setTextType({ fontSize: "25px" });
            setCursorIcon({ fontSize: "25px", color: "white" });
            setTextTypeMain({ minHeight: "15vh" });
            setChangeBack({backgroundImage: `url(${Mobileback})`,height:"80vh"});
            setInsta({ width: "25px", height: "25px", fontSize: "12px" });
            setFace({ width: "25px", height: "25px", fontSize: "12px" });
            setWa({ width: "25px", height: "25px", fontSize: "12px" });
            setWelcomeText({ fontSize: "25px", color: "white",margin:"0 0 60px 0" });
            setOverlay({backgroundColor:"rgba(0,0,0,0.4)"})
        }

    
    }, [])

    return (
        <>
       
        <SupremePageTopNav/>
            <div id="supreme_page_main" style={changeBack}>

                <div id="supreme_page_child" style={overlay}>
                   
                    <div style={welcome}>
                        <h2 style={welcomeText}>WELCOME TO ROHIT TECHNICAL</h2>
                    </div>
                    <div id="app_name">
                        <h2><i class="fas fa-photo-video" style={{fontSize:"40px",color:"#66d9e8"}}></i>&nbsp;GSM APP</h2>
                    </div>
                    <div id="supreme_page_child_child1" style={textTypeMain}>
                        <h1 id="cont_to_animate" style={textType}></h1><h1 style={cursorIcon}>&nbsp;<i class="fas fa-i-cursor"></i></h1>
                    </div>
                    <div id="supreme_page_child_child2">
                        <a href="https://www.instagram.com/rohitsahu2663/" id="sup_insta" target="_blank" style={insta} title="INSTAGRAM"><h2><i class="fab fa-instagram"></i></h2></a>
                        <a href="https://www.facebook.com/profile.php?id=100032448461635" id="sup_face" target="_blank" style={face} title="FACEBOOK"><h2><i class="fab fa-facebook-f"></i></h2></a>
                        <a href="https://wa.me/919109274958" id="sup_wa" target="_blank" style={wa} title="WHATSAPP"><h2><i class="fab fa-whatsapp"></i></h2></a>
                    </div>
                </div>
            </div>

            <SupremeSample/>

            <SupremeFooter/>
        </>
        );
}

export default SupremePage;