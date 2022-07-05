import thunk from "redux-thunk";
import { applyMiddleware, configureStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducers";

const middlware = [thunk];
const initialState = {};

export const store = configureStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlware)),
);

export default store;
