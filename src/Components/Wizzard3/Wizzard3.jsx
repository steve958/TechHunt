import React from 'react';
import './Wizzard3.scss';
import { ctx } from '../ProviderComp/ProviderComp';
import { useContext } from 'react';
import { useState } from 'react';

const Wizzard3 = (props) => {
  const value = useContext(ctx);
  const [report, setReport] = useState({
    id: null,
    candidateId: localStorage.getItem('candidateId'),
    candidateName: localStorage.getItem('candidateName'),
    companyId: localStorage.getItem('companyId'),
    companyName: localStorage.getItem('companyName'),
    interviewDate: '',
    phase: '',
    status: '',
    note: '',
  });

  const createNewReport = () => {
    if (
      report.id &&
      report.candidateId &&
      report.candidateName &&
      report.companyId &&
      report.companyName &&
      report.interviewDate &&
      report.phase &&
      report.status &&
      report.note
    ) {
      fetch('http://localhost:3333/api/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${value.tokenData}`,
        },
        body: JSON.stringify(report),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          value.setShouldUpdate();
          props.modal();
        });
    } else {
      alert('Please fill all the informations');
    }
  };

  const fillReportData = (key, enteredValue) => {
    setReport({
      ...report,
      [key]: enteredValue,
    });
  };

  return (
    <div className='wizzard3-container'>
      <div className='selected-wrapper'>
        <h2 className='input-selected'>SELECTED CANDIDATE:</h2>
        <p
          className={
            localStorage.getItem('candidateName') !== 'null' ? null : 'redness'
          }
        >
          {localStorage.getItem('candidateName') !== 'null'
            ? localStorage.getItem('candidateName')
            : 'NO CANDIDATE SELECTED'}
        </p>
      </div>
      <div className='selected-wrapper'>
        <h2 className='input-selected'>SELECTED COMPANY:</h2>
        <p
          className={
            localStorage.getItem('companyName') !== 'null' ? null : 'redness'
          }
        >
          {localStorage.getItem('companyName') !== 'null'
            ? localStorage.getItem('companyName')
            : 'NO COMPANY SELECTED'}
        </p>
      </div>
      <p>ID:</p>
      <input
        type='number'
        id='id-selected'
        name='id'
        onChange={(e) => {
          fillReportData(e.target.name, e.target.value);
        }}
      />
      <p>Interview Date</p>
      <input
        type='date'
        id='date'
        name='interviewDate'
        onChange={(e) => {
          fillReportData(e.target.name, e.target.value);
        }}
      />
      <p>Phase:</p>
      <select
        id='phase'
        name='phase'
        onClick={(e) => {
          fillReportData(e.target.name, e.target.value);
        }}
      >
        <option></option>
        <option value='hr'>HR</option>
        <option value='cv'>CV</option>
      </select>
      <p>Status:</p>
      <select
        id='status'
        name='status'
        onClick={(e) => {
          fillReportData(e.target.name, e.target.value);
        }}
      >
        <option></option>
        <option value='declined'>DECLINED</option>
        <option value='passed'>PASSED</option>
      </select>
      <div className='submit-wrapper'>
        <p>Note:</p>
        <textarea
          type='text'
          id='note'
          cols='10'
          name='note'
          onChange={(e) => {
            fillReportData(e.target.name, e.target.value);
          }}
        />
        <button
          className='submit-report-button'
          onClick={() => createNewReport()}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Wizzard3;
