import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';

function Page3() {
  const [userId, setUserID] = useState('');
  // const { deleteUser } = useContext(UserContext);
  const { dispatch } = useContext(UserContext);
  const { authorised } = useContext(AuthContext);

  const didDeleteUser = () => {
    dispatch({ type: 'DELETE', id: userId });
    setUserID('');
  };

  return (
    authorised && (
      <div className="page1">
        <input placeholder="User ID" value={userId} onChange={(e) => setUserID(e.target.value)}></input>
        <button disabled={userId === '' ? true : false} onClick={didDeleteUser}>
          Delete User
        </button>
      </div>
    )
  );
}

export default Page3;
