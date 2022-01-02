import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {auth } from '../services/auth'

export default function Account() {

  const [data,setData] = useState<any | null>(null) // this should be user
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [country,setCountry] = useState('Denmark') //lets assume they are from dk as default


  const getDeetz = async () => {
    const token = await auth.currentUser?.getIdToken() 
    const uid = await auth.currentUser?.uid   
    console.log('uid', uid)
    console.log('token', token)
    const res = await axios.get(`http://localhost:3001/user/${uid}`,{ headers:
    {
      authorization: `Bearer ${token}`
    }})
    console.log('deetz result', res.data);
    setData(res.data)
    setFirstName(res.data.firstName)
    setLastName(res.data.lastName)
    setCountry(res.data.country)
  }

  useEffect( () => {
    if(data !== null) getDeetz()
  }, [])

  const updateUserDetails = async (e: any)=> {
    //call api backend with form data
    e.preventDefault()
    console.log('update user submit')
    //input validation first
      const token = await auth.currentUser?.getIdToken() 
      const uid = await auth.currentUser?.uid   
      console.log('uid', uid)
      console.log('token', token)
      try {
        const res = await axios.put(`http://localhost:3001/user/${uid}`, {"fname": firstName, "lname": lastName, "country": country},{ headers:
        {
          authorization: `Bearer ${token}`
        }})
        setData(res.data)
      } catch {
        console.log('Error: Couldnt update user')
      }
  }
  return (
    <div>
      <button onClick={getDeetz}>Get Deets</button>
      {data===null? <p>No data</p> : <p>{JSON.stringify(data)}</p>}
      <form onSubmit={updateUserDetails}>
        <input type="text" value={firstName} onChange={(event) => {setFirstName(event?.target.value)}}/>
        <input type="text" value={lastName} onChange={(event) => {setLastName(event?.target.value)}}/>
        <select name="country" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option>Denmark</option>
          <option>Sweden</option>
          <option>Norway</option>
          <option>Finland</option>
        </select>
        <input type="submit" />
      </form>
      <h1>Form values</h1>
      <p>firstname {firstName} lastname {lastName} country {country}</p>
    </div>
  )
}
