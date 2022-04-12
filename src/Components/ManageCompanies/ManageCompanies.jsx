import React from "react";
import CardCompanies from "../CardCompanies/CardCompanies";
import { useState } from "react";
import AddCompanyModal from "../AddCompanyModal/AddCompanyModal";


const ManageCompanies = () => {

    const [isModal, setModal] = useState(false)
  const changeModalStatus=(xx)=>{
    setModal(xx)

  }


    return ( 
        <> 
              {isModal&& <AddCompanyModal setModal={()=>changeModalStatus()}></AddCompanyModal>}

        <div className="card-wrapper">
            <CardCompanies></CardCompanies>
        </div>
        <div className="addCompany-button-wrapper">
        <button id="add-company" onClick={()=>changeModalStatus(true)}>Add a company</button>
        </div>
        </>
     );
}
 
export default ManageCompanies;