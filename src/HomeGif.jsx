import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import "./homeGif.css";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GifIcon from '@material-ui/icons/Gif';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import TouchAppIcon from '@material-ui/icons/TouchApp';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 6px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        height:60
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 3,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    root1: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },

    imageSearchIcon:{
        color:"#3f51b5"
    }
}));

function HomeGif() {
    let[gifInputValue,setGifInputValue] = useState();
    let[columns,setcolumns] = useState(3);
    let[adjustWidth,setAdjustWidth] = useState({ width:"100%" });
    let[styleSwipeIcon,setStyleSwipeIcon] = useState({ display:"flex",justifyContent:"center",padding:"10px" });
    let[itemData,setItemData] = useState(["https://media.tenor.com/images/f94daf8a7db3dd028d59d92fab78e373/tenor.gif","https://media.tenor.com/images/f956eb9e52ed640da77b25cb934ad15f/tenor.gif","https://media.tenor.com/images/1b4f224aa854df5e7eb7424b19995597/tenor.gif","https://media.tenor.com/images/054d2983083045b9bbe4aa2c0b0994d0/tenor.gif","https://media.tenor.com/images/96793b4f8de4e0da185c65242ed4961c/tenor.gif","https://media.tenor.com/images/6a8d7400541eb42d377f2eabf80b8300/tenor.gif","https://media.tenor.com/images/3c7d5809313e9a15eccbbdf8f6a206a3/tenor.gif","https://media.tenor.com/images/9ea8b09c0af34769ad2d84104915f7dd/tenor.gif"]);
    const classes = useStyles();

    useEffect(()=>{
if(window.screen.width>1080){
    setcolumns(5);
    setAdjustWidth({ width:"80%" });
    setStyleSwipeIcon({ display:"none" })
}
    },[])

function setUserInput(event){
setGifInputValue(event.target.value);
}

    function gifPage(event){
// event.preventDefault();
    }

    function preventNavigation(event){
        if(gifInputValue==undefined||gifInputValue==""){
event.preventDefault();
        }
    }
    return (
        <>
            <div id="gif_home_main">

                <div id="gif_search_component">
                    <Paper component="form" className={classes.root}>
                        <IconButton className={classes.iconButton} aria-label="menu">
                            <ImageSearchIcon className={classes.imageSearchIcon}/>
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search Any GIF"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            value={gifInputValue}
                            onChange={setUserInput}
                        />
                        <Link to={{ pathname:"GifMainPage",
                        testData:"test",
                    state:gifInputValue }} onClick={preventNavigation}>
                        <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={gifPage}>
                            <SearchIcon />
                        </IconButton>
                        </Link>
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton color="primary" className={classes.iconButton} aria-label="GIF">
                            <GifIcon />
                        </IconButton>
                    </Paper>
                </div>

                <div id="gif_sample_gif_component" style={adjustWidth}>
                    <div className={classes.root1}>
                        <ImageList className={classes.imageList} cols={columns}>
                            {itemData.map((item,index) => (
                                <ImageListItem key={index}>
                                    <img src={item} alt="GIF"/>
                                    <ImageListItemBar
                                        title="sample gif"
                                        classes={{
                                            root: classes.titleBar,
                                            title: classes.title,
                                        }}
                                        actionIcon={
                                            <IconButton aria-label={`star ${item.title}`}>
                                                <StarBorderIcon className={classes.title} />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                    <div style={styleSwipeIcon}>
                    <TouchAppIcon/>&nbsp;
                    Swipe To See More Images
                    </div>
                </div>

            </div>
        </>
    );
}

export default HomeGif;