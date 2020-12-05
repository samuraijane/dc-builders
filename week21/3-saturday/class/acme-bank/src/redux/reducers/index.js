import { combineReducers } from "redux";
import checking from "./checking";
import savings from "./savings";

export default combineReducers({ checking, savings });