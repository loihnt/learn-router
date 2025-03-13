import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import About from "./about";
import Teoem from "./teoem";
import Intro from "./intro";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/root" element={<App />}>
					<Route path="intro" element={<Intro />} />
					<Route path="about" element={<About />} />
					<Route path="teoem/:id" element={<Teoem />} />
				</Route>
			</Routes>
		</BrowserRouter>{" "}
	</StrictMode>
);
