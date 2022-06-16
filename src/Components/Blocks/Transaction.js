import { TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

const Transaction = ({ input, outputMap }) => {
	return (
		<>
			<Typography variant="p" gutterBottom component="div">
				From: {input.address} <br /> Balance: {input.amount}
			</Typography>
			{Object.keys(outputMap).map((recipient) => (
				<TableRow key={recipient}>
					<TableCell component="th" scope="row">
						To: {recipient}
					</TableCell>
					<TableCell component="th" scope="row">
						{outputMap[recipient]}
					</TableCell>
				</TableRow>
			))}
		</>
	);
};

export default Transaction;
