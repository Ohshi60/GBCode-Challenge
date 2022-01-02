//lib imports
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'
//components
export default function Signin() {
  const { signIn } = useAuth()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  let navigate = useNavigate()
  const signInHandler = (e:any) => {
    e.preventDefault()
    console.log('sign in handler')
    try{
      signIn(email,password)
      navigate('/')
    } catch {
      console.log('Error signing in')
    }
  }
  // const signIn = async (event: any) => {
  //   event.preventDefault()
  //   try {
  //     const userCreds = await signInWithEmailAndPassword(auth, email, password)
  //     const user = userCreds.user
  //     console.log('#######')
  //     console.log(user)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <div>
        <h3> Sign in</h3>
        <form onSubmit={signInHandler}>
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
