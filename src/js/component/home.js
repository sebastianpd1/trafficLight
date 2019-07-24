import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			red: false,
			yellow: false,
			green: false
		};
	}
	render() {
		function trafficLight1(e) {
			e.preventDefault();
			console.log("The link was clicked.");
		}

		function trafficLight(e) {
			console.log("clicked");
			if (e.target.name == "yellowLight") {
				this.setState = {
					red: false,
					yellow: true,
					green: false
				};
			} else if (e.target.name == "redLight") {
				this.setState = {
					red: true,
					yellow: false,
					green: false
				};
			} else if (e.target.name == "greenLight") {
				this.setState = {
					red: false,
					yellow: false,
					green: true
				};
			}

			for (let key in this.state) {
				if (key === true) {
					e.target.ClassName = "lightActive rounded-circle col";
				}
			}
		}

		return (
			<div className="row">
				<div className="col offset-5 mt-2">
					<div
						className="trafficTop bg-dark offset-1"
						onClick={trafficLight}
					/>
					<div className="col-2 bg-dark py-2">
						<div
							name="redLight"
							className="redLight"
							onClick={trafficLight}>
							<div
								className="red rounded-circle bg-danger col"
								onClick={trafficLight}
							/>
						</div>
						<div name="yellowLight" className="yellowLight">
							<div className="yellow rounded-circle bg-warning col my-2" />
						</div>
						<div name="greenLight" className="greenLight">
							<div className="green rounded-circle bg-success col" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
