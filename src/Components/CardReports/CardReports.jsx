import React from 'react';
import { useContext } from 'react';
import { ctx } from '../ProviderComp/ProviderComp';

const CardReports = () => {
  const value = useContext(ctx);

  const deleteCard = (e, event) => {
    event.preventDefault();
    fetch(`http://localhost:3333/api/reports/${e.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${value.tokenData}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        value.setShouldUpdate();
      });
  };

  return (
    <div className='cardreports-wrapper'>
      {value.reportsData.map((e) => {
        return (
          <div className='reports-wrapper-each' key={e.id}>
            <button
              className='removereport'
              onClick={(event) => {
                deleteCard(e, event);
              }}
            >
              X
            </button>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/9/90/Ic_person_48px.svg'
              alt='cantLoad'
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default CardReports;
