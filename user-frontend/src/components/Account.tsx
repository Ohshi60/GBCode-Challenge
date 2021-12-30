import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {auth } from '../services/auth'

export default function Account() {

  const [data,setData] = useState<any | null>(null)
  const getDeetz = async () => {
    const token = await auth.currentUser?.getIdToken() 
    const uid = await auth.currentUser?.uid   
    console.log('uid', uid)
    console.log('token', token)
    const res = await axios.get(`http://localhost:3001/user/${uid}`,{ headers:
    {
      authorization: `Bearer ${token}`
    }})
    setData(res.data)
  }

  return (
    <div>
      <button onClick={getDeetz}>Get Deets</button>
      {data===null? <p>No data</p> : <p>{data}</p>}
    </div>
  )
}
