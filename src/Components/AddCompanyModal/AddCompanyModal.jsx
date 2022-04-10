import React from "react";
import { useState } from "react";
import "./AddCompanyModal.scss"
import { ctx } from "../ProviderComp/ProviderComp";
import { useContext } from "react";

const AddCompanyModal = (props)=>{
    const value = useContext(ctx);
    const [candidate, setCandidate]= useState({
        id: null,
        name: "",
        email:"",
    })
    const addCompany=()=>{
        fetch('http://localhost:3333/api/candidates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${value.tokenData}`
            },
            body: JSON.stringify(candidate),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(value.tokenData)
          console.log("Dodajem kandidata"+data)
         props.setModal()
         value.setShouldUpdate()
      });
    }




  const fillCompaniesData=(key, enteredValue) =>{
      setCandidate({
          ...candidate,
          [key]:enteredValue
      })
  }

    return (
        <div className="addCompanyModal-container">
            <button id="closeaddcompany-modal" onClick={()=>props.setModal()}>X</button>
            <div className="addCompanyModal-wrapper">
                <p>ID:</p>
                <input type="number" name="id" onChange={(e) =>{
                    fillCompaniesData(e.target.name, e.target.value)
                }} placeholder="id"/>
                <p>Name:</p>
                <input type="text" name="name" onChange={(e) =>{
                    fillCompaniesData(e.target.name, e.target.value)
                }} placeholder="name"/>
                <p>Email:</p>
                <input type="text" name="email" onChange={(e) =>{
                    fillCompaniesData(e.target.name, e.target.value)
                }} placeholder="email"/>
            <button onClick={()=>addCompany()}>Add Company</button>
            </div>
            

        </div>
    )
}

export default AddCompanyModal