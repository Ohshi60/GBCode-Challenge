import { userInfo } from 'os';
import React, {useContext, useState, createContext, useEffect} from 'react'
import { auth } from '../services/auth';
const defaultState = {
  currentUser: null
}

const AuthContext = createContext({});

export function useAuth() {
  useContext(AuthContext)
}

export const AuthProvider: React.FC = ({children})  => {
 
  const [currentUser, setCurrentUser] = useState<any | null>()
  const [loading, setLoading] = useState(true)

  const value = {
    currentUser
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( user => {
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe
  }, [])

  return (    
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  ) 
}
