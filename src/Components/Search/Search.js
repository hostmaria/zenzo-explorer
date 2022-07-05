import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

const Search = () => {
	const [textFeild, setTextFeild] = useState("");
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
					value={textFeild}
					onChange={(e) => setTextFeild(e.target.value)}
					fullWidth
					// placeholder="Search address, block, transaction, tag..."
					placeholder="This feature is currently in development mode... Please try later..."
				/>
				<Button sx={{ margin: 2 }} variant="contained">
					Search
				</Button>
			</Paper>
		</div>
	);
};

export default Search;
