import { combineReducers } from "redux";
import goodsReducer from "./counter";
import loginClick from "./loginClick";


const rootRudcer = combineReducers(
  {
    goodsReducer,
    loginClick
  }
)

export default rootRudcer;