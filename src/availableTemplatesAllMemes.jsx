import React, { useEffect, useState } from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import "./availableTemplates.css";
// import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageListAll(props) {
    let [adjustTemplatePreviewArea, setAdjustTemplatePreviewArea] = useState();
    let [adjustTemplateTextArea, setAdjustTemplateTextArea] = useState();
    let [adjustPreviewTemplatesArea, setAdjustPreviewTemplatesArea] = useState();
    let [templatesCols, setTemplatesCols] = useState(4);
    let [handIcon1, setHandicon1] = useState();
    let [handIcon2, setHandIcon2] = useState({ display: 'none' });
    // console.log(props.availableImages[0]);
    let availableArr = [{ name: "10 Guy", url: "http://apimeme.com/meme?meme=10-Guy&top=&bottom=" },
    { name: "1990s First World Problems", url: "http://apimeme.com/meme?meme=1990s-First-World-Problems&top=&bottom="},
    { name: "1st World Canadian Problems", url: "http://apimeme.com/meme?meme=1st-World-Canadian-Problems&top=&bottom=" },
    { name: "2nd Term Obama", url: "http://apimeme.com/meme?meme=2nd-Term-Obama&top=&bottom=" },
    { name: "Aaaaand Its Gone", url: "http://apimeme.com/meme?meme=Aaaaand-Its-Gone&top=&bottom="},
    { name: "Ace Primo", url: "http://apimeme.com/meme?meme=Ace-Primo&top=&bottom="},
    { name: "Actual Advice Mallard", url: "http://apimeme.com/meme?meme=Actual-Advice-Mallard&top=&bottom="},
    { name: "Adalia Rose", url: "http://apimeme.com/meme?meme=Adalia-Rose&top=&bottom="},
    { name: "Admiral Ackbar Relationship Expert", url: "http://apimeme.com/meme?meme=Admiral-Ackbar-Relationship-Expert&top=&bottom=" },
    { name: "Advice Dog", url: "http://apimeme.com/meme?meme=Advice-Dog&top=&bottom="},
    { name: "Advice Doge", url: "http://apimeme.com/meme?meme=Advice-Doge&top=&bottom="},
    { name: "Advice God", url: "http://apimeme.com/meme?meme=Advice-God&top=&bottom="},
    { name: "Advice Peeta", url: "http://apimeme.com/meme?meme=Advice-Peeta&top=&bottom="},
    { name: "Advice Tam", url: "http://apimeme.com/meme?meme=Advice-Tam&top=&bottom="},
    { name: "Advice Yoda", url: "http://apimeme.com/meme?meme=Advice-Yoda&top=&bottom="},
    { name: "Afraid To Ask Andy", url: "http://apimeme.com/meme?meme=Afraid-To-Ask-Andy&top=&bottom="},
    { name: "Afraid To Ask Andy Closeup", url: "http://apimeme.com/meme?meme=Afraid-To-Ask-Andy-Closeup&top=&bottom="},
    { name: "Aint Nobody Got Time For That", url: "http://apimeme.com/meme?meme=Aint-Nobody-Got-Time-For-That&top=&bottom="},
    { name: "Alan Greenspan", url: "http://apimeme.com/meme?meme=Alan-Greenspan&top=&bottom="},
    { name: "Alarm Clock", url: "http://apimeme.com/meme?meme=Alarm-Clock&top=&bottom="},
    { name: "Albert Cagestein", url: "http://apimeme.com/meme?meme=Albert-Cagestein&top=&bottom="},
    { name: "Albert Einstein 1", url: "http://apimeme.com/meme?meme=Albert-Einstein-1&top=&bottom="},
    { name: "Alien Meeting Suggestion", url: "http://apimeme.com/meme?meme=Alien-Meeting-Suggestion&top=&bottom="},
    { name: "Alright Gentlemen We Need A New Idea", url: "http://apimeme.com/meme?meme=Alright-Gentlemen-We-Need-A-New-Idea&top=&bottom="},
    { name: "Alyssa Silent Hill", url: "http://apimeme.com/meme?meme=Alyssa-Silent-Hill&top=&bottom="},
    { name: "Am I The Only One Around Here", url: "http://apimeme.com/meme?meme=Am-I-The-Only-One-Around-Here&top=&bottom="},
    { name: "American Chopper Argument", url: "http://apimeme.com/meme?meme=American-Chopper-Argument&top=&bottom="},
    { name: "Ancient Aliens", url: "http://apimeme.com/meme?meme=Ancient-Aliens&top=&bottom="},
    { name: "And everybody loses their minds", url: "http://apimeme.com/meme?meme=And-everybody-loses-their-minds&top=&bottom="},
    { name: "And then I said Obama", url: "http://apimeme.com/meme?meme=And-then-I-said-Obama&top=&bottom="},
    { name: "Angry Asian", url: "http://apimeme.com/meme?meme=Angry-Asian&top=&bottom="},
    { name: "Angry Baby", url: "http://apimeme.com/meme?meme=Angry-Baby&top=&bottom="},
    { name: "Angry Birds Pig", url: "http://apimeme.com/meme?meme=Angry-Birds-Pig&top=&bottom="},
    { name: "Angry Bride", url: "http://apimeme.com/meme?meme=Angry-Bride&top=&bottom="},
    { name: "Angry Chef Gordon Ramsay", url: "http://apimeme.com/meme?meme=Angry-Chef-Gordon-Ramsay&top=&bottom="},
    { name: "Angry Chicken Boss", url: "http://apimeme.com/meme?meme=Angry-Chicken-Boss&top=&bottom="},
    { name: "Angry Dumbledore", url: "http://apimeme.com/meme?meme=Angry-Dumbledore&top=&bottom="},
    { name: "Angry Koala", url: "http://apimeme.com/meme?meme=Angry-Koala&top=&bottom="},
    { name: "Angry Rant Randy", url: "http://apimeme.com/meme?meme=Angry-Rant-Randy&top=&bottom="},
    { name: "Angry Toddler", url: "http://apimeme.com/meme?meme=Angry-Toddler&top=&bottom="},
    { name: "Annoying Childhood Friend", url: "http://apimeme.com/meme?meme=Annoying-Childhood-Friend&top=&bottom="},
    { name: "Annoying Facebook Girl", url: "http://apimeme.com/meme?meme=Annoying-Facebook-Girl&top=&bottom="},
    { name: "Anri Stares", url: "http://apimeme.com/meme?meme=Anri-Stares&top=&bottom="},
    { name: "Anti Joke Chicken", url: "http://apimeme.com/meme?meme=Anti-Joke-Chicken&top=&bottom="},
    { name: "Apathetic Xbox Laser", url: "http://apimeme.com/meme?meme=Apathetic-Xbox-Laser&top=&bottom="},
    { name: "Archer", url: "http://apimeme.com/meme?meme=Archer&top=&bottom="},
    { name: "Are Your Parents Brother And Sister", url: "http://apimeme.com/meme?meme=Are-Your-Parents-Brother-And-Sister&top=&bottom="},
    { name: "Arrogant Rich Man", url: "http://apimeme.com/meme?meme=Arrogant-Rich-Man&top=&bottom="},
    { name: "Art Attack", url: "http://apimeme.com/meme?meme=Art-Attack&top=&bottom="},
    { name: "Art Student Owl", url: "http://apimeme.com/meme?meme=Art-Student-Owl&top=&bottom="},
    { name: "Arthur-Fist", url: "http://apimeme.com/meme?meme=Arthur-Fist&top=&bottom="},
    { name: "Asshole Ref", url: "http://apimeme.com/meme?meme=Asshole-Ref&top=&bottom="},
    { name: "Aunt Carol", url: "http://apimeme.com/meme?meme=Aunt-Carol&top=&bottom="},
    { name: "Austin Powers Honestly", url: "http://apimeme.com/meme?meme=Austin-Powers-Honestly&top=&bottom="},
    { name: "Aw Yeah Rage Face", url: "http://apimeme.com/meme?meme=Aw-Yeah-Rage-Face&top=&bottom="},
    { name: "Awkward Moment Sealion", url: "http://apimeme.com/meme?meme=Awkward-Moment-Sealion&top=&bottom="},
    { name: "Awkward Olympics", url: "http://apimeme.com/meme?meme=Awkward-Olympics&top=&bottom="},
    { name: "BANE AND BRUCE", url: "http://apimeme.com/meme?meme=BANE-AND-BRUCE&top=&bottom="},
    { name: "BM Employees", url: "http://apimeme.com/meme?meme=BM-Employees&top=&bottom="},
    { name: "Babushkas On Facebook", url: "http://apimeme.com/meme?meme=Babushkas-On-Facebook&top=&bottom="},
    { name: "Baby Cry", url: "http://apimeme.com/meme?meme=Baby-Cry&top=&bottom="},
    { name: "Baby Godfather", url: "http://apimeme.com/meme?meme=Baby-Godfather&top=&bottom="},
    { name: "Baby Insanity Wolf", url: "http://apimeme.com/meme?meme=Baby-Insanity-Wolf&top=&bottom="},
    { name: "Back In My Day", url: "http://apimeme.com/meme?meme=Back-In-My-Day&top=&bottom="},
    { name: "Bad Advice Cat", url: "http://apimeme.com/meme?meme=Bad-Advice-Cat&top=&bottom="},
    { name: "Bad Joke Eel", url: "http://apimeme.com/meme?meme=Bad-Joke-Eel&top=&bottom="},
    { name: "Bad Luck Bear", url: "http://apimeme.com/meme?meme=Bad-Luck-Bear&top=&bottom="},
    { name: "Bad Luck Brian", url: "http://apimeme.com/meme?meme=Bad-Luck-Brian&top=&bottom="},
    { name: "Bad Luck Hannah", url: "http://apimeme.com/meme?meme=Bad-Luck-Hannah&top=&bottom="},
    { name: "Bad Pun Anna Kendrick", url: "http://apimeme.com/meme?meme=Bad-Pun-Anna-Kendrick&top=&bottom="},
    { name: "Bad Pun Dog", url: "http://apimeme.com/meme?meme=Bad-Pun-Dog&top=&bottom="},
    { name: "Bad Wife Worse Mom", url: "http://apimeme.com/meme?meme=Bad-Wife-Worse-Mom&top=&bottom="},
    { name: "Bah Humbug", url: "http://apimeme.com/meme?meme=Bah-Humbug&top=&bottom="},
    { name: "Bane", url: "http://apimeme.com/meme?meme=Bane&top=&bottom="},
    { name: "Bane Permission", url: "http://apimeme.com/meme?meme=Bane-Permission&top=&bottom="},
    { name: "Barack And Kumar 2013", url: "http://apimeme.com/meme?meme=Barack-And-Kumar-2013&top=&bottom="},
    { name: "Barba", url: "http://apimeme.com/meme?meme=Barba&top=&bottom="},
    { name: "Barbosa And Sparrow", url: "http://apimeme.com/meme?meme=Barbosa-And-Sparrow&top=&bottom="},
    { name: "Barney Stinson Win", url: "http://apimeme.com/meme?meme=Barney-Stinson-Win&top=&bottom="},
    { name: "Baromney", url: "http://apimeme.com/meme?meme=Baromney&top=&bottom="},
    { name: "Baron Creater", url: "http://apimeme.com/meme?meme=Baron-Creater&top=&bottom="},
    { name: "Bart Simpson Peeking", url: "http://apimeme.com/meme?meme=Bart-Simpson-Peeking&top=&bottom="},
    { name: "Batman And Superman", url: "http://apimeme.com/meme?meme=Batman-And-Superman&top=&bottom="},
    { name: "Batman Slapping Robin", url: "http://apimeme.com/meme?meme=Batman-Slapping-Robin&top=&bottom="},
    { name: "Batman Smiles", url: "http://apimeme.com/meme?meme=Batman-Smiles&top=&bottom="},
    { name: "Batmobile", url: "http://apimeme.com/meme?meme=Batmobile&top=&bottom="},
    { name: "Bazooka Squirrel", url: "http://apimeme.com/meme?meme=Bazooka-Squirrel&top=&bottom="},
    { name: "Be Like Bill", url: "http://apimeme.com/meme?meme=Be-Like-Bill&top=&bottom="},
    { name: "Bear Grylls", url: "http://apimeme.com/meme?meme=Bear-Grylls&top=&bottom="},
    { name: "Beard Baby", url: "http://apimeme.com/meme?meme=Beard-Baby&top=&bottom="},
    { name: "Bebo", url: "http://apimeme.com/meme?meme=Bebo&top=&bottom="},
    { name: "Because Race Car", url: "http://apimeme.com/meme?meme=Because-Race-Car&top=&bottom="},
    { name: "Ben Barba Pointing", url: "http://apimeme.com/meme?meme=Ben-Barba-Pointing&top=&bottom="},
    { name: "Bender", url: "http://apimeme.com/meme?meme=Bender&top=&bottom="},
    { name: "Bernie I Am Once Again Asking For Your Support", url: "http://apimeme.com/meme?meme=Bernie-I-Am-Once-Again-Asking-For-Your-Support&top=&bottom="},
    { name: "Beyonce Knowles Superbowl", url: "http://apimeme.com/meme?meme=Beyonce-Knowles-Superbowl&top=&bottom="},
    { name: "Beyonce Knowles Superbowl Face", url: "http://apimeme.com/meme?meme=Beyonce-Knowles-Superbowl-Face&top=&bottom="},
    { name: "Beyonce Superbowl Yell", url: "http://apimeme.com/meme?meme=Beyonce-Superbowl-Yell&top=&bottom="},
    { name: "Big Bird", url: "http://apimeme.com/meme?meme=Big-Bird&top=&bottom="}];

    useEffect(() => {
        if (window.screen.width <= 1080) {
            setAdjustTemplatePreviewArea({ minHeight: "100vh", flexDirection: "column" });
            setAdjustTemplateTextArea({ width: "90%" });
            setAdjustPreviewTemplatesArea({ width: "95%" });
            setTemplatesCols(2);
            setHandicon1({ display: "none" });
            setHandIcon2({ display: "inline" });
        }
    }, [])
    return (
        <div id="available_templates_main" style={adjustTemplatePreviewArea}>
            <div id="available_templates_child1" style={adjustTemplateTextArea}>
                <h2>Available Meme Templates&nbsp;&nbsp;<i class="far fa-hand-point-right" style={handIcon1}></i><i class="far fa-hand-point-down" style={handIcon2}></i></h2>
                <p>Here is the complete list of meme templates we have.Easy to use meme generator app.Just
                    select meme template,add text and your meme is ready !</p>
            </div>
            <div id="available_templates_child2" style={adjustPreviewTemplatesArea}>
                <ImageList cols={templatesCols} style={{ maxHeight: "70vh" }}>
                    {/* <ImageListItem key="Subheader" >
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem> */}
                    {availableArr.map((item) => (
                        <ImageListItem key={item.name}>
                            <img
                                src={`${item.url}`}
                                srcSet={`${item.url}`}
                                alt={item.name}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.name}
                                subtitle={item.name}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.name}`}
                                    >
                                        {/* <InfoIcon /> */}
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    );
}
