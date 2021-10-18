import React from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import AuthContextProvider from './contexts/AuthContext';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <div className="mainContainer">
      <AuthContextProvider>
        <UserContextProvider>
          <Page1 />
          <Page2 />
          <Page3 />
        </UserContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
