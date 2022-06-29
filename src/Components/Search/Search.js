import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";

const Search = () => {
	return (
		<div>
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
				<TextField
					fullWidth
					placeholder="Search address, bloc, transaction, tag..."
				/>
				<Button sx={{ margin: 2 }} variant="contained">
					Search
				</Button>
			</Paper>
		</div>
	);
};

export default Search;
