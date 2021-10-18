import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from './../contexts/UserContext';

function Page2() {
  const { users } = useContext(UserContext);
  const { authorised } = useContext(AuthContext);

  return (
    authorised && (
      <div className="page2">
        {users.length === 0 ? (
          <span>No Users Added</span>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.id} - {user.fName} {user.lName}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  );
}

export default Page2;
