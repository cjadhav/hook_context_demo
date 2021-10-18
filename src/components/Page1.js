import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';

function Page1() {
  //   const { addUser } = useContext(UserContext);
  const { dispatch } = useContext(UserContext);
  const { authorised, didLogin } = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [fName, setFirstName] = useState('');
  const [lName, setLastName] = useState('');

  const didAddUser = () => {
    dispatch({ type: 'ADD', fName, lName });
    setFirstName('');
    setLastName('');
  };

  return authorised ? (
    <div className="page1">
      <input placeholder="First Name" value={fName} onChange={(e) => setFirstName(e.target.value)}></input>
      <input placeholder="Last Name" value={lName} onChange={(e) => setLastName(e.target.value)}></input>
      <button disabled={fName === '' || lName === '' ? true : false} onClick={didAddUser}>
        Add User
      </button>
    </div>
  ) : (
    <div className="page1">
      <input placeholder="UserName" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
      <button disabled={userName === '' ? true : false} onClick={() => didLogin(true)}>
        Login
      </button>
    </div>
  );
}

export default Page1;
