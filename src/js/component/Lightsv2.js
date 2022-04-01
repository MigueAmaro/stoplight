import React, { useState } from "react";

const Lights = () => {
	const [color, setColor] = useState("red");
	const [noShow, change] = useState("yes");
	return (
		<div className="container-center">
			<div className="top"></div>
			<div className="stoplight">
				<div
					className={color === "red" ? "red light glow" : "red light"}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color === "yellow"
							? "yellow light glow"
							: "yellow light"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color === "green" ? "green light glow" : "green light"
					}
					onClick={() => setColor("green")}></div>
				<div
					className={
						color === "orange"
							? "orange light glow"
							: "orange light"
					}
					style={
						noShow === "yes"
							? { display: "none" }
							: { display: "block" }
					}
					onClick={() => setColor("orange")}></div>
			</div>
			<div className="d-flex flex-column bd-highlight text-center">
				<button
					type="button"
					className="btn btn-dark text-center text-danger my-2"
					onClick={() =>
						color === "red"
							? setColor("yellow")
							: color === "yellow"
							? setColor("green")
							: color === "orange"
							? setColor("red")
							: noShow === "yes"
							? setColor("red")
							: setColor("orange")
					}>
					Press ME!
				</button>
				<button
					type="button"
					className="btn btn-primary text-center text-muted"
					onClick={() =>
						noShow === "yes" ? change("no") : change("yes")
					}>
					Bring out the purple
				</button>
			</div>
		</div>
	);
};

export default Lights;
