//lib imports
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
//components
import {auth, signInWithEmailAndPassword} from '../services/auth'
export default function Signin() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const signIn = async (event: any) => {
    event.preventDefault()
    try {
      const userCreds = await signInWithEmailAndPassword(auth, email, password)
      const user = userCreds.user
      console.log('#######')
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <h3> Sign in</h3>
        <form onSubmit={signIn}>
          <label>Email
            <input type="email" value={email} onChange={(event) => {setEmail(event.target.value)}}></input>
          </label>
          <label>Password
            <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}}></input>
          </label>
          <button type="submit" value="submit">SIGN IN</button>
        </form>    
      </div>
      <div>
        <p>Dont have an account? - <Link to="/signup">Sign up</Link></p>
      </div>
    </>
    
  )
}
