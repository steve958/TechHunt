import React from 'react';
import { ctx } from '../../Components/ProviderComp/ProviderComp';
import { useContext } from 'react';
import Header from '../../Components/Header/Header';
export const Candidates = () => {
  const value = useContext(ctx);
  return (
    <>
      <Header></Header>
      <div>
        {value.candidatesData.map((e) => {
          return <p key={e.id}>{e.name}</p>;
        })}
      </div>
    </>
  );
};

export default Candidates;
