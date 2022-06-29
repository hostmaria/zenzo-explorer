import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		primary: {
			main: "#9782FF",
		},
		secondary: {
			main: green[500],
		},
	},
});

export default theme;
