import React, { useEffect, useState } from "react";
import Memebackground from "./memebackground.jpg";
import "./memeMainPage.css";
import RandomStickersTopNav from "./randomStickersTopNav";
import MainMemePageBottomNav from "./mainMemePageBottomNav";
import { Link } from "react-router-dom";
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Gifback from "./gifback.gif";

function TypeOfGif() {
    let [adjustExploreWidth, setAdjustExploreWidth] = useState();
    let [adjustSelectionArea, setAdjustSelectionArea] = useState({ paddingBottom: "30px", paddingLeft: "25px" });
    let [searchAnyGif, setSearchAnyGif] = useState({ marginRight: "25px", minWidth: "300px", minHeight: "100px", marginBottom: "30px" });
    let [searchByCat, setSearchByCat] = useState({ marginRight: "25px", minWidth: "300px", minHeight: "100px", marginBottom: "30px" });
    let [trendingGif, setTrendingGif] = useState({ marginRight: "25px", minWidth: "300px", minHeight: "100px", marginBottom: "30px" });
    let [childPadGif, setChildPadGif] = useState({ paddingBottom: 50 })
    useEffect(() => {
        if (window.screen.width <= 1080) {
            setAdjustExploreWidth({ width: "98%", paddingBottom: "70px" })
            setAdjustSelectionArea({ flexDirection: "column", minHeight: "25vh", paddingTop: 0, marginTop: 0 });
            setSearchAnyGif({ marginBottom: "30px", minWidth: "300px" });
            setSearchByCat({ marginBottom: "30px", minWidth: "300px" });
            setTrendingGif({ minWidth: "300px", marginBottom: "50px" });
            setChildPadGif({ paddingBottom: 50, backgroundColor: "rgba(0,0,0,0.6)" })
        }
    }, [])
    return (
        <>
            <RandomStickersTopNav />
            <div id="meme_page_main_main" style={{ backgroundImage: `url(${Gifback})` }}>
                <div id="meme_page_main_child" style={childPadGif}>
                    <div id="explore_text_parent" style={adjustExploreWidth}>
                        <p className="explore_text">Make Your Social Media Chat More Engaging With This Awesome App By Rohit Technical&nbsp;!</p>
                        <p className="explore_text">Rohit Technical's Powerful Search Algorithm Give Users Most Relevant
                            Search Results.To Share Or Download On Mobile Just Long Press The Image.For Desktop/Laptop Right Click
                            On Image To Download.Explore Our Huge Collection Of Gifs: </p>
                    </div>

                    <div id="select_meme_category" style={adjustSelectionArea}>

                        <Link to="/homepage" className="cat_selection_navs" style={searchAnyGif}>
                            <ImageSearchIcon style={{ color: "#3f51b5" }} />&nbsp;&nbsp;SEARCH ANY GIF
                        </Link>

                        <Link to="/selectbycategorygif" className="cat_selection_navs" style={searchByCat}>
                            <VideoLibraryIcon style={{ color: "#3f51b5" }} />&nbsp;&nbsp;SEARCH BY CATEGORY
                        </Link>

                        <Link to="/randomgif" className="cat_selection_navs" style={trendingGif}>
                            <i class="fas fa-fire-alt trending_meme_icon"></i>&nbsp;&nbsp;TRENDING GIF
                        </Link>


                    </div>
                </div>
            </div>
            <MainMemePageBottomNav />
        </>
    );
}

export default TypeOfGif;