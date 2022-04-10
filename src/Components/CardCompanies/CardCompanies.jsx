import React from "react";
import { ctx } from "../ProviderComp/ProviderComp";
import { useContext } from 'react';
import "./CardCompanies.scss"
import { Link } from "react-router-dom";

const CardCompanies = () => {
    const value = useContext(ctx);

    const deleteCard = (e, event) => {
        event.preventDefault()
        fetch(`http://localhost:3333/api/companies/${e.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${value.tokenData}`
            }
        }).then((res) => res.json()).then((data) => {
            value.setShouldUpdate()

        })
    }



    return ( 
        <div className="cardcompanies-wrapper">
            {value.companiesData.map(e=>{
                return <Link to={`/candidates/${e.id}`}><div className="cardcompanies-wrapper-each" key={e.id}>
                    <button className="removecompany" onClick={(event)=>{deleteCard(e,event)}}>X</button>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Ic_person_48px.svg" alt="cantLoad"></img>
                    <p>Name: {e.name}</p>
                    <p>Email: {e.email}</p>
                </div></Link>
            })}
            

        </div>
     );
}
 
export default CardCompanies;