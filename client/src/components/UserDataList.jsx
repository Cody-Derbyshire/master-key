import '../App.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserDataList = () => {
  const [userDatas, setUserDatas] = useState([]);
  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/userData');
    const data = await response.json();
    setUserDatas(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {userDatas.map((userData) => {
        return (
          <div className='data-card' key={userData.id}>
            <Link to={`/${userData.id}`}>
              <h2>name: {userData.name}</h2>
            </Link>
            <p>username: {userData.username}</p>
            <p>password: {userData.password}</p>
            <p>description: {userData.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default UserDataList;
