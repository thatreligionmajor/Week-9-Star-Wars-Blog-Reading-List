import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/profile.css";


const Profile = () => {
    const{store, actions}=useContext(Context);
    let params = useParams();
    console.log(params);
    let field 
    let item = store[`${params.type}`][`${params.index}`]

    // need help displaying profiles correctly 

    params.type === "people" ? (
        field = (
            <div>
                <div className="profile-top">
                    <img src="..." />
                    <h1>{item.name}</h1>
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
                <div className="stats-row">
                    <h6>Appearances</h6>
                    <div>{item.films}</div>
                    <h6>Affiliations</h6>
                    <div></div>
                    <h6>Locations</h6>
                </div>
            </div>
        )
    ) : null
    params.type === "planets" ? (
        field = (
        <div>{item.name}</div>

        )
    ) : null
    params.type === "vehicles" ? (
        field = (
        <div>{item.name}</div>
        
        )
    ) : null

    return (
        <div>
            {field}
        </div>
    );
};

export default Profile;