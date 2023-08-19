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
                    src={`https://starwars-visualguide.com/assets/img/characters/${params.index + 1}.jpg`}
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
                        <h6>Appearances</h6>
                        <div className="profile-data">{item.films}</div>
                    </div>
                    <div className="col-3">
                        <h6>Home World</h6>
                        <div className="profile-data">{item.homeworld}</div>
                    </div>
                    <div className="col-3">
                        <h6>Birth Year</h6>
                        <div className="profile-data">{item.birth_year}</div>
                    </div>
                    <div className="col-3">
                        <h6>Height</h6>
                        <div className="profile-data">{item.height}</div>
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
                    src={`https://starwars-visualguide.com/assets/img/characters/${params.index + 1}.jpg`}
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
                    <h6>Appearances</h6>
                    <div className="profile-data">{item.films}</div>
                    
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
                src={`https://starwars-visualguide.com/assets/img/characters/${params.index + 1}.jpg`}
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
                <h6>Appearances</h6>
                <div className="profile-data">{item.films}</div>
                
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