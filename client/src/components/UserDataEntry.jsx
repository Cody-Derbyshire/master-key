import '../App.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDataList = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = `http://localhost:5000/userData/${id}`;
      const response = await fetch(fetchUrl);
      const data = await response.json();
      setEntry(data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <form action=''>
        <h2>name: {entry.name}</h2>
        <p>username: {entry.username}</p>
        <div>
          <input
            type={visible ? 'text' : 'password'}
            value={entry.password}
            readOnly={true}
            id='password'
          ></input>
          <input
            id='check'
            type='checkbox'
            value={visible}
            onChange={() => setVisible((prev) => !prev)}
          />
        </div>
        <p>description: {entry.description}</p>
      </form>
    </>
  );
};

export default UserDataList;
