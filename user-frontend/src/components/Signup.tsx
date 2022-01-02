//lib imports
import React, {useState, useRef } from 'react'
//components
import {auth, createUserWithEmailAndPassword} from '../services/auth'
import { useAuth } from '../contexts/AuthContext'
//misc
const baseUrl="http://localhost:3001/user/signup"

export default function Signup() {

  const emailRef = useRef<any |null>()
  const passwordRef = useRef<any |null>()
  const passwordConfirmRef = useRef<any |null>()

  const signUpNewUser = async (event: any) => {
    event.preventDefault()
    if(passwordRef === passwordConfirmRef) {
      try{
        const newUserCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        
        const user = newUserCredential.user  
        console.log(user)
      } catch (e) {
        console.log(e)
      }
    } else {
      alert('Passwords do not match')
    }
    
  }
  return (
    <>
      <div>
        <h1>Signup</h1>
        <form onSubmit={signUpNewUser}>
          <label>Email
            <input type="email" ref={emailRef} required></input>
          </label>
          <label>Password
            <input type="password" ref={passwordRef} required></input>
          </label>
          <label>Confirm Password
            <input type="password" ref={passwordConfirmRef} required></input>
          </label>
          <button type="submit">SIGN UP</button>
        </form>
      </div>
      <div>
        <p>already have an account? Link to sign in</p>
      </div>
    </>
  )
}
