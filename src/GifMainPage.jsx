import './App.css';
import SearchGif from './searchGif';
import GifNavigation from './gifNavigation';
import  GifAndStickerFooter from "./gifAndStickerFooter";
function GifMainPage() {
  return (
  <>
<GifNavigation />
<SearchGif/>
<GifAndStickerFooter />
  </>
  );
}

export default GifMainPage;
