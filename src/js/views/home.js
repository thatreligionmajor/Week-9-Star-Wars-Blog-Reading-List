import React, {useContext} from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

import Card from "../component/card.jsx";

//store.people.map

export const Home = () => {
	const { store } = useContext(Context);
		return (
			<>
				<body>
					<div className="container">
						<h2 className="row">Characters</h2>
						<hr></hr>
							<div className="row cards-row">
								{store.people.map((person, index) => <Card key={index} person={person} index={index} type="person"/>)}
							</div>
						<h2 className="row">Planets</h2>
						<hr></hr>
							<div className="row cards-row">
								{store.planets.map((planet, index) => <Card key={index} planet={planet} index={index} type="planet"/>)}
							</div>
						<h2 className="row">Vehicles</h2>
						<hr></hr>
							<div className="row cards-row">
								{store.vehicles.map((vehicle, index) => <Card key={index} vehicle={vehicle} index={index} type="vehicle"/>)}
							</div>
					</div>
				</body>
			</>
		);
	};
