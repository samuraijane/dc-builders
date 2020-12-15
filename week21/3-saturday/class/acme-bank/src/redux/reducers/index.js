import { combineReducers } from "redux";
import checking from "./checking";
import billpay from "./billpay";
import representative from "./representative";
import savings from "./savings";

export default combineReducers({ billpay, checking, representative, savings });
