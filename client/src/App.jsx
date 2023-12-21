import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import ProtectedRoute from './auth/ProtectedRoute';
import Header from './components/Header';
import UserDataList from './components/UserDataList';
import UserDataEntry from './components/UserDataEntry';

const App = () => {
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
        </Routes>
      </div>
    </>
  );
};

export default App;
