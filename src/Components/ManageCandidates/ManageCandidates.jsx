import React from "react";
import CardCandidates from "../CardCandidates/CardCandidates";
import { useState } from "react";
import AddCandidateModal from "../AddCandidateModal/AddCandidateModal";
import "./ManageCandidates.scss"

const ManageCandidates = () => {

    const [isModal, setModal] = useState(false)
  const changeModalStatus=(xx)=>{
    setModal(xx)

  }


    return ( 
        <> 
              {isModal&& <AddCandidateModal setModal={()=>changeModalStatus()}></AddCandidateModal>}

        <div className="card-wrapper">
            <CardCandidates></CardCandidates>
        </div>
        <div className="addCandidate-button-wrapper">
        <button onClick={()=>changeModalStatus(true)}>Add a candidate</button>
        </div>
        </>
     );
}
 
export default ManageCandidates;