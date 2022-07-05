import { FETCH_TRANSACTION_SUCCESS } from "../actions/actionTypes";

const initialState = {
	transactionDetail: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TRANSACTION_SUCCESS:
			return {
				...state,
				transactionDetail: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
