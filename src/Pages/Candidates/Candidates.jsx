import React from 'react';
import { ctx } from '../../Components/ProviderComp/ProviderComp';
import { useContext } from 'react';
import Header from '../../Components/Header/Header';
import './Candidates.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Candidates = () => {
  const [cand, setCand] = useState('');
  const value = useContext(ctx);

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
  function logOut() {
    localStorage.setItem('token', '');
    value.changeTokenStatus(false);
    localStorage.setItem('tokenData', '');
    localStorage.setItem('isCandidatesClicked', false);
  }
  return (
    <div className="candidates-guestpage-container-master">
      <Header logout={logOut}></Header>
      <input
        id="guestpageSearch"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        type="text"
        name="search"
        placeholder="search"
      />
      <div className="candidates-guestpage-container">
        {!cand
          ? value.candidatesData.map((e) => {
              console.log(e);
              return (
                <Link to={`candidates/${e.id}`}>
                  <div className="candidate-guestpage-wrapperPrima">
                    <div className="candidate-guestpage-wrapper" key={e.id}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ic_person_48px.svg/240px-Ic_person_48px.svg.png" />
                      <h2 className="candidates-guestpage-ime">{e.name}</h2>
                      <p>{e.birthday}</p>
                      <p>{e.education}</p>
                      <p>{e.email}</p>
                    </div>
                  </div>
                </Link>
              );
            })
          : cand.map((e) => {
              return (
                <Link to={`candidates/${e.id}`}>
                  <div className="candidate-guestpage-wrapperPrima">
                    <div className="candidate-guestpage-wrapper" key={e.id}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ic_person_48px.svg/240px-Ic_person_48px.svg.png" />
                      <h2 className="candidates-guestpage-ime">{e.name}</h2>
                      <p>{e.birthday}</p>
                      <p>{e.education}</p>
                      <p>{e.email}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Candidates;
