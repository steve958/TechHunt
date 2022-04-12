import React from 'react';
import { ctx } from '../ProviderComp/ProviderComp';
import { useContext } from 'react';
import './CardCompanies.scss';
import { Link } from 'react-router-dom';

const CardCompanies = () => {
  const value = useContext(ctx);
  console.log(value);
  const deleteCard = (e, event) => {
    event.preventDefault();
    fetch(`http://localhost:3333/api/companies/${e.id}`, {
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
    <div className='cardcompanies-wrapper'>
      <h2 className='title'>MANAGE COMPANIES</h2>
      <table className='cardcandidates-wrapper-each'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Remove candidate</th>
        </tr>
        {value.companiesData.map((e) => {
          return (
            <tr>
              <td>
                <p className='items'>{e.name}</p>
              </td>
              <td>
                <p className='change-font'>{e.email}</p>
              </td>
              <td>
                <button
                  className='removecandidate'
                  onClick={(event) => {
                    deleteCard(e, event);
                  }}
                >
                  remove company
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

export default CardCompanies;
