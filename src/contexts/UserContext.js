import React, { useState, createContext, useReducer } from 'react';
import _ from 'lodash';

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { fName: action.fName, lName: action.lName, id: _.uniqueId() }];
    case 'DELETE': {
      if (_.findIndex(state, ['id', action.id]) === -1) {
        alert(`${action.id} user id does not exists.`);
        return false;
      } else {
        alert(`User with ID ${action.id} deleted`);
        return _.filter(state, (user) => user.id !== action.id);
      }
    }
    default:
      return false;
  }
};

const UserContextProvider = (props) => {
  const [users, dispatch] = useReducer(userReducer, []);
  //   const [users, updateUsers] = useState([]);

  //   function addUser(fName, lName) {
  //     updateUsers([...users, { fName, lName, id: _.uniqueId() }]);
  //   }
  //   function deleteUser(id) {
  //     if (_.findIndex(users, ['id', id]) === -1) alert(`${id} user id does not exists.`);
  //     else {
  //       updateUsers(_.filter(users, (user) => user.id !== id));
  //       alert(`User with ID ${id} deleted`);
  //     }
  //   }

  //   return <UserContext.Provider value={{ users, addUser, deleteUser }}>{props.children}</UserContext.Provider>;
  return <UserContext.Provider value={{ users, dispatch }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
