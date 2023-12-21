import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import ProtectedRoute from './auth/ProtectedRoute';
import Header from './components/Header';
import UserDataList from './components/UserDataList';
import UserDataEntry from './components/UserDataEntry';
import NewDataEntry from './components/NewDataEntry';

const App = () => {
  const navigate = useNavigate();

  /* const { isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  } */
  return (
    <>
      <Header />

      <div className='container'>
        <Routes>
          {/* <Route path='/' element={ProtectedRoute}> */}

          <Route path='/' element={<UserDataList />} />
          {/* </Route> */}
          {/* <Route path='/' element={ProtectedRoute}> */}
          <Route path='/:id' element={<UserDataEntry />} />
          {/* </Route> */}
          {/* <Route path='/' element={ProtectedRoute}> */}
          <Route path='/new' element={<NewDataEntry />} />
          {/* </Route> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
