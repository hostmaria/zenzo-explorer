import {
	Facebook,
	GitHub,
	Instagram,
	LinkedIn,
	Twitter,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<Box
			position="static"
			sx={{
				color: "white",
				backgroundColor: "primary.main",
				justifyContent: {
					xl: "space-between",
					sm: "space-around",
					xs: "space-evenly",
				},
			}}
			display="flex"
			padding="5px 25px"
		>
			<Typography>
				&copy; {new Date().getFullYear()} Zenzo Explorer | All rights reserved |
				Project of{" "}
				<a
					style={{ textDecoration: "none", color: "#000" }}
					href="https://hostmaria.com"
				>
					HostMaria
				</a>
			</Typography>

			<div>
				<GitHub sx={{ paddingLeft: "20px", cursor: "pointer" }} />
				<Instagram sx={{ paddingLeft: "20px", cursor: "pointer" }} />
				<Facebook sx={{ paddingLeft: "20px", cursor: "pointer" }} />
				<Twitter sx={{ paddingLeft: "20px", cursor: "pointer" }} />
				<LinkedIn sx={{ paddingLeft: "20px", cursor: "pointer" }} />
			</div>
		</Box>
	);
};

export default Footer;
