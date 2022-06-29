import * as React from "react";

import { Paper, Typography, TextField } from "@mui/material";
import CustomSnackbar from "../Snackbar/Snackbar";

const copyAddress = (address) => {
	navigator.clipboard.writeText(address);
};

const WalletInfo = ({ address, balance }) => {
	return (
		<>
			<Paper
				elevation={3}
				sx={{
					padding: 1,
					margin: 1,
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
					wordWrap: "break-word",
				}}
			>
				<Typography variant="subtitle1" color="primary">
					Wallet:
				</Typography>
				<TextField
					placeholder="Search address, bloc, transaction, tag..."
					value={address}
				/>

				<CustomSnackbar
					click={() => copyAddress(address)}
					type="success"
					message="Copied!"
					buttonName="Copy"
				/>
			</Paper>
		</>
	);
};

export default WalletInfo;
