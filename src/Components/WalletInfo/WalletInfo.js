import * as React from "react";

import { Paper, Typography, TextField, Divider } from "@mui/material";
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
				<TextField value={address ? address : "loading..."} />

				<CustomSnackbar
					click={() => copyAddress(address)}
					type="success"
					message="Copied!"
					buttonName="Copy"
				/>
			</Paper>
			<Paper
				elevation={3}
				sx={{
					padding: 1,
					margin: 1,
				}}
			>
				<Typography fontWeight={700} variant="subtitle1" color="primary">
					Balance: {balance}
				</Typography>
			</Paper>
		</>
	);
};

export default WalletInfo;
