import React from 'react';
import { ctx } from '../ProviderComp/ProviderComp';
import { useContext } from 'react';
import './CardCandidates.scss';
import { Link } from 'react-router-dom';

const CardCandidates = () => {
  const value = useContext(ctx);

  const deleteCard = (e, event) => {
    event.preventDefault();
    fetch(`http://localhost:3333/api/candidates/${e.id}`, {
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
    <div className='cardcandidates-wrapper'>
      <h2 className='title'>MANAGE CANDIDATES</h2>
      <table className='cardcandidates-wrapper-each'>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th className='remove-education'>Education</th>
          <th className='remove-email'>Email</th>
          <th>Remove candidate</th>
        </tr>
        {value.candidatesData.map((e) => {
          return (
            <tr>
              <td>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/9/90/Ic_person_48px.svg'
                  alt='cantLoad'
                ></img>
              </td>
              <td>
                <p className='items'>{e.name}</p>
              </td>
              <td>
                <p className='items remove-education'>{e.education}</p>
              </td>
              <td className='remove-email'>
                <p className='items'>{e.email}</p>
              </td>
              <td>
                <button
                  className='removecandidate'
                  onClick={(event) => {
                    deleteCard(e, event);
                  }}
                >
                  remove candidate
                </button>
              </td>
            </tr>
            //   </Link>
          );
        })}
      </table>
    </div>
  );
};

export default CardCandidates;
