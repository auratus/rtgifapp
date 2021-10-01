import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TrendingMeme } from "./actions/index";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Footer from "./footer";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import WebIcon from '@material-ui/icons/Web';
import { Link } from "react-router-dom";
import RandomStickersTopNav from "./randomStickersTopNav";
import { NullInput } from "./actions";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import "./HomeSticker.css"
import TextField from '@material-ui/core/TextField';
import MemeGeneratorNav from "./memeGeneratorNav";
import { SelectAllRounded } from "@material-ui/icons";
import MainMemePageBottomNav from "./mainMemePageBottomNav";
import TitlebarImageList from "./availableTemplates";


const useStyles = makeStyles((theme) => ({

    // styling for select input area
    formControl: {
        margin: theme.spacing(4),
        minWidth: "90%",
    },

}));

function TrendingMemeFunc() {
    let [changeMainFlex, setChangeMainFlex] = useState();
    let [changeSelectionWidth, setChangeSelectionWidth] = useState({});
    let [selectInput, setSelectInput] = useState("Select Meme Template");
    let [topText, setTopText] = useState();
    let [bottomText, setBottomText] = useState();
    let [changeImageWidth, setChangeImageWidth] = useState({ display: "none" });
    let [trendingUrl, setTrendingUrl] = useState();
    let [mapArr, setMapArr] = useState([]);
    let [hideScrollDownText,setHideScrollDownText] = useState({ display:'block' });
    let trendingDispatch = useDispatch();
    const classes = useStyles();
    let trendingSelector = useSelector((store) => store.TrendingMeme);

    useEffect(() => {
        if (window.screen.width <= 1080) {
            setChangeMainFlex({ flexDirection: "column", flexShrink: 0, minHeight: "60vh" });
            setChangeSelectionWidth({ minWidth: "100%", flexShrink: 0, minHeight: "50vh" });
        }
        let xmlTrendingMeme1 = new XMLHttpRequest();
        xmlTrendingMeme1.open("GET", `https://api.imgflip.com/get_memes`, true);
        xmlTrendingMeme1.send();
        xmlTrendingMeme1.onreadystatechange = function () {
            if (xmlTrendingMeme1.readyState == 4 && xmlTrendingMeme1.status == 200) {
                let responseTrendingMeme1 = xmlTrendingMeme1.responseText;
                let trendingMemeParsed = JSON.parse(responseTrendingMeme1);
                let trendingMemeLength = trendingMemeParsed.data.memes.length;
                var testarr = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
                for (var i = 0; i < trendingMemeLength; i++) {
                    trendingDispatch(TrendingMeme(trendingMemeParsed.data.memes[i]));
                    let valOfid = trendingMemeParsed.data.memes[i];

                    testarr[i] = valOfid;
                    console.log(valOfid.id);
                }
                console.log(testarr);
                console.log("hi");
                setMapArr(testarr);
            }
        }
    }, [])


    function handleSelect(event) {
        setSelectInput(event.target.value);
        setChangeImageWidth({ display: "none" });
        if (window.screen.width > 1080) {
            setChangeSelectionWidth({ minWidth: "60%" });
        }
        setHideScrollDownText({display:"block"});
    }

    function createTrendingMeme() {
if(topText!=undefined && bottomText!=undefined && selectInput!="Select Meme Template"){
        let xmlTrendingMeme = new XMLHttpRequest();
        xmlTrendingMeme.open("POST", `https://api.imgflip.com/caption_image`, true);

        // header is most imp here because it tells the api that the content sent by user is of which type
        xmlTrendingMeme.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xmlTrendingMeme.send(`template_id=${selectInput}&username=sahu_rohit&password=Sahu@9876&text0=${topText}&text1=${bottomText}&font=arial`);
        xmlTrendingMeme.onreadystatechange = function () {
            if (xmlTrendingMeme.readyState == 4 && xmlTrendingMeme.status == 200) {
                let responseTrendingMeme = xmlTrendingMeme.responseText;
                let parsedTrending = JSON.parse(responseTrendingMeme);
                setTrendingUrl(parsedTrending.data.url)
                console.log(parsedTrending.data.url);
                setHideScrollDownText({display:"none"});
            }
        }
        setChangeImageWidth({ display: "block" });

        if (window.screen.width <= 1080) {
            setChangeImageWidth({ display: "block", width: "90%" });
            setChangeSelectionWidth({ minWidth: "100%", minHeight: "50vh" });


        }
        else {
            setChangeSelectionWidth({ width: "45%" });
            setChangeImageWidth({ display: "block", width: "40%" });
        }

    }
    }

    function handleTopText(event) {
        setTopText(event.target.value);
        setChangeImageWidth({ display: "none" });
        if (window.screen.width > 1080) {
            setChangeSelectionWidth({ minWidth: "60%" });
        }
        setHideScrollDownText({display:"block"});
    }

    function handleBottomText(event) {
        setBottomText(event.target.value);
        setChangeImageWidth({ display: "none" });
        if (window.screen.width > 1080) {
            setChangeSelectionWidth({ minWidth: "60%" });
        }
        setHideScrollDownText({display:"block"});

    }


    return (
        <>
            <RandomStickersTopNav />
            <div className="category_of_meme">
                <h2 style={{ color: "rgba(100,100,100)", marginBottom: "35px" }}><i class="fas fa-fire-alt" style={{ color: "red" }}></i>&nbsp;&nbsp;TRENDING MEMES</h2>
            </div>
            <div className="create_meme_text">
                <h3>Create Your Awesome Meme Here&nbsp;&nbsp;<i class="far fa-hand-point-down"></i></h3>
            </div>
            <div className="meme_area_main" style={changeMainFlex}>

                <div className="meme_selection_area" style={changeSelectionWidth}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Meme Template</InputLabel>
                        <Select
                            native
                            value={selectInput}
                            onChange={handleSelect}
                            label="Meme Template"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="Select Meme Template">Select Meme Template</option>
                            {
                                mapArr.map((value, index) => (
                                    <option aria-label="None" value={value.id}>{value.name}</option>
                                )
                                )
                            }


                        </Select>
                    </FormControl>

                    <div className="top_bottom_text">
                        <TextField id="outlined-basic" label="TEXT 1" variant="outlined" fullWidth onChange={handleTopText} value={topText} />
                    </div>

                    <div className="top_bottom_text">
                        <TextField id="outlined-basic" label="TEXT 2" variant="outlined" fullWidth onChange={handleBottomText} value={bottomText} />
                    </div>

                    <Button variant="outlined" color="primary" onClick={createTrendingMeme}>
                        Create
                    </Button>

                    <div className="scroll_down_text" style={hideScrollDownText}>
<p>Scroll Down To Bottom To See Available Templates&nbsp;&nbsp;<i class="far fa-hand-point-down"></i></p>
</div>
                </div>

                <div className="result_meme" style={changeImageWidth}>
                    <img src={trendingUrl} width="100%" />
                </div>
            </div>

            <TitlebarImageList availableImages={mapArr} />

            <MainMemePageBottomNav />
        </>
    );
}

export default TrendingMemeFunc;