import React from 'react';
import './Wizzard3.scss';

const Wizzard3 = () => {
  return (
    <div className="wizzard3-container">
      <div className="selected-wrapper">
        <h2 className="input-selected">SELECTED CANDIDATE:</h2>
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
      <div className="selected-wrapper">
        <h2 className="input-selected">SELECTED COMPANY:</h2>
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
      <input type="number" id="id-selected" />
      <p>Interview Date</p>
      <input type="date" id="date" />
      <p>Phase:</p>
      <select id="phase">
        <option value="hr">HR</option>
        <option value="cv">CV</option>
      </select>
      <p>Status:</p>
      <select id="status">
        <option value="declined">DECLINED</option>
        <option value="passed">PASSED</option>
      </select>
      <p>Note:</p>
      <textarea type="text" id="note" cols="10" />
    </div>
  );
};

export default Wizzard3;
