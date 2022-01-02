import { userInfo } from 'os';
import React, {useContext, useState, createContext} from 'react'

const defaultState = {
  currentUser: null
}

const AuthContext = createContext({});

export function useAuth() {
  useContext(AuthContext)
}
// eslint-disable-next-line
export const AuthProvider  = ({children}) : React.PropsWithChildren<{}> => {
 
  const [currentUser, setCurrentUser] = useState()
  const value = {
    currentUser
  }

  return (    
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  ) 
}
