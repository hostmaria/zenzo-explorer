import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./pages";
import About from "./pages/About/About";
import Explorer from "./pages/Explorer/Explorer";
import Blogs from "./pages/Blogs/Blogs";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/Explorer" element={<Explorer />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/blogs" element={<Blogs />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
