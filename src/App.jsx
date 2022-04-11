import React, { useEffect } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import AdminPanelPage from './Pages/AdminPanelPage/AdminPanelPage';
import { useState } from 'react';
import { Provider } from './Components/ProviderComp/ProviderComp';
import SingleCandidatePage from './Pages/SingleCandidatePage/SingleCandidatePage';
import './App.scss';
import Candidates from './Pages/Candidates/Candidates';

export const App = () => {
  const [tokenStatus, changeTokenStatus] = useState(
    'true' === localStorage.getItem('token')
  );
  const [tokenData, getTokenData] = useState(localStorage.getItem('tokenData'));

  const [candidatesData, getCandidatesData] = useState([]);

  const [companiesData, getCompaniesData] = useState([]);

  const [reportsData, getReportsData] = useState([]);

  const [loginClicked, setLogin] = useState(false);

  const [shouldUpdate, setUpdate] = useState(false);
  const setShouldUpdate = () => {
    setUpdate(!shouldUpdate);
  };

  useEffect(() => {
    fetch('http://localhost:3333/api/candidates')
      .then((res) => res.json())
      .then((data) => {
        getCandidatesData(data);
      });
  }, [shouldUpdate]);

  useEffect(() => {
    fetch('http://localhost:3333/api/companies')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getCompaniesData(data);
      });
  }, [shouldUpdate]);

  useEffect(() => {
    fetch('http://localhost:3333/api/reports')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getReportsData(data);
      });
  }, [shouldUpdate]);

  return (
    <>
      <Provider
        value={{
          changeTokenStatus,
          tokenStatus,
          candidatesData,
          getTokenData,
          tokenData,
          setShouldUpdate,
          companiesData,
          reportsData,
        }}
      >
        {tokenStatus ? (
          <Switch>
            <Route path='/adminpanel'>
              <AdminPanelPage></AdminPanelPage>
            </Route>
            <Route path='/candidates'>
              <Candidates></Candidates>
            </Route>
            <Route path='/login'>
              <Redirect to='/adminpanel'>
                <AdminPanelPage></AdminPanelPage>
              </Redirect>
            </Route>
            <Route path='/candidate/:id'>
              <SingleCandidatePage></SingleCandidatePage>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/'>
              <Redirect to='/login'></Redirect>
            </Route>
            <Route path='/candidates'>
              <Candidates></Candidates>
            </Route>
            <Route path='/candidate/:id'>
              <SingleCandidatePage></SingleCandidatePage>
            </Route>
            <Route path='/login'>
              <LoginPage></LoginPage>
            </Route>
            <Route path='/adminpanel'>
              <Redirect to='/login'>
                <LoginPage></LoginPage>
              </Redirect>
            </Route>
          </Switch>
        )}
      </Provider>
    </>
  );
};

export default App;
