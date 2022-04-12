import React from 'react';
import { ctx } from '../ProviderComp/ProviderComp';
import { useContext, useState } from 'react';
import './Wizzard2.scss';

const Wizzard2 = () => {
  const value = useContext(ctx);
  const [selectedCompany, changeSelectedCompany] = useState(
    localStorage.getItem('companyName')
  );

  function selectedCompanyId(name, id) {
    localStorage.setItem('companyId', id);
    localStorage.setItem('companyName', name);
    changeSelectedCompany(name);
  }

  return (
    <div className="wizzard2-container">
      <h2 id="select-company">SELECT COMPANY</h2>
      {value.companiesData.map((e) => {
        return (
          <div
            id={e.id}
            className={`card-company-select ${
              e.name === selectedCompany ? 'selected' : null
            }`}
            onClick={() => {
              selectedCompanyId(e.name, e.id);
            }}
          >
            <h2>{e.name}</h2>
            <h3>{e.email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Wizzard2;
