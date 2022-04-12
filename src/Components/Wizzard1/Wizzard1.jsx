import React from 'react';
import { ctx } from '../ProviderComp/ProviderComp';
import { useContext, useState } from 'react';
import './Wizzard1.scss';

const Wizzard1 = () => {
  const value = useContext(ctx);
  const [selectedCandidate, changeSelectedCandidate] = useState(
    localStorage.getItem('candidateName')
  );

  function selectedCandidateId(name, id) {
    localStorage.setItem('candidateId', id);
    localStorage.setItem('candidateName', name);
    changeSelectedCandidate(name);
  }

  return (
    <div className="wizzard1-container">
      <h2 id="select-candidate">SELECT CANDIDATE</h2>
      {value.candidatesData.map((e) => {
        return (
          <div
            id={e.id}
            className={`card-candidate-select ${
              e.name === selectedCandidate ? 'selected' : null
            }`}
            onClick={() => {
              selectedCandidateId(e.name, e.id);
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/90/Ic_person_48px.svg"
              alt="cantLoad"
            />
            <h2>{e.name}</h2>
            <h3>{e.education}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Wizzard1;
