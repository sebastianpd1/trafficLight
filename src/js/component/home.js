import React from "react";

//include images into your bundle
let load = false;

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			red: false,
			yellow: false,
			green: false
		};
		this.trafficLight = this.trafficLight.bind(this);
	}

	trafficLight(e) {
		if (e.target.className.includes("yellow")) {
			this.setState({
				yellow: true,
				red: false,
				green: false
			});
		} else if (e.target.className.includes("red")) {
			this.setState({
				red: true,
				yellow: false,
				green: false
			});
		} else if (e.target.className.includes("green")) {
			this.setState({
				red: false,
				yellow: false,
				green: true
			});
		}
	}
	render() {
		if (load) {
			for (let key in this.state) {
				let cheatway =
					key === "red"
						? "bg-danger"
						: key === "yellow"
							? "bg-warning"
							: "bg-success";
				if (this.state[key])
					document.querySelector("." + key).className =
						key + " lightActive rounded-circle col";
				else
					document.querySelector("." + key).className =
						key + " rounded-circle col " + cheatway;
			}
		}
		load = true;
		return (
			<div className="row">
				<div className="col offset-5 mt-2">
					<div className="trafficTop bg-dark offset-1" />
					<div className="col-2 bg-dark py-2">
						<div
							name="redLight"
							className="redLight"
							onMouseOver={this.trafficLight}>
							<div className="red rounded-circle bg-danger col" />
						</div>
						<div name="yellowLight" className="yellowLight">
							<div
								onMouseOver={this.trafficLight}
								className="yellow rounded-circle bg-warning col my-2"
							/>
						</div>
						<div name="greenLight" className="greenLight">
							<div
								onMouseOver={this.trafficLight}
								className="green rounded-circle bg-success col"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
