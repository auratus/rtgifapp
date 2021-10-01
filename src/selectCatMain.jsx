import React, { useEffect } from "react";
import "./gifArea.css";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import CancelIcon from '@material-ui/icons/Cancel';
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

function SelectCatMain(props) {
    let [imgPre, setImgPre] = useState("https://media.tenor.com/images/2438bc5e548c35579a2f0700bb414c09/tenor.gif");
    let [changePreArea, setChangePreArea] = useState({ transform: "scale(0,1)" });
    let [changeImgArea, setChangeImgArea] = useState({ transform: "scale(1,1)" });
    let [longPressText, setLongPressText] = useState({ display: "none" });
    let [cols, setCols] = useState(6);
    let [adjustImgPadding, setAdjustImgPadding] = useState({ padding: "0 5px",marginTop:10 });
    let [propData, setPropData] = useState([{media:[{gif:{url:""}}]}]);
    const classes = useStyles();

    function preview(event) {
        setImgPre(event.target.src);
        if (window.screen.width > 1080) {
            setChangeImgArea({ transformOrigin: "left", transform: "scale(0.7,1)" });
            setChangePreArea({ transformOrigin: "right", transform: "scale(1,1)" });
            setCols(5);
        }
        else {
            setChangeImgArea({ width: "100%", transformOrigin: "left", transform: "scale(0,1)" });
            setChangePreArea({ width: "100%", transformOrigin: "right", transform: "scale(1,1)" });
        }

    }

    function closePrev() {
        if (window.screen.width > 1080) {
            setChangeImgArea({ transformOrigin: "left", transform: "scale(1,1)" });
            setChangePreArea({ transformOrigin: "right", transform: "scale(0,1)" })
            setCols(6);
        }

        else if (window.screen.width <= 1080) {
            setChangeImgArea({ maxWidth: "100%", transformOrigin: "left", transform: "scale(1,1)",marginTop:20 });
            setChangePreArea({ transformOrigin: "right", transform: "scale(0,1)" })
        }
    }

    useEffect(() => {
        if(props.selCatData!=undefined){
        setPropData(props.selCatData);
        }
        console.log("received");
        console.log(props.selCatData);
    }, [props])

    useEffect(()=>{
        if(window.screen.width<=1080){
            setCols(2);
            setChangePreArea({ width:"100%",transform: "scale(0,1)" });
            setChangeImgArea({ width:"100%",transform: "scale(1,1)",marginTop:20 });
            setLongPressText({ display:"block",color:"white" });
            setAdjustImgPadding({padding:"0 15px"})
                }

       let selMainXml = new XMLHttpRequest();
       selMainXml.open("GET",`https://g.tenor.com/v1/search?tag=thank+you&locale=en&key=SP8D8UESTTRV`,true);
       selMainXml.send();
       selMainXml.onreadystatechange=function(){
           if(selMainXml.readyState==4&&selMainXml.status==200){
let selMainRes = selMainXml.responseText;
let selMainResPar = JSON.parse(selMainRes);
let resulArr = selMainResPar.results;
setPropData(resulArr);
           }
       }         
            },[]);

    // setPropData(props.selCatData);

    return (
        <>
            <div className="gif_main" style={{ marginTop:0 }}>
                <div style={changeImgArea} className="images_area">
                    <ImageList rowHeight={140} className={classes.imageList} cols={cols}>
                        {propData.map((item, index) =>  (
                            <ImageListItem key={index} >
                                <img src={item.media[0].gif.url} alt="gif" onClick={preview} />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>

                <div className="preview_area" style={changePreArea}>

                    <div className="prev_header" style={{ marginTop:10 }}>

                        <div className="cancel_icon">
                            <CancelIcon style={{ color: "white", cursor: "pointer" }} onClick={closePrev} />
                        </div>

                        {/* <div className="download_share">
              <a href={imgPre} download={imgPre}> <GetAppIcon style={{ color: "white", cursor: "pointer" }} /></a>
              <ShareIcon style={{ color: "white", cursor: "pointer" }} />
            </div> */}
                    </div>

                    <div className="prev_img" style={adjustImgPadding}>
                        <p style={longPressText}>Long Press On Image To Share/Download&nbsp;<TouchAppIcon /></p>
                        <img src={imgPre} alt="Image Preview" style={{ backgroundColor: "white",maxHeight:'70%' }} />
                    </div>
                </div>

            </div>
        </>
    );
}

export default SelectCatMain;