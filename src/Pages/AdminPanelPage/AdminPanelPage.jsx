import React, { useState } from 'react';
import { ctx } from '../../Components/ProviderComp/ProviderComp';
import { useContext } from 'react';
import { ctxBlue } from '../../Components/ProviderComp/ProviderComp';
import AddCandidateModal from '../../Components/AddCandidateModal/AddCandidateModal';
import ManageCandidates from '../../Components/ManageCandidates/ManageCandidates';
import ManageCompanies from '../../Components/ManageCompanies/ManageCompanies';
import ManageReports from '../../Components/ManageReports/ManageReports';
import './AdminPanelPage.scss';
import Header from '../../Components/Header/Header';

const AdminPanelPage = () => {
  const value = useContext(ctx);
  const valueBlue = useContext(ctxBlue);

  const [isCandidates, setIsCanditates] = useState(
    'true' === localStorage.getItem('isCandidates')
  );
  const [isCompanies, setIsCompanies] = useState(
    'true' === localStorage.getItem('isCompanies')
  );
  const [isReports, setIsReports] = useState(false);

  const changeisCandidates = (e) => {
    e.stopPropagation();
    setIsCanditates(!isCandidates);
    localStorage.setItem('isCandidates', !isCandidates);
    console.log(isCandidates);

    setIsCompanies(false);
    localStorage.setItem('isCompanies', false);
  };
  const changeIsCompanies = (e) => {
    e.stopPropagation();
    setIsCompanies(!isCompanies);
    localStorage.setItem('isCompanies', !isCompanies);
    console.log(isCompanies);

    setIsCanditates(false);
    localStorage.setItem('isCandidates', false);
  };

  function logOut() {
    localStorage.setItem('token', '');
    value.changeTokenStatus(false);
    localStorage.setItem('tokenData', '');
    localStorage.setItem('isCandidates', false);
  }

  return (
    <>
      <div className="adminpanelpage-container">
        <Header></Header>
        <header>
          <button onClick={logOut}>Logout</button>
        </header>
        <div className="adminpanelpage-wrapper">
          <div className="button-wrapper">
            <button id="candidates" onClick={(e) => changeisCandidates(e)}>
              Manage Candidates
            </button>
            <button id="companies" onClick={(e) => changeIsCompanies(e)}>
              Manage Companies
            </button>
            <button id="reports">Manage Candidates</button>
          </div>
          <div className="content-wrapper">
            {isCandidates && <ManageCandidates></ManageCandidates>}
            {isCompanies && <ManageCompanies></ManageCompanies>}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanelPage;
