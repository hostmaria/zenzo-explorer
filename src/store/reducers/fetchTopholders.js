import { FETCH_TOP_HOLDERS_SUCCESS } from "../actions/actionTypes";

const initialState = {
	topHolders: null,
};

const fetchTopHolderReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TOP_HOLDERS_SUCCESS:
			return {
				...state,
				topHolders: action.payload,
			};
		default:
			return state;
	}
};

export default fetchTopHolderReducer;
