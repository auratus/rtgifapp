import  React, { useEffect, useState } from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import "./availableTemplates.css";
// import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList(props) {
    let[adjustTemplatePreviewArea,setAdjustTemplatePreviewArea] = useState();
    let[ adjustTemplateTextArea,setAdjustTemplateTextArea] = useState();
    let[adjustPreviewTemplatesArea,setAdjustPreviewTemplatesArea] = useState();
    let[templatesCols,setTemplatesCols] = useState(4);
    let[handIcon1,setHandicon1] = useState();
    let[handIcon2,setHandIcon2] = useState({ display:'none' });
    console.log(props.availableImages[0]);
    let availableArr = props.availableImages;

  useEffect(()=>{
      if(window.screen.width<=1080){
    setAdjustTemplatePreviewArea({ minHeight:"100vh",flexDirection:"column" }); 
    setAdjustTemplateTextArea( { width:"90%" } );
    setAdjustPreviewTemplatesArea({ width:"95%" });
    setTemplatesCols(2);
    setHandicon1({ display:"none" });
    setHandIcon2({ display:"inline" });
      }
  },[])
  return (
      <div id="available_templates_main" style={ adjustTemplatePreviewArea }>
          <div id="available_templates_child1" style={ adjustTemplateTextArea }>
<h2>Available Meme Templates&nbsp;&nbsp;<i class="far fa-hand-point-right" style={ handIcon1 }></i><i class="far fa-hand-point-down" style={ handIcon2 }></i></h2>
<p>Here is the complete list of meme templates we have.Easy to use meme generator app.Just 
    select meme template,add text and your meme is ready !</p>
          </div>
          <div id="available_templates_child2" style={ adjustPreviewTemplatesArea }>
    <ImageList  cols={templatesCols} style={{ maxHeight:"70vh" }}>
      {/* <ImageListItem key="Subheader" >
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem> */}
      {availableArr.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.author}
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

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];