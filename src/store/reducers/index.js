import { combineReducers } from "redux";
import fetchTransaction from "./fetchTransaction";
import fetchTopHolderReducer from "./fetchTopholders";

const rootReducer = combineReducers({
	fetchTransaction,
	fetchTopHolderReducer,
});

export default rootReducer;
