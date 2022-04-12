import React, { useState } from 'react';
import { ctx } from '../../Components/ProviderComp/ProviderComp';
import { useContext } from 'react';
import AddCandidateModal from '../../Components/AddCandidateModal/AddCandidateModal';
import ManageCandidates from '../../Components/ManageCandidates/ManageCandidates';
import ManageCompanies from '../../Components/ManageCompanies/ManageCompanies';
import ManageReports from '../../Components/ManageReports/ManageReports';
import './AdminPanelPage.scss';
import Header from '../../Components/Header/Header';

const AdminPanelPage = () => {
  const value = useContext(ctx);

  const [isCandidatesClicked, setIsCanditatesClicked] = useState(true);
  const [isCompaniesClicked, setIsCompaniesClicked] = useState(false);
  const [isReportsClicked, setIsReportsClicked] = useState(false);

  const changeisCandidatesClicked = (e) => {
    e.stopPropagation();
    setIsCanditatesClicked(true);



    setIsCompaniesClicked(false);

    setIsReportsClicked(false);

  };
  const changeIsCompaniesClicked = (e) => {
    e.stopPropagation();
    setIsCompaniesClicked(true);
   

    setIsCanditatesClicked(false);
    
    setIsReportsClicked(false);
 
  };

  const changeIsReportsClicked = (e) => {
    e.stopPropagation();
    setIsReportsClicked(true);
  

    setIsCanditatesClicked(false);
    
    setIsCompaniesClicked(false);
    
  };

  function logOut() {
    localStorage.setItem('token', '');
    value.changeTokenStatus(false);
    localStorage.setItem('tokenData', '');
    localStorage.setItem('isCandidatesClicked', false);
  }

  return (
    <>
      <div className='adminpanelpage-container'>
        <Header logout={logOut}></Header>
        <div className='adminpanelpage-wrapper'>
          <div className='button-wrapper'>
            <button
              id='candidates'
              onClick={(e) => changeisCandidatesClicked(e)}
            >
              Manage Candidates
            </button>
            <button id='companies' onClick={(e) => changeIsCompaniesClicked(e)}>
              Manage Companies
            </button>
            <button id='reports' onClick={(e) => changeIsReportsClicked(e)}>
              Manage Reports
            </button>
          </div>
          <div className='content-wrapper'>
            {isCandidatesClicked && <ManageCandidates></ManageCandidates>}
            {isCompaniesClicked && <ManageCompanies></ManageCompanies>}
            {isReportsClicked && <ManageReports></ManageReports>}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanelPage;
