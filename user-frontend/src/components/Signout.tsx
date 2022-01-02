// import { signOut } from 'firebase/auth'
import React from 'react'

import { useAuth } from '../contexts/AuthContext'
import {auth} from '../services/auth'
export default function Signout() {

  const {signOut} = useAuth()
  
  const signOutHandler = () => {
    signOut().then( () => {
      console.log('signed out')
    })
  }
  return (
    <div>
      <button onClick={signOutHandler}>Sign out</button>      
    </div>
  )
}
