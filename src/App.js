import './App.css';
import HomePage from './HomePage';
import GifMainPage from './GifMainPage';
import { Route, Switch } from "react-router-dom";
import Error from './Error';
import Homesticker from "./Homesticker"
import randomGif from "./randomGif";
import ActualStickersPage from "./actualStickersPage";
import RandomStickers from './randomStickers';
import TrendingMeme from './trendingMeme';
import MemeMainPage from './memeMainPage';
import SelectByCategoryGif from "./selectByCategoryGif";
import TypeOfGif from './TypeOfGif';
import SupremePage from './SupremePage';
import StickerMainPage from "./StickerMainPage";

function App() {
  return (
  <>
  <Switch>
    <Route exact path="/" component={SupremePage} />
  <Route path="/GifMainPage" component={GifMainPage} />
  <Route exact={true} path="/homesticker" component={Homesticker} />
  <Route exact={true} path="/randomgif" component={randomGif} />
  <Route exact={true} path="/actualstickersPage" component={ActualStickersPage} />
  <Route exact={true} path="/randomstickers" component={RandomStickers} />
  <Route exact={true} path="/trendingmeme" component={TrendingMeme} />
  <Route exact={true} path="/mememainpage" component={MemeMainPage} />
  <Route exact={true} path="/selectbycategorygif" component={SelectByCategoryGif} />
  <Route exact={true} path="/typeofgif" component={TypeOfGif} />
  <Route exact={true} path="/homepage" component={HomePage} />
  <Route exact={true} path="/stickermainpage" component={StickerMainPage} />
<Route component={Error} />
</Switch>
  </>
  );
}

export default App;
