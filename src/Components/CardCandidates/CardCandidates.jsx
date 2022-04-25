import React from 'react';
import { ctx } from '../ProviderComp/ProviderComp';
import { useContext } from 'react';
import './CardCandidates.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CardCandidates = () => {
  const value = useContext(ctx);
  const [cand, setCand] = useState('');

  const deleteCard = (e, event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to delete a candidate')) {
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
    }
  };

  const handleChange = (inputValue) => {
    setCand(
      value.candidatesData.filter((e) => {
        return (
          e.name.includes(inputValue) ||
          e.name.toLowerCase().includes(inputValue)
        );
      })
    );
  };

  return (
    <div className="cardcandidates-wrapper">
      <h2 className="title">MANAGE CANDIDATES</h2>
      <input
        id="managecandidatesSearch"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        type="text"
        name="search"
        placeholder="search"
      />
      <table className="cardcandidates-wrapper-each">
        <tr>
          <th id="delete-img">Avatar</th>
          <th>Name</th>
          <th className="remove-education">Education</th>
          <th className="remove-email">Email</th>
          <th>Remove candidate</th>
        </tr>
        {cand
          ? cand.map((e) => {
              return (
                <tr>
                  <td>
                    <img id="delete-img" src={e.avatar} alt="cantLoad"></img>
                  </td>
                  <td>
                    <Link to={`candidates/${e.id}`}>
                      <p className="items cardcandidates-p-name-link">
                        {e.name}
                      </p>
                    </Link>
                  </td>
                  <td>
                    <p className="items remove-education">{e.education}</p>
                  </td>
                  <td className="remove-email">
                    <p className="items">{e.email}</p>
                  </td>
                  <td>
                    <button
                      className="removecandidate"
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
            })
          : value.candidatesData.map((e) => {
              return (
                <tr>
                  <td>
                    <img id="delete-img" src={e.avatar} alt="cantLoad"></img>
                  </td>
                  <td>
                    <Link to={`candidates/${e.id}`}>
                      <p className="items cardcandidates-p-name-link">
                        {e.name}
                      </p>
                    </Link>
                  </td>
                  <td>
                    <p className="items remove-education">{e.education}</p>
                  </td>
                  <td className="remove-email">
                    <p className="items">{e.email}</p>
                  </td>
                  <td>
                    <button
                      className="removecandidate"
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
