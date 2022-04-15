import React from 'react';
import './SingleCandidateReportModal.scss';

const SingleCandidateReportModal = (props) => {
  console.log(props.reportData);
  return (
    <>
      <div className='single-candidate-report-modal-container'>
        <div className='single-candidate-report-modal-wrapper'>
          <button
            onClick={() => {
              props.setModal(false);
            }}
          >
            X
          </button>
          <div className='report-modal-first-forinfo'>
            <h1>Report ID : {props.reportData.id}</h1>
            <h1>Candidate name : {props.reportData.candidateName}</h1>
            <h2>Company name : {props.reportData.companyName}</h2>
            <div>
              <h2>Phase of the interview : {props.reportData.phase}</h2>
              <h2>status : {props.reportData.status}</h2>
            </div>
          </div>
          <div className='report-modal-second-fornote'>
            <h3>Note : {props.reportData.note}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCandidateReportModal;
