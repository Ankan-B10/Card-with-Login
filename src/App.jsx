import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import { Login } from "./Login";
import Home from "./Home";
import AnimatedCard from "./AnimatedCard";

function App() {
	return (
		<>
			<BrowserRouter
				future={{
					v7_startTransition: true,
					v7_relativeSplatPath: true,
				}}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/cards" element={<AnimatedCard />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
