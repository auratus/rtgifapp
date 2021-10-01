import React, { useEffect, useState } from "react";
import Memebackground from "./memebackground.jpg";
import "./memeMainPage.css";
import RandomStickersTopNav from "./randomStickersTopNav";
import MainMemePageBottomNav from "./mainMemePageBottomNav";
import { Link } from "react-router-dom";
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Gifback from "./gifback.gif";
import Stickerback from "./stickerback.gif";
import Mobstickback from "./mobstickback.gif";
import StickerMainPageFooter from "./StickerMainPageFooter";


function StickerMainPage(){
    let [adjustExploreWidth, setAdjustExploreWidth] = useState();
    let [adjustSelectionArea, setAdjustSelectionArea] = useState({ paddingBottom: "30px", paddingLeft: "25px" });
    let [searchAnyGif, setSearchAnyGif] = useState({ marginRight: "25px", minWidth: "150px", minHeight: "75px", marginBottom: "30px" });
    // let [searchByCat, setSearchByCat] = useState({ marginRight: "25px", minWidth: "300px", minHeight: "100px", marginBottom: "30px" });
    let [trendingGif, setTrendingGif] = useState({ marginRight: "25px", minWidth: "150px", minHeight: "75px", marginBottom: "30px" });
    let [childPadGif, setChildPadGif] = useState({ paddingBottom: 50 });
    let[stickMainBack,setStickMainBack] = useState({ backgroundImage: `url(${Stickerback})`,height:"82vh" });
    useEffect(() => {
        if (window.screen.width <= 1080) {
            setAdjustExploreWidth({ width: "98%", padding: "0 10px 70px 10px" })
            setAdjustSelectionArea({ flexDirection: "column", minHeight: "25vh", paddingTop: 0, marginTop: 0 });
            setSearchAnyGif({ marginBottom: "30px", minWidth: "300px" });
            // setSearchByCat({ marginBottom: "30px", minWidth: "300px" });
            setTrendingGif({ minWidth: "300px", marginBottom: "50px" });
            setChildPadGif({ paddingBottom: 50, backgroundColor: "rgba(0,0,0,0.6)" });
            setStickMainBack({backgroundImage: `url(${Mobstickback})`,height:"87vh",width:'100%'});
        }
    }, [])
    return(
        <>
        <RandomStickersTopNav/>
          <div id="meme_page_main_main" style={stickMainBack}>
                <div id="meme_page_main_child" style={childPadGif}>
                    <div id="explore_text_parent" style={adjustExploreWidth}>
                        <p className="explore_text">Make Your Social Media Chat More Engaging With This Awesome App By Rohit Technical&nbsp;!</p>
                        <p className="explore_text">Rohit Technical's Powerful Search Algorithm Give Users Most Relevant
                            Search Results.To Share Or Download On Mobile Just Long Press The Image.For Desktop/Laptop Right Click
                            On Image To Download.Explore Our Huge Collection Of Stickers: </p>
                    </div>

                    <div id="select_meme_category" style={adjustSelectionArea}>

                        <Link to={{pathname:"/actualstickerspage",state:"hello"}} className="cat_selection_navs" style={searchAnyGif}>
                            <i class="fab fa-sticker-mule" style={{ color: "#3f51b5" }} />&nbsp;&nbsp;SEARCH ANY STICKER
                        </Link>

                        {/* <Link to="/selectbycategorygif" className="cat_selection_navs" style={searchByCat}>
                            <VideoLibraryIcon style={{ color: "#3f51b5" }} />&nbsp;&nbsp;SEARCH BY CATEGORY
                        </Link> */}

                        <Link to="/randomstickers" className="cat_selection_navs" style={trendingGif}>
                            <i class="fas fa-fire-alt trending_meme_icon"></i>&nbsp;&nbsp;TRENDING STICKERS
                        </Link>


                    </div>
                </div>
            </div>
            <StickerMainPageFooter/>
        </>
    );
}
export default StickerMainPage;