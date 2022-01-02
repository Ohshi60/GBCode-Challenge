import React, {useContext, useState, createContext, useEffect} from 'react'
import { auth } from '../services/auth';


const AuthContext = createContext({})

export const useAuth: any = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({children})  => {
 
  const [currentUser, setCurrentUser] = useState<any>()
  const [loading, setLoading] = useState(true)

  const signOut = () => {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( user => {
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signOut
  }

  return (    
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  ) 
}
