import React from 'react';
import { ctx } from '../ProviderComp/ProviderComp';
import { useContext } from 'react';
import './CardCompanies.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CardCompanies = () => {
  const value = useContext(ctx);
  const [comp, setComp] = useState('');
  const deleteCard = (e, event) => {
    if (window.confirm('Are you sure you want to delete a company')) {
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
    }
  };
  const handleChange = (inputValue) => {
    console.log(inputValue);
    setComp(
      value.companiesData.filter((e) => {
        return (
          e.name.includes(inputValue) ||
          e.name.toLowerCase().includes(inputValue)
        );
      })
    );
    // console.log(cand);
  };

  return (
    <div className='cardcompanies-wrapper'>
      <div className='h2-and-input-wrapper-companies'>
        <h2 className='title'>MANAGE COMPANIES</h2>
        <input
          id='managecompaniesSearch'
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          type='text'
          name='search'
          placeholder='search'
        />
      </div>
      <table className='cardcandidates-wrapper-each'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Remove candidate</th>
        </tr>
        {comp
          ? comp.map((e) => {
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
            })
          : value.companiesData.map((e) => {
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
