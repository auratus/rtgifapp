import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUrl, NullInput } from './actions/index';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import "./gifArea.css";
import CancelIcon from '@material-ui/icons/Cancel';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import { useState } from "react";
import RandomStickersFooter from "./randomStickersFooter"
import RandomStickersTopNav from "./randomStickersTopNav";
import TouchAppIcon from '@material-ui/icons/TouchApp';

// import { NullInput } from "./actions";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      // marginTop: "3vmax",
    },
    imageList: {
      width: "100%",
      height: "auto",
      cursor: "pointer",
    },
  }));

function RandomStickers(){
    let [imgPre, setImgPre] = useState("https://media.tenor.com/images/2438bc5e548c35579a2f0700bb414c09/tenor.gif");
    let [changePreArea, setChangePreArea] = useState({ transform: "scale(0,1)" });
    let [changeImgArea, setChangeImgArea] = useState({ transform: "scale(1,1)" });
    let[longPressText,setLongPressText] = useState({ display:"none" });
    let[adjustImgPadding,setAdjustImgPadding] = useState({ padding:"0 5px" })
    let [cols, setCols] = useState(6);
    const classes = useStyles();
    let dispatch4 = useDispatch();
    let dispatch = useDispatch();
    
    useEffect(()=>{
        if(window.screen.width<=1080){
            setCols(2);
            setChangePreArea({ width:"100%",transform: "scale(0,1)" });
            setChangeImgArea({ width:"100%",transform: "scale(1,1)" });
            setLongPressText({ display:"block",color:"white" });
                }
            
            dispatch4(NullInput());
        let xml1 = new XMLHttpRequest();
        let xml2 = new XMLHttpRequest();
        xml1.open("GET", `https://api.giphy.com/v1/stickers/trending?api_key=ucYyfV3Y735s59WJMmvi3vmEOrKbjSHF&limit=50`, true);
        xml1.send();
        xml1.onreadystatechange = function () {
          if (xml1.readyState === 4 && xml1.status === 200) {
            let xml1Response = xml1.responseText;
            let xml1ResponseParsed = JSON.parse(xml1Response);
            let length = xml1ResponseParsed.data.length;
            for (let i = 0; i < length; i++) {
              dispatch(addUrl(xml1ResponseParsed.data[i].images.fixed_height.url));
              console.log(xml1ResponseParsed.data[i].images.original.url);
            }
        }

    }
    },[]);

    
  function preview(event) {
    setImgPre(event.target.src);
    if(window.screen.width>1080){
    setChangeImgArea({ transformOrigin: "left", transform: "scale(0.7,1)" });
    setChangePreArea({ transformOrigin: "right", transform: "scale(1,1)" });
    setCols(5);
    }
    else{
      setChangeImgArea({ width:"100%",transformOrigin: "left", transform: "scale(0,1)" });
    setChangePreArea({ width:"100%",transformOrigin: "right", transform: "scale(1,1)" });
    }
    
  }

  function closePrev() {
    if(window.screen.width>1080){
    setChangeImgArea({ transformOrigin: "left", transform: "scale(1,1)" });
    setChangePreArea({ transformOrigin: "right", transform: "scale(0,1)" })
    setCols(6);
    }

   else if(window.screen.width<=1080){
      setChangeImgArea({ maxWidth:"100%",transformOrigin: "left", transform: "scale(1,1)" });
      setChangePreArea({ transformOrigin: "right", transform: "scale(0,1)" })
      }
  }

    let selector = useSelector((store) => store.SetUrl);
    return(
        <>
<RandomStickersTopNav/>
 <div className="gif_main" >
        <div style={changeImgArea} className="images_area">
          <ImageList rowHeight={140} className={classes.imageList} cols={cols}>
            {selector.map((item, index) => index != 0 ? (
              <ImageListItem key={index} >
                <img src={item} alt="gif" onClick={preview} />
              </ImageListItem>
            ) : null)}
          </ImageList>
        </div>

        <div className="preview_area" style={changePreArea}>

          <div className="prev_header">

            <div className="cancel_icon">
              <CancelIcon style={{ color: "white", cursor: "pointer" }} onClick={closePrev} />
            </div>

            {/* <div className="download_share">
              <a href={imgPre} download={imgPre}> <GetAppIcon style={{ color: "white", cursor: "pointer" }} /></a>
              <ShareIcon style={{ color: "white", cursor: "pointer" }} />
            </div> */}
          </div>

          <div className="prev_img" style={adjustImgPadding}>
          <p style={longPressText}>Long Press On Image To Share/Download&nbsp;<TouchAppIcon/></p>
            <img src={imgPre} alt="Image Preview" style={{ backgroundColor:"white" }}/>
          </div>
        </div>

      </div>
      <RandomStickersFooter/>
        </>
    );
}

export default RandomStickers;