import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

import Card from "../component/card.jsx";

//store.people.map

export const Home = () => {
	const { store } = useContext(Context);
		return (
			<>
				<div className="container">
					<div className="row">Characters</div>
					<div className="row cards-row">
						{/* custom card tag to render all my people, planets, and vehicles */}
						{store.people.map(person => <Card key ={person.uid} name={person.name}/>)}
					</div>
					<div className="row">Planets</div>
					<div className="row cards-row">
						{store.planets.map(planet => <p>{planet.name}</p>)}
					</div>
					<div className="row">Vehicles</div>
					<div className="row cards-row">
						{store.vehicles.map(vehicle => <p>{vehicle.name}</p>)}
					</div>
				</div>
			</>
		);
	};
