import React from "react";
import { useState } from "react";

const Lights = () => {
	const [color, setColor] = useState("red");
	return (
		<div className="container-center">
			<div className="stoplight">
				<div className="top"></div>
				<div
					className={`light red ${color === "red" ? "glow" : ""}`}
					onClick={() => {
						setColor("red");
					}}></div>
				<div
					className={`light yellow ${
						color === "yellow" ? "glow" : ""
					}`}
					onClick={() => {
						setColor("yellow");
					}}></div>
				<div
					className={`light green ${color === "green" ? "glow" : ""}`}
					onClick={() => {
						setColor("green");
					}}></div>
			</div>
		</div>
	);
};

export default Lights;
