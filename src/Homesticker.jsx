import React, { useState, useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { NullInput } from "./actions";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import "./HomeSticker.css"
import TextField from '@material-ui/core/TextField';
import MemeGeneratorNav from "./memeGeneratorNav";
import TitlebarImageListAll from "./availableTemplatesAllMemes";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },

    navContent: {
        justifyContent: "space-between",
    },

    rohitTechnical: {
        width: "60%",
        paddingLeft:10
    },

    navigations: {
        width: "40%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 15,
        flexWrap: "wrap"
    },

    rtSiteLinks: {
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },

    hamburger: {
        color: "white",
        fontSize: 35
    },

    anchor: {
        textDecoration: "none",
        color: "#000000DE"
    },

    // styling for select input area
    formControl: {
        margin: theme.spacing(4),
        minWidth: "90%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    root1: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}




function HomeSticker() {
    let [homeNavVariant, setHomeNavVariant] = useState("h5");
    let [selectInput, setSelectInput] = useState("Select Meme Template");
    let [topText, setTopText] = useState(" ");
    let [bottomText, setBottomText] = useState(" ");
    let [changeSelectionWidth, setChangeSelectionWidth] = useState({});
    let [changeImageWidth, setChangeImageWidth] = useState({ display: "none" });
    let [changeMainFlex, setChangeMainFlex] = useState();
    let [hideScrollDownText,setHideScrollDownText] = useState({ display:'block' });
    const classes = useStyles();
    let dispatch3 = useDispatch();
    // localStorage.clear();

    //drawer code started here
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
             <Link to={{ pathname: "/typeofgif" }} className={classes.anchor}>
            <ListItem button >
                        <ListItemIcon><i class="fas fa-photo-video" /></ListItemIcon>
                        <ListItemText primary="GIF" />
                    </ListItem>
                    </Link>

                    <Link to="/mememainpage" className={classes.anchor}>
            <ListItem button >
                <ListItemIcon><i class="far fa-grin-squint-tears" /></ListItemIcon>
                <ListItemText primary="CREATE MEME" />
            </ListItem>
            </Link>

            <Link to="/stickermainpage" className={classes.anchor}>
                <ListItem button >
                    <ListItemIcon><i class="fab fa-sticker-mule"></i></ListItemIcon>
                    <ListItemText primary="ANIMATED STICKERS" />
                </ListItem>
            </Link>
            <Divider />
            <List>
                <a href="https://www.rohittechnical.cf" target="_blank" className={classes.anchor}>
                    <ListItem button >
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="HOME" />
                    </ListItem>
                </a>

                <a href="https://www.rohittechnical.cf/services.html" target="_blank" className={classes.anchor}>
                    <ListItem button>
                        <ListItemIcon><LanguageIcon /></ListItemIcon>
                        <ListItemText primary="SERVICES" />
                    </ListItem>
                </a>

                <a href="https://www.rohittechnical.cf/contactus.html" target="_blank" className={classes.anchor}>
                    <ListItem button>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="CONTACT US" />
                    </ListItem>
                </a>

                <a href="https://www.rohittechnical.cf/myprojects.html" target="_blank" className={classes.anchor}>
                    <ListItem button>
                        <ListItemIcon><WebIcon /></ListItemIcon>
                        <ListItemText primary="MY PROJECTS" />
                    </ListItem>
                </a>
            </List>

            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    //drawer code ended here

    useEffect(() => {
        dispatch3(NullInput());
        if (window.screen.width <= 1080) {
            setHomeNavVariant("h6");
            setChangeMainFlex({ flexDirection: "column", flexShrink: 0 })
            setChangeImageWidth({ width: "100%", display: "none" })
            setChangeSelectionWidth({ minWidth: "100%", flexShrink: 0, minHeight: "50vh" })

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

    function createMeme() {
        if(selectInput!="Select Meme Template"){
        setChangeImageWidth({ display: "block" });
        setHideScrollDownText({display:"none"});
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
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <AppBar>
                    <Toolbar className={classes.navContent}>
                        <div className={classes.rohitTechnical}>
                            <Link to="/" style={{textDecoration:"none",color:"white"}}>
                            <Typography variant={homeNavVariant}>ROHIT TECHNICAL</Typography>
                            </Link>
                        </div>
                        
                        <div className={classes.rtSiteLinks}>
                            <React.Fragment >
                                <Button onClick={toggleDrawer("left", true)}><MenuIcon className={classes.hamburger} titleAccess="More Options" /></Button>
                                <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                                    {list("left")}
                                </Drawer>
                            </React.Fragment>
                        </div>
                    </Toolbar>
                </AppBar>
                <Toolbar id="back-to-top-anchor" />

                <ScrollTop >
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </React.Fragment>
            <div className="category_of_meme">
                <h2 style={{ color: "rgba(100,100,100)", marginBottom: "35px" }}> <i class="fas fa-layer-group" style={{ color:"red" }}></i>&nbsp;&nbsp;ALL MEMES</h2>
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
                            <option value="10-Guy">10 Guy</option>
                            <option value="1950s-Middle-Finger">1950s Middle Finger</option>
                            <option value="1990s-First-World-Problems">1990s First World Problems</option>
                            <option value="1st-World-Canadian-Problems">1st World Canadian Problems</option>
                            <option value="2nd-Term-Obama">2nd Term Obama</option>
                            <option value="Aaaaand-Its-Gone">Aaaaand Its Gone</option>
                            <option value="Ace-Primo">Ace Primo</option>
                            <option value="Actual-Advice-Mallard">Actual Advice Mallard</option>
                            <option value="Admiral-Ackbar-Relationship-Expert">Admiral Ackbar Relationship Expert</option>
                            <option value="Advice-Dog">Advice Dog</option>
                            <option value="Advice-Doge">Advice Doge</option>
                            <option value="Advice-God">Advice God</option>
                            <option value="Advice-Peeta">Advice Peeta</option>
                            <option value="Advice-Tam">Advice Tam</option>
                            <option value="Advice-Yoda">Advice Yoda</option>
                            <option value="Afraid-To-Ask-Andy">Afraid To Ask Andy</option>
                            <option value="Afraid-To-Ask-Andy-Closeup">Afraid To Ask Andy Closeup</option>
                            <option value="Aint-Nobody-Got-Time-For-That">Aint Nobody Got Time For That</option>
                            <option value="Alan-Greenspan">Alan Greenspan</option>
                            <option value="Alarm-Clock">Alarm Clock</option>
                            <option value="Albert-Cagestein">Albert Cagestein</option>
                            <option value="Albert-Einstein-1">Albert Einstein 1</option>
                            <option value="Alien-Meeting-Suggestion">Alien Meeting Suggestion</option>
                            <option value="Alright-Gentlemen-We-Need-A-New-Idea">Alright Gentlemen We Need A New Idea</option>
                            <option value="Alyssa-Silent-Hill">Alyssa Silent Hill</option>
                            <option value="Am-I-The-Only-One-Around-Here">Am I The Only One Around Here</option>
                            <option value="American-Chopper-Argument">American Chopper Argument</option>
                            <option value="Ancient-Aliens">Ancient Aliens</option>
                            <option value="And-everybody-loses-their-minds">And everybody loses their minds</option>
                            <option value="And-then-I-said-Obama">And then I said Obama</option>
                            <option value="Angry-Asian">Angry Asian</option>
                            <option value="Angry-Baby">Angry Baby</option>
                            <option value="Angry-Birds-Pig">Angry Birds Pig</option>
                            <option value="Angry-Bride">Angry Bride</option>
                            <option value="Angry-Chef-Gordon-Ramsay">Angry Chef Gordon Ramsay</option>
                            <option value="Angry-Chicken-Boss">Angry Chicken Boss</option>
                            <option value="Angry-Dumbledore">Angry Dumbledore</option>
                            <option value="Angry-Koala">Angry Koala</option>
                            <option value="Angry-Rant-Randy">Angry Rant Randy</option>
                            <option value="Angry-Toddler">Angry Toddler</option>
                            <option value="Annoying-Childhood-Friend">Annoying Childhood Friend</option>
                            <option value="Annoying-Facebook-Girl">Annoying Facebook Girl</option>
                            <option value="Anri-Stares">Anri Stares</option>
                            <option value="Anti-Joke-Chicken">Anti Joke Chicken</option>
                            <option value="Apathetic-Xbox-Laser">Apathetic Xbox Laser</option>
                            <option value="Archer">Archer</option>
                            <option value="Are-Your-Parents-Brother-And-Sister">Are Your Parents Brother And Sister</option>
                            <option value="Are-you-a-Wizard">Are you a Wizard</option>
                            <option value="Arrogant-Rich-Man">Arrogant Rich Man</option>
                            <option value="Art-Attack">Art Attack</option>
                            <option value="Art-Student-Owl">Art Student Owl</option>
                            <option value="Arthur-Fist">Arthur Fist</option>
                            <option value="Asshole-Ref">Asshole Ref</option>
                            <option value="Aunt-Carol">Aunt Carol</option>
                            <option value="Austin-Powers-Honestly">Austin Powers Honestly</option>
                            <option value="Aw-Yeah-Rage-Face">Aw Yeah Rage Face</option>
                            <option value="Awkward-Moment-Sealion">Awkward Moment Sealion</option>
                            <option value="Awkward-Olympics">Awkward Olympics</option>
                            <option value="BANE-AND-BRUCE">BANE AND BRUCE</option>
                            <option value="BM-Employees">BM Employees</option>
                            <option value="Babushkas-On-Facebook">Babushkas On Facebook</option>
                            <option value="Baby-Cry">Baby Cry</option>
                            <option value="Baby-Godfather">Baby Godfather</option>
                            <option value="Baby-Insanity-Wolf">Baby Insanity Wolf</option>
                            <option value="Back-In-My-Day">Back In My Day</option>
                            <option value="Bad-Advice-Cat">Bad Advice Cat</option>
                            <option value="Bad-Joke-Eel">Bad Joke Eel</option>
                            <option value="Bad-Luck-Bear">Bad Luck Bear</option>
                            <option value="Bad-Luck-Brian">Bad Luck Brian</option>
                            <option value="Bad-Luck-Hannah">Bad Luck Hannah</option>
                            <option value="Bad-Pun-Anna-Kendrick">Bad Pun Anna Kendrick</option>
                             <option value="Bad-Pun-Dog">Bad Pun Dog</option>
                             <option value="Bad-Wife-Worse-Mom">Bad Wife Worse Mom</option>
                             <option value="Bah-Humbug">Bah Humbug</option>
                             <option value="Bane">Bane</option>
                             <option value="Bane-Permission">Bane Permission</option>
                             <option value="Barack-And-Kumar-2013">Barack And Kumar 2013</option>
                             <option value="Barba">Barba</option>
                             <option value="Barbosa-And-Sparrow">Barbosa And Sparrow</option>
                             <option value="Barney-Stinson-Win">Barney Stinson Win</option>
                             <option value="Baromney">Baromney</option>
                             <option value="Baron-Creater">Baron Creater</option>
                             <option value="Bart-Simpson-Peeking">Bart Simpson Peeking</option>
                             <option value="Batman-And-Superman">Batman And Superman</option>
                             <option value="Batman-Slapping-Robin">Batman Slapping Robin</option>
                             <option value="Batman-Smiles">Batman Smiles</option>
                             <option value="Batmobile">Batmobile</option>
                             <option value="Bazooka-Squirrel">Bazooka Squirrel</option>
                             <option value="Be-Like-Bill">Be Like Bill</option>
                             <option value="Bear-Grylls">Bear Grylls</option>
                             <option value="Beard-Baby">Beard Baby</option>
                             <option value="Bebo">Bebo</option>
                             <option value="Because-Race-Car">Because Race Car</option>
                             <option value="Ben-Barba-Pointing">Ben Barba Pointing</option>
                             <option value="Bender">Bender</option>
                             <option value="Benito">Benito</option>
                             <option value="Bernie-I-Am-Once-Again-Asking-For-Your-Support">Bernie I Am Once Again Asking For Your Support</option>
                             <option value="Beyonce-Knowles-Superbowl">Beyonce Knowles Superbowl</option>
                             <option value="Beyonce-Knowles-Superbowl-Face">Beyonce Knowles Superbowl Face</option>
                             <option value="Beyonce-Superbowl-Yell">Beyonce Superbowl Yell</option>
                            
                        </Select>
                    </FormControl>

                    <div className="top_bottom_text">
                        <TextField id="outlined-basic" label="Top Text" variant="outlined" fullWidth onChange={handleTopText} value={topText} />
                    </div>

                    <div className="top_bottom_text">
                        <TextField id="outlined-basic" label="Bottom Text" variant="outlined" fullWidth onChange={handleBottomText} value={bottomText} />
                    </div>

                    <Button variant="outlined" color="primary" onClick={createMeme}>
                        Create
                    </Button>

                    <div className="scroll_down_text" style={hideScrollDownText}>
<p>Scroll Down To Bottom To See Available Templates&nbsp;&nbsp;<i class="far fa-hand-point-down"></i></p>
</div>

                </div>

                <div className="result_meme" style={changeImageWidth}>
                    <img src={`http://apimeme.com/meme?meme=${selectInput}&top=${topText}&bottom=${bottomText}`} width="100%" />
                </div>
            </div>
<TitlebarImageListAll/>
            <MemeGeneratorNav/>
        </>
    );
}

export default HomeSticker;