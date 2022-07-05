import axios from "axios";
import { BASE_API } from "../../Constant";
import { FETCH_TOP_HOLDERS_SUCCESS } from "./actionTypes";

export const fetchTopHolders = async (dispatch) => {
	try {
		const res = await axios.get(BASE_API + "?q=rich");

		dispatch({ type: FETCH_TOP_HOLDERS_SUCCESS, payload: res.data.rich1000 });
	} catch (error) {}
};
