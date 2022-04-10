import React from "react";
import { ctx } from "../ProviderComp/ProviderComp";
import { useContext } from 'react';
import "./CardCandidates.scss"
import { Link } from "react-router-dom";

const CardCandidates = () => {
    const value = useContext(ctx);

    const deleteCard = (e, event) => {
        event.preventDefault()
        fetch(`http://localhost:3333/api/candidates/${e.id}`, {
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
        <div className="cardcandidates-wrapper">
            {value.candidatesData.map(e=>{
                return <Link to={`/candidates/${e.id}`}><div className="cardcandidates-wrapper-each" key={e.id}>
                    <button className="removecandidate" onClick={(event)=>{deleteCard(e,event)}}>X</button>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Ic_person_48px.svg" alt="cantLoad"></img>
                    <p>Name: {e.name}</p>
                    <p>Education: {e.education}</p>
                </div></Link>
            })}
            

        </div>
     );
}
 
export default CardCandidates;