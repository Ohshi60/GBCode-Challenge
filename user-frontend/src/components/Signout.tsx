// import { signOut } from 'firebase/auth'
import React from 'react'

import { useAuth } from '../contexts/AuthContext'

import { Button } from '@chakra-ui/react'
export default function Signout() {

  const {signOut} = useAuth()
  
  const signOutHandler = () => {
    signOut().then( () => {
      console.log('signed out')
    }).catch( console.error('error signing out'))
  }
  return (
    <Button
      p="4" 
      colorScheme="red"
      onClick={signOutHandler}>
      Sign out
    </Button>
  )
}
