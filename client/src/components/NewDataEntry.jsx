import '../App.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const NewDataEntry = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* const accessToken = await getAccessTokenSilently(); */
    const newEntry = { name, username, password, description };
    setIsPending(true);

    const response = await fetch('http://localhost:5000/userData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        /* Authorization: `Bearer ${accessToken}`, */
      },
      body: JSON.stringify(newEntry),
    });

    if (!response.ok) {
      setIsError(true);
      setErrorStatus(response.status);
    } else {
      setIsPending(false);
      navigate('/');
    }
  };

  if (isError) {
    return (
      <>
        <p className=''>error creating a new entry ({errorStatus})</p>
        <br />
        <Link to='/' className=''>
          &larr; Return to list
        </Link>
      </>
    );
  }

  return (
    <>
      <h2>new entry</h2>
      <form onSubmit={handleSubmit}>
        <div className='new-entry-form'>
          <label htmlFor='name'>name</label>
          <input
            type='text'
            required
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            max={20}
            min={1}
          />
          <label htmlFor='username'>username</label>
          <input
            type='text'
            required
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            max={10}
            min={1}
          />
          <label htmlFor='password'>password</label>
          <input
            type='text'
            required
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            max={20}
            min={1}
          />
          <label htmlFor='description'>description</label>
          <input
            type='text'
            required
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            max={30}
            min={1}
          />
        </div>
        {!isPending && <button className=''>submit</button>}
        {isPending && <button disabled>adding entry...</button>}
      </form>
    </>
  );
};

export default NewDataEntry;
