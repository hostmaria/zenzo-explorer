import axios from "axios";
import { FETCH_TRANSACTION_SUCCESS } from "./actionTypes";

const fetchTransactionSuccess = (data) => {
	return {
		type: FETCH_TRANSACTION_SUCCESS,
		payload: data,
	};
};

export const fetchTransaction = (transactionHash) => {
	return (dispatch) => {
		axios.get('')
	};
};
