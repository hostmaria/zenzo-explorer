import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Blocks from "../Components/Blocks/Blocks";
import CollapsibleTable from "../Components/Blocks/Collapse";
import ConductTransaction from "../Components/ConductTransaction/ConductTransaction";
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

	return (
		<Grid container spacing={2} padding={3}>
			<Grid item xs={8}>
				{/* <Blocks /> */}
			</Grid>
			<Grid item xs={4}>
				<WalletInfo address={wallet?.address} balance={wallet?.balance} />
				<ConductTransaction fetchWalet={fetchWalet()} />
			</Grid>
		</Grid>
	);
};

export default Homepage;
