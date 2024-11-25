import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/login");
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<button
				onClick={handleClick}
				style={{
					backgroundColor: "tomato",
					color: "#ffffff",
					padding: "12px 24px",
					fontSize: "18px",
					fontWeight: "bold",
					border: "none",
					borderRadius: "10px",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
					cursor: "pointer",
				}}>
				Login Now
			</button>
		</div>
	);
}
