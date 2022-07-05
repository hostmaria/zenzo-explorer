import axios from "axios";
import { BASE_API } from "../../Constant";
import {
	FETCHING_TOP_HOLDERS,
	FETCH_TOP_HOLDERS_FAILED,
	FETCH_TOP_HOLDERS_SUCCESS,
} from "./actionTypes";

export const fetchTopHolders = async (dispatch) => {
	dispatch({ type: FETCHING_TOP_HOLDERS, payload: true });
	try {
		const res = await axios.get(BASE_API + "?q=rich");

		dispatch({ type: FETCH_TOP_HOLDERS_SUCCESS, payload: res.data.rich1000 });
		dispatch({ type: FETCHING_TOP_HOLDERS, payload: false });
	} catch (error) {
		dispatch({ type: FETCH_TOP_HOLDERS_FAILED, payload: true });
	}
};
