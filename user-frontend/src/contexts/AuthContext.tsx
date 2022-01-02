import React, {useContext, useState, createContext, useEffect} from 'react'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../services/auth';


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

  const signIn = (email:string,password:string) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const registerUser = (email: string,password: string) => {
    return createUserWithEmailAndPassword(auth,email,password)
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
    signOut,
    signIn,
    registerUser
  }

  return (    
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  ) 
}
