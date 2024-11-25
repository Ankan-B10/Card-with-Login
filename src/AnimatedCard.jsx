import React from "react";
import Ajay_img from "./assets/Ajay.jpeg";
import Ankan_img from "./assets/Ankan.jpeg";
import "./AnimatedCard.css";
const AnimatedCard = () => {
	return (
		<div className="container">
      <h1 className="title">Card Hover</h1>
			<div className="wrapper">
				<div className="card-area">
					<div className="card">
						<img src={Ajay_img}/>
						<div className="overlay">
							<h3>AJAY MONDAL</h3>
							<p>
							SOFTWARE ENGINEER, FULL STACK DEVELOPER, MERN STACK ENGINEER
							</p>
							<a href="https://github.com/mrakmondal6612">Learn more</a>
						</div>
					</div>
					<div className="card">
						<img src={Ankan_img} alt="" />
						<div className="overlay">
							<h3>ANKAN BERA</h3>
							<p>
							SOFTWARE ENGINEER, FRONTEND DEVELOPER
							</p>
							<a href="https://github.com/Ankan-B10">Learn more</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimatedCard;
