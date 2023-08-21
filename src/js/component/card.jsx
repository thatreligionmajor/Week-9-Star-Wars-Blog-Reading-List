import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
    const {store, actions} = useContext(Context);

    let field
    props.type === "person" ? (
        field = <div className="card text-white bg-dark" style={{width: "18rem"}}>
                    <img 
                        className="card-img-top" 
                        alt="Card image cap"
                        src={`https://starwars-visualguide.com/assets/img/characters/${props.index + 1}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.person.name}</h5>
                        <p className="card-text">Eye Color: {props.person.eye_color}</p>
                        <p className="card-text">Mass: {props.person.mass}</p>
                        <p className="card-text">Hair Color: {props.person.hair_color}</p>
                    </div>
                    <div className="card-buttons">
                            <Link to={'profile/people/' + props.index} className="btn btn-secondary btn-card">Profile</Link>
                            <button className="btn btn-secondary btn-card" onClick={()=>actions.addFavorite(props.person.name)}>♥️</button>
                    </div>
            </div>
    ) : null

    props.type === "planet" ? (
        field = <div className="card text-white bg-dark" style={{width: "18rem"}}>
                    <img 
                        className="card-img-top" 
                        alt="Card image cap"
                        src={`https://starwars-visualguide.com/assets/img/planets/${props.index + 1}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.planet.name}</h5>
                        <p className="card-text">Climate: {props.planet.climate}</p>
                        <p className="card-text">Gravity: {props.planet.gravity}</p>
                        <p className="card-text">Rotation: {props.planet.rotation_period}</p>
                    </div>
                    <div className="card-buttons">
                        <Link to={'/profile/planets/' + props.index} className="btn btn-secondary btn-card">Profile</Link>
                        <button className="btn btn-secondary btn-card" onClick={()=>actions.addFavorite(props.planet.name)}>♥️</button>
                    </div>
            </div>
    ) : null

    props.type === "vehicle" ? (
        field = <div className="card text-white bg-dark" style={{width: "18rem"}}>
                    <img 
                        className="card-img-top" 
                        alt="Card image cap"
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${props.index + 1}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.vehicle.name}</h5>
                        <p className="card-text">Vehicle Model: {props.vehicle.model}</p>
                        <p className="card-text">Vehicle Class: {props.vehicle.vehicle_class}</p>
                        <p className="card-text">Manufacturer: {props.vehicle.manufacturer}</p>
                    </div>
                    <div className="card-buttons">
                        <Link to={'profile/vehicles/' + props.index} className="btn btn-secondary btn-card">Profile</Link>
                        <button className="btn btn-secondary btn-card" onClick={()=>actions.addFavorite(props.vehicle.name)}>♥️</button>
                    </div>
            </div>
    ): null
    
    return (
        <>
            {field}
        </>
    );

    Card.prototype = {
        name: PropTypes.string
    };
};

export default Card;