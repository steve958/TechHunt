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
  const [candDefault, setCandDefault] = useState(
    null === localStorage.getItem('isCandidatesClicked')
  );
  const [isCandidatesClicked, setIsCanditatesClicked] = useState(
    'true' === localStorage.getItem('isCandidatesClicked')
  );
  const [isCompaniesClicked, setIsCompaniesClicked] = useState(
    'true' === localStorage.getItem('isCompaniesClicked')
  );
  const [isReportsClicked, setIsReportsClicked] = useState(
    'true' === localStorage.getItem('isReportsClicked')
  );

  const changeisCandidatesClicked = (e) => {
    e.stopPropagation();

    localStorage.setItem('isCandidatesClicked', 'true');
    localStorage.setItem('isCompaniesClicked', 'false');
    localStorage.setItem('isReportsClicked', 'false');

    setIsCanditatesClicked(true);
    setIsCompaniesClicked(false);
    setIsReportsClicked(false);
  };
  const changeIsCompaniesClicked = (e) => {
    e.stopPropagation();

    localStorage.setItem('isCompaniesClicked', 'true');
    localStorage.setItem('isCandidatesClicked', 'false');
    localStorage.setItem('isReportsClicked', 'false');

    setIsCompaniesClicked(true);
    setIsCanditatesClicked(false);
    setIsReportsClicked(false);
    setCandDefault(false);
  };

  const changeIsReportsClicked = (e) => {
    e.stopPropagation();
    localStorage.setItem('isReportsClicked', 'true');
    localStorage.setItem('isCompaniesClicked', 'false');
    localStorage.setItem('isCandidatesClicked', 'false');

    setIsReportsClicked(true);
    setIsCanditatesClicked(false);
    setIsCompaniesClicked(false);
    setCandDefault(false);
  };

  function logOut() {
    // localStorage.setItem('token', '');
    value.changeTokenStatus(false);
    // localStorage.setItem('tokenData', '');
    // localStorage.setItem('isCandidatesClicked', false);
    localStorage.clear();
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
            {candDefault && <ManageCandidates></ManageCandidates>}
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
