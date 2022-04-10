import React from 'react';
import { ctx } from '../../Components/ProviderComp/ProviderComp';
import { useContext } from 'react';

export const Candidates = () => {
  const value = useContext(ctx);
  // console.log(value.candidatesData);
  // console.log(value.candidatesData[0].name);
  return (
    <>
      <div>
        {value.candidatesData.map((e) => {
          return <p key={e.id}>{e.name}</p>;
        })}
      </div>
    </>
  );
};

export default Candidates;
