//Lib imports
import React, {useState, useEffect} from 'react';

//components
import Signup from './components/Signup'
import Signin from './components/Signin'
import Signout from './components/Signout'


//services
import {auth, onAuthStateChanged} from './services/auth'
//misc setup
function App() {
  const [user,setUser] = useState<any | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if(user){
        setUser(user)
        console.log('User just logged in: ' , user.email)
      } else {
        setUser(null)
      }
    } )
  }, [])

  return (
    <div className="App">
      <p>Im not a boilerplate</p>
      <Signup></Signup>
      {user===null? <Signin></Signin>: <Signout></Signout> }
    </div>
  );
}

export default App;
