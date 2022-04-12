import React from 'react';
import './ManageReports.scss';
import { useState } from 'react';
import CardReports from '../CardReports/CardReports';
import CreateNewReportModal from '../CreateNewReportModal/CreateNewReportModal';

const ManageReports = () => {
  const [isModalOpen, setModal] = useState(false);

  const changeModalStatus = (xx) => {
    setModal(xx);
    localStorage.setItem('candidateId', null);
    localStorage.setItem('companyId', null);
  };

  return (
    <>
      {isModalOpen && (
        <CreateNewReportModal setModal={() => changeModalStatus(false)} />
      )}
      <div className='card-wrapper'>
        <CardReports></CardReports>
      </div>
      <div className='addReport-button-wrapper'>
        <button id='create-new-report' onClick={() => changeModalStatus(true)}>
          Create new report
        </button>
      </div>
    </>
  );
};

export default ManageReports;
