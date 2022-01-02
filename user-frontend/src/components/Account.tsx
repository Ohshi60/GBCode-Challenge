import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Signout from './Signout'
import { useAuth } from '../contexts/AuthContext'

export default function Account() {

  const [data,setData] = useState<any | null>(null) // this should be user
  const [firstName,setFirstName] = useState('Jane')
  const [lastName,setLastName] = useState('Doe')
  const [age,setAge] = useState(1)
  const [country,setCountry] = useState('Denmark') //lets assume they are from dk as default
  const {currentUser}  = useAuth();

  //

  // const getUser = async () => {
  //   const token = await auth.currentUser?.getIdToken() 
  //   const uid = await auth.currentUser?.uid   
  //   console.log('uid', uid)
  //   console.log('token', token)
  //   const res = await axios.get(`http://localhost:3001/user/${uid}`,{ headers:
  //   {
  //     authorization: `Bearer ${token}`
  //   }})
  //   console.log('deetz result', res.data);
  //   return res.data;
  // }
  // lets create an effect that fetches data from the api
  const getUserDetails = () => {
    const endpoint = `http://localhost:3001/user/${currentUser.uid}`
    axios.get(endpoint, {
      headers: {
        authorization: `Bearer ${currentUser.accessToken}`
      }
    }).then( response => {
      console.log('found user', response.data)
      if (response.data.firstName){setCountry(response.data.firstName)}
      if (response.data.lastName){setCountry(response.data.lastName)}
      if (response.data.country){setCountry(response.data.country)}
      if (response.data.age){setAge(response.data.age)}

    }).catch( e => console.log(e))
  }
  
  useEffect(() => {
    getUserDetails()
  }, [])
  // useEffect( () => {
  //   getUser().then( (user) => {
  //     setData(user);
  //   })
  // }, [])

  const updateUserDetails = async (e: any)=> {
    //call api backend with form data
    console.log('update user submit')
    //input validation first
      try {
        axios.put(`http://localhost:3001/user/${currentUser.uid}`, {"fname": firstName, "lname": lastName, "country": country},{ headers:
        {
          authorization: `Bearer ${currentUser.accessToken}`
        }}).then(res => {
          setData(res.data) 
        }).catch(e => console.log(e))
      } catch {
        console.log('Error: Couldnt update user')
      }
  }
  return (
    <>
      <div>
        <h1>HELLO</h1>
        <p> {currentUser.email}</p>
        <p>Welcome {firstName} {lastName} from {country} Age for good measure {age}</p>
        <Signout/>
      </div>
      <div>
        <form onSubmit={updateUserDetails}>
          <input type="text" value={firstName} onChange={(event) => {setFirstName(event?.target.value)}}/>
          <input type="text" value={lastName} onChange={(event) => {setLastName(event?.target.value)}}/>
          <input type="number" value={age} onChange={(e) => {setAge(Number(e.target.value))}}/>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option>Denmark</option>
            <option>Sweden</option>
            <option>Norway</option>
            <option>Finland</option>
          </select>
          <input type="submit" />
        </form>  
      </div>
    </>
    
   // <div>
    //   <button onClick={ () => console.log('hi')}>Get Deets</button>
    //   {data===null? <p>No data</p> : <p>{JSON.stringify(data)}</p>}
      
    //   <h1>Form values</h1>
    //   <p>firstname {firstName} lastname {lastName} country {country}</p>
    // </div>
    
  )
}
