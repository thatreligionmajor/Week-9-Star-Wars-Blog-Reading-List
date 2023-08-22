import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/profile.css";

const Profile = (props) => {
    const{store, actions}=useContext(Context);
    let params = useParams();
    console.log(params);
    let field 
    let item = store[`${params.type}`][`${params.index}`]

    // need help displaying profiles correctly 

    params.type === "people" ? (
        field = (
            <div className="wrapper">
                <div className="profile-top">
                    <img 
                    className="profile-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(params.index) + 1}.jpg`}
                    onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }} 
                    />
                    <h1 className="profile-name">{item.name}</h1>
                    <p className="bio">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum.
                    </p>
                </div>
                <div className="row stats">
                    <div className="col-3">
                        <h6>Birth Year</h6>
                        <div className="profile-data">{item.birth_year}</div>
                    </div>
                    <div className="col-3">
                        <h6>Gender</h6>
                        <div className="profile-data">{item.gender}</div>
                    </div>
                    <div className="col-3">
                        <h6>Height (cm)</h6>
                        <div className="profile-data">{item.height}</div>
                    </div>
                    <div className="col-3">
                        <h6>Mass (kg)</h6>
                        <div className="profile-data">{item.mass}</div>
                    </div>
                </div>
            </div>
        )
    ) : null
    params.type === "planets" ? (
        field = (
            <div>
                <div className="profile-top">
                    <img 
                    className="profile-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${parseInt(params.index) + 1}.jpg`}
                    onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }} 
                    />
                    <h1 className="profile-name">{item.name}</h1>
                    <p className="bio">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum.
                    </p>
                </div>
                <div className="row stats">
                    <div className="col-3">
                        <h6>Climate</h6>
                        <div className="profile-data">{item.climate}</div>
                    </div>
                    <div className="col-3">
                        <h6>Terrain</h6>
                        <div className="profile-data">{item.terrain}</div>
                    </div>
                    <div className="col-3">
                        <h6>Population</h6>
                        <div className="profile-data">{item.population}</div>
                    </div>
                    <div className="col-3">
                        <h6>Rotation Period</h6>
                        <div className="profile-data">{item.rotation_period}</div>
                    </div>
                </div>
            </div>
        )
    ) : null
    params.type === "vehicles" ? (
        field = (
            <div>
            <div className="profile-top">
                <img 
                className="profile-image"
                src={`https://starwars-visualguide.com/assets/img/vehicles/${parseInt(params.index) + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }} 
                />
                <h1 className="profile-name">{item.name}</h1>
                <p className="bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum.
                </p>
            </div>
            <div className="row stats">
                    <div className="col-3">
                        <h6>Model</h6>
                        <div className="profile-data">{item.model}</div>
                    </div>
                    <div className="col-3">
                        <h6>Class</h6>
                        <div className="profile-data">{item.vehicle_class}</div>
                    </div>
                    <div className="col-3">
                        <h6>Manufacturer Corporation</h6>
                        <div className="profile-data">{item.manufacturer}</div>
                    </div>
                    <div className="col-3">
                        <h6>Passengers</h6>
                        <div className="profile-data">{item.passengers}</div>
                    </div>
                </div>
        </div>
        )
    ) : null

    return (
        <div>
            {field}
        </div>
    );
};

export default Profile;