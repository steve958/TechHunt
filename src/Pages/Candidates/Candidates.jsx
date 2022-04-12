import React from 'react';
import { ctx } from '../../Components/ProviderComp/ProviderComp';
import { useContext } from 'react';
import Header from '../../Components/Header/Header';
import "./Candidates.scss"
import { Link } from 'react-router-dom';
export const Candidates = () => {
  const value = useContext(ctx);
  return (
    <div className='candidates-guestpage-container-master'>
      <Header></Header>
      <div className="candidates-guestpage-container">
        {value.candidatesData.map((e) => {
          console.log(e)
          return <Link to={`candidates/${e.id}`}><div className='candidate-guestpage-wrapperPrima'><div className='candidate-guestpage-wrapper' key={e.id}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ic_person_48px.svg/240px-Ic_person_48px.svg.png" />
            <h2 className='candidates-guestpage-ime'>{e.name}</h2>
            <p>{e.birthday}</p>
            <p>{e.education}</p>
            <p>{e.email}</p>
          </div></div></Link>
        })}
      </div>
    </div>
  );
};

export default Candidates;
