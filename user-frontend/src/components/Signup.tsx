//lib imports
import React, {useState} from 'react'
import axios from 'axios'
//components
import {auth, createUserWithEmailAndPassword} from '../services/auth'

//misc
const baseUrl="http://localhost:3001/user/signup"

export default function Signup() {

  const [email, setEmail] = useState('email here')
  const [password,setPassword] = useState('')
  const [confirmPw, setConfirmPw] = useState('')

  const signUpNewUser = async (event: any) => {
    event.preventDefault()
    if(password === confirmPw) {
      try{
        const newUserCredential = await createUserWithEmailAndPassword(auth, email, password)
        
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
    <div>
      <h1>Signup</h1>
      <form onSubmit={signUpNewUser}>
        <label>Email
          <input type="email" value={email} onChange={(event) => {setEmail(event.target.value)}}></input>
        </label>
        <label>Password
          <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}}></input>
        </label>
        <label>Confirm Password
          <input type="password" value={confirmPw} onChange={(event) => {setConfirmPw(event.target.value)}}></input>
        </label>
        <button type="submit">SIGN UP</button>
      </form>

      <p>{email}</p>
      <p>{password}</p>
      <p>{confirmPw}</p>
      <p>{password === confirmPw? 'true' : 'false'}</p>
    </div>
  )
}
