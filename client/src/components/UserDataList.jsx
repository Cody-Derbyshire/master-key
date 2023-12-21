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
      <Link to={`/new`}>
        <div className='add-button'>+</div>
      </Link>
      {userDatas.map((userData) => {
        return (
          <Link to={`/${userData.id}`} key={userData.id}>
            <div className='data-card'>
              <h2>{userData.name}</h2>

              <p>{userData.description}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default UserDataList;
