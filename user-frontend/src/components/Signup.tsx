//lib imports
import React, {useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//components
import { useAuth } from '../contexts/AuthContext'
//misc

export default function Signup() {

  const emailRef = useRef<any |null>()
  const passwordRef = useRef<any |null>()
  const passwordConfirmRef = useRef<any |null>()
  const { registerUser } = useAuth()
  const [error,setError] = useState('')
  let navigate = useNavigate()
  const registerHandler = (e: any) => {
    setError('')
    e.preventDefault()
    try{
      if (passwordRef.current.value !== passwordConfirmRef.current.value){
        setError('Passwords do not match');
      } else {
        registerUser(emailRef.current.value, passwordRef.current.value)
        navigate('/')
      }
    } catch (e:any){
      console.log('error registering new user')
      setError(e)
    }

  }

  // const signUpNewUser = async (event: any) => {
  //   event.preventDefault()
  //   if(passwordRef === passwordConfirmRef) {
  //     try{
  //       const newUserCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        
  //       const user = newUserCredential.user  
  //       console.log(user)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   } else {
  //     alert('Passwords do not match')
  //   }
    
  // }
  return (
    <>
      <div>
        <p>{error}</p>
        <h1>Signup</h1>
        <form onSubmit={registerHandler}>
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
        <p>already have an account? <Link to="/signin"> Sign in </Link></p>
      </div>
    </>
  )
}
