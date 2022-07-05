import {
	FETCHING_TOP_HOLDERS,
	FETCH_TOP_HOLDERS_FAILED,
	FETCH_TOP_HOLDERS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
	topHolders: null,
	isLoading: false,
	isError: false,
};

const fetchTopHolderReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TOP_HOLDERS_SUCCESS:
			return {
				...state,
				topHolders: action.payload,
			};
		case FETCHING_TOP_HOLDERS:
			return {
				...state,
				isLoading: action.payload,
			};
		case FETCH_TOP_HOLDERS_FAILED:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};

export default fetchTopHolderReducer;
