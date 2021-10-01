import { SetUrl,TrendingMemeReducer } from "./index.js";
import { combineReducers } from "redux";

let RootReducer = combineReducers({
    SetUrl,
    TrendingMemeReducer,
});

export default RootReducer;