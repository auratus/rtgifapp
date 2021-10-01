import React, { useEffect, useState } from "react";
import Memebackground from "./memebackground.jpg";
import "./memeMainPage.css";
import RandomStickersTopNav from "./randomStickersTopNav";
import MainMemePageBottomNav from "./mainMemePageBottomNav";
import { Link } from "react-router-dom";

function MemeMainPage(){
    let[adjustExploreWidth,setAdjustExploreWidth] = useState();
    let[adjustSelectionArea,setAdjustSelectionArea] = useState();
    let[childPad,setchildPad] = useState({paddingBottom:50})
    useEffect(()=>{
if(window.screen.width<=1080){
    setAdjustExploreWidth({ width:"98%",paddingBottom:"60px" })
    setAdjustSelectionArea( { flexDirection:"column",minHeight:"25vh",paddingBottom:10,marginBottom:'50px' } );
    setchildPad({paddingBottom:50})
}
    },[])
    return(
        <>
       <RandomStickersTopNav/>
        <div id="meme_page_main_main" style={{ backgroundImage:`url(${Memebackground})` }}>
<div id="meme_page_main_child" style={childPad}>
    <div id="explore_text_parent" style={ adjustExploreWidth }>
    <p className="explore_text">Explore Our Huge Collection Of Memes With This Awesome App By Rohit Technical&nbsp;!</p>
    <p className="explore_text">Create Your Own Meme by Selecting Any Meme Template From Our 
    Hundreds Of Free Meme Templates.Just Select The Desired Template Enter "Text1/Top Text" And
    "Text2/Bottom Text" And Click "CREATE" And Boom Your Meme Is Ready! </p>
    </div>

    <div id="select_meme_category" style={ adjustSelectionArea }>

    <Link to="/trendingmeme" className="cat_selection_navs"> 
    <i class="fas fa-fire trending_meme_icon" ></i>&nbsp;&nbsp;Trending Memes
    </Link>
   


    <Link to="/homesticker" className="cat_selection_navs"> 
    <i class="fas fa-layer-group trending_meme_icon"></i>&nbsp;&nbsp;All Memes
    </Link>
    

    </div>
</div>
        </div>
        <MainMemePageBottomNav/>
        </>
    );
}

export default  MemeMainPage;