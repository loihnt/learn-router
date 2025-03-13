import { NavLink, Outlet } from "react-router";

function App() {
	return (
		<>
			<div className="space-x-4">
				<NavLink to={"/root/about"}>About me</NavLink>
				<NavLink to={"/root/intro"}>Introduce</NavLink>
				<NavLink to={"/root/teoem/:id"}>Teo em</NavLink>
				<NavLink to={"/root"}>Root</NavLink>
			</div>
			<Outlet></Outlet>
		</>
	);
}

export default App;
