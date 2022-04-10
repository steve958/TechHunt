import React from "react";
import { useState } from "react";
import "./AddCandidateModal.scss"
import { ctx } from "../ProviderComp/ProviderComp";
import { useContext } from "react";

const AddCandidateModal = (props)=>{
    const value = useContext(ctx);
    const [candidate, setCandidate]= useState({
        id: null,
        name: "",
        birthday:"",
        email:"",
        education:"",
        avatar:""
    })
    const addCandidate=()=>{
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




  const fillCandidatesData=(key, enteredValue) =>{
      setCandidate({
          ...candidate,
          [key]:enteredValue
      })
  }

    return (
        <div className="addCandidateModal-container">
            <button id="closeaddcandidate-modal" onClick={()=>props.setModal()}>X</button>
            <div className="addCandidateModal-wrapper">
                <p>ID:</p>
                <input type="number" name="id" onChange={(e) =>{
                    fillCandidatesData(e.target.name, e.target.value)
                }} placeholder="id"/>
                <p>Name:</p>
                <input type="text" name="name" onChange={(e) =>{
                    fillCandidatesData(e.target.name, e.target.value)
                }} placeholder="name"/>
                <p>Birthday:</p>
                <input type="text" name="birthday" onChange={(e) =>{
                    fillCandidatesData(e.target.name, e.target.value)
                }} placeholder="birthday"/>
                <p>Email:</p>
                <input type="text" name="email" onChange={(e) =>{
                    fillCandidatesData(e.target.name, e.target.value)
                }} placeholder="email"/>
                <p>Education:</p>
                <input type="text" name="education" onChange={(e) =>{
                    fillCandidatesData(e.target.name, e.target.value)
                }} placeholder="education"/>
                <p>Avatar:</p>
                <input type="text" name="avatar" onChange={(e) =>{
                    fillCandidatesData(e.target.name, e.target.value)
                }} placeholder="avatar"/>
            <button onClick={()=>addCandidate()}>Add Candidate</button>
            </div>
            

        </div>
    )
}

export default AddCandidateModal