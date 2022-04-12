import React, { useState, useContext } from 'react';
import './CreateNewReportModal.scss';

import Wizzard1 from '../Wizzard1/Wizzard1';
import Wizzard2 from '../Wizzard2/Wizzard2';
import Wizzard3 from '../Wizzard3/Wizzard3';

const CreateNewReportModal = (props) => {
  const [isWizzard1Open, setisWizzard1Open] = useState(true);
  const [isWizzard2Open, setisWizzard2Open] = useState(false);
  const [isWizzard3Open, setisWizzard3Open] = useState(false);
  const [report, setReport] = useContext();

  const changeWizzardSubmit = () => {
    if (isWizzard1Open) {
      setisWizzard1Open(false);
      setisWizzard2Open(true);
    } else if (isWizzard2Open) {
      setisWizzard2Open(false);
      setisWizzard3Open(true);
    }
  };
  const changeWizzardPrev = () => {
    if (isWizzard3Open) {
      setisWizzard3Open(false);
      setisWizzard2Open(true);
    } else if (isWizzard2Open) {
      setisWizzard2Open(false);
      setisWizzard1Open(true);
    }
  };

  return (
    <>
      <div className="createnewreportmodal-container">
        <button id="closenewreport-modal" onClick={() => props.setModal()}>
          close modal
        </button>
        <div className="first-button">
          <button id="previous-button" onClick={() => changeWizzardPrev()}>
            Previous
          </button>
        </div>
        <div className="wizzard-container">
          {isWizzard1Open && <Wizzard1></Wizzard1>}
          {isWizzard2Open && <Wizzard2></Wizzard2>}
          {isWizzard3Open && <Wizzard3></Wizzard3>}
        </div>
        <div className="third-button">
          <button id="previous-button" onClick={() => changeWizzardSubmit()}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateNewReportModal;
