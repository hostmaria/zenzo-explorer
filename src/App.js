import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./pages";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import TopHolders from "./pages/TopHolders/TopHolders";
import Search from "./Components/Search/Search";
import { Backdrop, CircularProgress, Typography } from "@mui/material";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Search />
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/top-holders" element={<TopHolders />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/blogs" element={<Blogs />} />
				<Route exact path="/forum" element={<Forum />} />
			</Routes>
			<Footer />
		</div>
	);
}

const Forum = () => {
	window.location.replace("https://zenzoforum.com");

	return (
		<div>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={true}
			>
				<CircularProgress color="inherit" />
				<br />
				<Typography>Redirecting to Zenzo Forum - zenzoforum.com</Typography>
			</Backdrop>
		</div>
	);
};

export default App;
