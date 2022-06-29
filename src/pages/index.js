import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import WalletInfo from "../Components/WalletInfo/WalletInfo";

import { BASE_API } from "../Constant";

const Homepage = () => {
	const [wallet, setWallet] = useState();

	useEffect(() => {
		fetchWalet();
	}, []);

	const fetchWalet = () => {
		axios.get(BASE_API + `/api/wallet-info`).then((res) => setWallet(res.data));
	};

	return <Grid container spacing={2} padding={3}></Grid>;
};

export default Homepage;
