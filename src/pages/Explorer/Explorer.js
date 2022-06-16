import { Grid } from "@mui/material";
import React from "react";
import Blocks from "../../Components/Blocks/Blocks";

const Explorer = () => {
	return (
		<Grid container spacing={2} padding={3}>
			<Grid item xs={12}>
				<Blocks />
			</Grid>
		</Grid>
	);
};

export default Explorer;
