// import { signOut } from 'firebase/auth'
import React from 'react'

import {auth} from '../services/auth'
export default function Signout() {
  const signOutHandler = () => {
    auth.signOut().then( () => {
      console.log('signout called')
    })
  }
  return (
    <div>
      <button onClick={signOutHandler}>Sign out</button>      
    </div>
  )
}
