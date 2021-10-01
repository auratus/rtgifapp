import React, { useEffect, useState } from "react";
import "./SupremeSampleArea.css";
import { Link } from "react-router-dom";
import Homegifsample from "./homegifsample.gif"
import Homestickersample from "./homestickersample.gif"
import Homememesample from "./homememesample.jpg"
import { letterSpacing } from "@mui/system";

function SupremeSample() {
    let [childGif, setChildGif] = useState();
    let [childSticker, setChildSticker] = useState();
    let [childMeme, setChildMeme] = useState();
    let [childGifText, setChildGifText] = useState();
    let [childGifImg, setChildGifImg] = useState();
    let [childStickerImg, setChildStickerImg] = useState();
    let [childStickerText, setChildStickerText] = useState();
    let [childMemeText, setChildMemeText] = useState();
    let [childMemeImg, setChildMemeImg] = useState();
    let [whatsText, setWhatsText] = useState({ color: "rgba(0,0,0,0.8)" });
    let [gifDes, setGifDes] = useState({ width: "60%" });
    let [sampleAreaMargin, setSampleAreaMargin] = useState({ marginBottom: 40 })

    useEffect(() => {
        if (window.screen.width <= 1080) {
            setChildGif({ minHeight: "60vh", flexDirection: "column", padding: "0 0 10px 0", flexShrink: 0 });
            setChildGifText({ minHeight: "20vh", width: "100%" });
            setChildGifImg({ height: "35vh", width: "100%" });

            setChildSticker({ flexWrap: "wrap-reverse", minHeight: "70vh", padding: "0 0 10px 0" })
            setChildStickerImg({ width: "100%", height: "35vh" });
            setChildStickerText({ width: "100%", height: "25vh" });

            setChildMeme({ minHeight: "80vh", flexDirection: "column", padding: "10px 0" });
            setChildMemeText({ height: "40vh", width: "100%" });
            setChildMemeImg({ height: "35vh", width: "100%" });

            setWhatsText({ fontSize: "25px", color: "rgba(0,0,0,0.8)" });

            setGifDes({ width: "80%" });

            setSampleAreaMargin({ marginBottom: 55 })
        }
    }, [])
    return (
        <>
            <div id="sample_area_main" style={sampleAreaMargin}>
                <div id="whats_kit_text">
                    <h2 style={whatsText}>WHATS IN THE KIT ?</h2>
                </div>
                <hr />
                <div id="sup_sam_gif" style={childGif}>

                    <div id="sup_sam_gif_text" style={childGifText}>
                        <h3 style={{ color: "rgba(0,0,0,0.8)", fontSize: "25px", letterSpacing: '2px' }}>GIF</h3>
                        <div style={gifDes}>
                            <p style={{ color: "rgba(100,100,100)" }}>Search for any gif or select from category from our huge collection of gifs.
                                Preview gif from search results by clicking on that gif and then long press/right click
                                on that image to share/download.
                            </p>
                        </div>
                        <Link to="/typeofgif" style={{ textDecoration: "none", }}>EXPLORE&nbsp;<i class="fas fa-arrow-right"></i></Link>

                    </div>
                    <div id="sup_sam_gif_img" style={childGifImg}><img src={Homegifsample} style={{ width: "90%", height: "90%" }} /></div>
                </div>
                <hr />
                <div id="sup_sam_stic" style={childSticker}>
                    <div id="sup_sam_stic_text" style={childStickerImg}><img src={Homestickersample} style={{ width: "90%", height: "90%" }} /></div>
                    <div id="sup_sam_stic_img" style={childStickerText}>
                        <h3 style={{ color: "rgba(0,0,0,0.8)", fontSize: "25px", letterSpacing: '2px' }}>STICKERS</h3>
                        <div style={gifDes}>
                            <p style={{ color: "rgba(100,100,100)" }}>
                                Search for any sticker from our huge collection of stickers.
                                Preview any sticker from search results by clicking on that sticker and then long press/right click
                                on that sticker to share/download.
                            </p>
                        </div>
                        <Link to="actualstickerspage" style={{ textDecoration: "none" }}>EXPLORE&nbsp;<i class="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
                <hr />
                <div id="sup_sam_meme" style={childMeme}>
                    <div id="sup_sam_meme_text" style={childMemeText}>
                        <h3 style={{ color: "rgba(0,0,0,0.8)", fontSize: "25px", letterSpacing: '2px' }}>CREATE MEME</h3>
                        <div style={gifDes}>
                            <p style={{ color: "rgba(100,100,100)" }}>Are you a memer ? if yes then this app is absolutely for you.
                                Easy to use meme generator app.Just select the desired template from trending/all
                                meme templates,add top and bottom text and your meme is ready to share/download on apps like
                                whatsapp/facebook/instagram.Right click/long press on the generated meme to share/download.
                            </p>
                        </div>
                        <Link to="/mememainpage" style={{ textDecoration: "none" }}>EXPLORE&nbsp;<i class="fas fa-arrow-right"></i></Link></div>
                    <div id="sup_sam_meme_img" style={childMemeImg}><img src={Homememesample} style={{ width: "90%", height: "90%" }} /></div>
                </div>
                <hr />
            </div>
        </>
    );
}

export default SupremeSample;

