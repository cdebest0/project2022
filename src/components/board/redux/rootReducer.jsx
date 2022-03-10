import { combineReducers } from "redux";
import btnReducer from "./boardbtn/reducer";

const rootReducer = combineReducers({
  alignment : btnReducer
});

export default rootReducer;