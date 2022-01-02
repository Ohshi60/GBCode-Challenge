//Lib imports
import React from 'react';
import { Routes, Route} from 'react-router-dom';
//components
import Signin from './components/Signin'
import Account from './components/Account'
import Signup from './components/Signup';

import { useAuth } from './contexts/AuthContext';
//misc setup
function App() {
  const { currentUser } = useAuth();

  return (
      <div>
        <p>Header</p>
        <Routes>
          <Route path="/" element={(
            currentUser ? <Account/> : <Signin/> 
          )}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
