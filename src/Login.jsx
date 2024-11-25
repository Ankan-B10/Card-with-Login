import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
	const navigate = useNavigate();

	const predefinedEmail = "ankan@2003";
	const predefinedPassword = "123";

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleClick = () => {
		if (email === predefinedEmail && password === predefinedPassword) {
			setError(""); 
			navigate("/cards");
		} else {
			setError("Invalid email or password. Please try again.");
		}
	};

	return (
		<div className="box">
			<h2 className="title">Login</h2>
			<input
				className="email"
				type="email"
				placeholder="Enter your email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<br />
			<br />
			<input
				type="password"
				placeholder="Enter password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<br />
			<br />
			{error && <p className="error">{error}</p>}
			<button onClick={handleClick}>Login</button>
		</div>
	);
};
