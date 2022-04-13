import React from 'react';
import { ctx } from '../ProviderComp/ProviderComp';
import { useContext, useState } from 'react';
import './Wizzard1.scss';

const Wizzard1 = () => {
  const value = useContext(ctx);
  const [selectedCandidate, changeSelectedCandidate] = useState(
    localStorage.getItem('candidateName')
  );
  const [cand, setCand] = useState('');
  console.log(cand);

  function selectedCandidateId(name, id) {
    localStorage.setItem('candidateId', id);
    localStorage.setItem('candidateName', name);
    changeSelectedCandidate(name);
  }

  const handleChange = (inputValue) => {
    console.log(inputValue);
    setCand(
      value.candidatesData.filter((e) => {
        return (
          e.name.includes(inputValue) ||
          e.name.toLowerCase().includes(inputValue)
        );
      })
    );
    // console.log(cand);
  };

  return (
    <div className='wizzard1-container'>
      <h2 id='select-candidate'>SELECT CANDIDATE</h2>
      <input
        id='wizard1Search'
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        type='text'
        name='search'
        placeholder='search'
      />
      {cand
        ? cand.map((e) => {
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
                  src='https://upload.wikimedia.org/wikipedia/commons/9/90/Ic_person_48px.svg'
                  alt='cantLoad'
                />
                <h2>{e.name}</h2>
                <h3>{e.education}</h3>
              </div>
            );
          })
        : value.candidatesData.map((e) => {
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
                  src='https://upload.wikimedia.org/wikipedia/commons/9/90/Ic_person_48px.svg'
                  alt='cantLoad'
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
