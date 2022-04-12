import React from 'react';
import './Wizzard3.scss';

const Wizzard3 = () => {
  return (
    <div className='wizzard3-container'>
      <div className='selected-wrapper'>
        <h2 className='input-selected'>SELECTED CANDIDATE:</h2>
        <p
          className={
            localStorage.getItem('candidateId') !== 'null' ? null : 'redness'
          }
        >
          {localStorage.getItem('candidateId') !== 'null'
            ? localStorage.getItem('candidateId')
            : 'NO CANDIDATE SELECTED'}
        </p>
      </div>
      <div className='selected-wrapper'>
        <h2 className='input-selected'>SELECTED COMPANY:</h2>
        <p
          className={
            localStorage.getItem('companyId') !== 'null' ? null : 'redness'
          }
        >
          {localStorage.getItem('companyId') !== 'null'
            ? localStorage.getItem('companyId')
            : 'NO COMPANY SELECTED'}
        </p>
      </div>
      <p>ID:</p>
      <input type='number' name='id' />
      <p>Interview Date</p>
      <input type='number' />
      <p>Phase:</p>
      <input type='text' />
      <p>Status:</p>
      <input type='text' />
      <p>Note:</p>
      <textarea type='text' id='note' cols='10' />
    </div>
  );
};

export default Wizzard3;
