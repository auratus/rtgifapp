import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import "./gifArea.css";
import CancelIcon from '@material-ui/icons/Cancel';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import { useDispatch } from "react-redux";
import { NullInput } from "./actions";
import TouchAppIcon from '@material-ui/icons/TouchApp';

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

function GifArea(props) {

  let [imgPre, setImgPre] = useState("https://media.tenor.com/images/2438bc5e548c35579a2f0700bb414c09/tenor.gif");
  let [changePreArea, setChangePreArea] = useState({ transform: "scale(0,1)" });
  let [changeImgArea, setChangeImgArea] = useState({ transform: "scale(1,1)" });
  let[longPressText,setLongPressText] = useState({ display:"none" });
  let [cols, setCols] = useState(6);
  const classes = useStyles();
  let dispatch4 = useDispatch();

  useEffect(()=>{
    if(window.screen.width<=1080){
setCols(2);
setChangePreArea({ width:"100%",transform: "scale(0,1)" });
setChangeImgArea({ width:"100%",transform: "scale(1,1)" });
setLongPressText({ display:"block",color:"white" });
    }

dispatch4(NullInput());
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
      setChangeImgArea({maxWidth:"100%",transformOrigin: "left", transform: "scale(1,1)" });
      setChangePreArea({ transformOrigin: "right", transform: "scale(0,1)" });
      }
  }
  return (
    <>
      <div className="gif_main" >
        <div style={changeImgArea} className="images_area">
          <ImageList rowHeight={140} className={classes.imageList} cols={cols}>
            {props.imgArr.map((item, index) => index != 0 ? (
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

            {/* <div id="download_share">
              <a href={imgPre} download={imgPre}> <GetAppIcon style={{ color: "white", cursor: "pointer" }} /></a>
              <ShareIcon style={{ color: "white", cursor: "pointer" }} />
            </div> */}
          </div>

          <div className="prev_img" >
            <p style={longPressText}>Long Press On Image To Share/Download&nbsp;<TouchAppIcon/></p>
            <img src={imgPre} alt="Image Preview" />
          </div>
        </div>

      </div>
    </>
  );
}

export default GifArea;