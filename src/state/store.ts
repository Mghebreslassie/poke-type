import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PokeReducer from "./reducers/index";

export const store = createStore(PokeReducer, {}, applyMiddleware(thunk));
