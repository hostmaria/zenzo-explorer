import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Paper, Typography } from "@mui/material";
import axios from "axios";
import { BASE_API } from "../../Constant";

const ConductTransaction = ({ fetchWallet }) => {
	const [recipient, setRecipient] = useState("");
	const [amount, setAmount] = useState(0);

	const conductTransaction = () => {
		axios
			.post(BASE_API + "/api/transact", {
				recipient: recipient,
				amount: amount,
			})
			.then((res) => console.log(res.data), setRecipient(""), setAmount(0))
			.then(fetchWallet);
	};

	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": {
					m: 1,
				},
			}}
			noValidate
			autoComplete="off"
		>
			<Paper
				elevation={3}
				sx={{
					padding: 3,
					margin: 1,
				}}
			>
				<Typography variant="h5">SEND</Typography>
				<TextField
					fullWidth={true}
					label="Wallet Address"
					id="outlined-size-small"
					value={recipient}
					onChange={(e) => setRecipient(e.target.value)}
					size="small"
				/>
				<TextField
					type="number"
					fullWidth={true}
					label="Amount"
					id="outlined-size-small"
					value={amount}
					onChange={(e) => setAmount(Number(e.target.value))}
					size="small"
				/>
				<Button variant="contained" onClick={conductTransaction}>
					Submit
				</Button>
			</Paper>
		</Box>
	);
};
export default ConductTransaction;
