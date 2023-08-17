import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    
    return (
        <>
            <div className="card" key={people.results.uid} style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text"></p>
                    <p className="card-text"></p>
                    <p className="card-text"></p>
                </div>
                <div className="card-body">
                    <Link to={'/people/' + people.uid} className="btn btn-primary">Profile</Link>
                    {/* create link to people and update corresponding file name to reflect it */}
                    <button className="btn btn-primary">♥️</button>
                </div>
            </div>
        </>
    );

    Card.prototypes = {
        name: PropTypes.string
    };
};

export default Card;