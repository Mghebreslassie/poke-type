import { combineReducers } from "redux";
import PokeReducer from "./PokeReducer";

const rootReducer = combineReducers({
  poketeam: PokeReducer,
});

export default rootReducer;
