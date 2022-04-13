import React from 'react';
import { useContext } from 'react';
import { ctx } from '../ProviderComp/ProviderComp';
import "./CardReports.scss"

const CardReports = () => {
  const value = useContext(ctx);

  const deleteCard = (e) => {
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
      <h2 className='title'>MANAGE REPORTS</h2>
      <table className='reports-wrapper-each'>
        <tr>
          <th className='delete-id'>Report id</th>
          <th className='delete-id'>Candidate id</th>
          <th>Candidate name</th>
          <th className='delete-id'>Company id</th>
          <th>Company name</th>
          <th>Interview date</th>
          <th>Phase</th>
          <th>Status</th>
          <th className='delete-note'>Note</th>
          <th>Remove report</th>
        </tr>
        {value.reportsData.map((e) => {
          return (
            <tr key={e.id}>
              <td className='delete-id'>{e.id}</td>
              <td className='delete-id'>{e.candidateId}</td>
              <td>{e.candidateName}</td>
              <td className='delete-id'>{e.companyId}</td>
              <td>{e.companyName}</td>
              <td>{e.interviewDate}</td>
              <td>{e.phase}</td>
              <td>{e.status}</td>
              <td className='delete-note'>{e.note}</td>
              <td>
                <button
                  className='removereport'
                  onClick={() => {
                    deleteCard(e);
                  }}
                >
                  remove report
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CardReports;
