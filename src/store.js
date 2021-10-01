import RootReducer from "./reducers/combine";
import { createStore } from "redux";

let Store = createStore(RootReducer);

export default Store;