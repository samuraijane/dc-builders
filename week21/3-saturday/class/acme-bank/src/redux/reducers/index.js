import { combineReducers } from "redux";
import checking from "./checking";
import billpay from "./billpay";
import savings from "./savings";

export default combineReducers({ billpay, checking, savings });
