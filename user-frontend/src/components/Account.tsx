import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Signout from './Signout'
import { useAuth } from '../contexts/AuthContext'

import { Box, Input, Select, FormControl, Heading, 
  Flex,
  NumberInput,
  NumberInputField,
  Text,
  EditableInput,
  Button } from '@chakra-ui/react'
import UpdateUser from './UpdateUser'
import { EmailAuthCredential } from 'firebase/auth'

export default function Account() {

  //TODO: refactor into object
  const [firstName,setFirstName] = useState('Jane')
  const [lastName,setLastName] = useState('Doe')
  const [age,setAge] = useState(1)
  const [country,setCountry] = useState('Denmark') //lets assume they are from dk as default
  const {currentUser}  = useAuth();

  
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
      if (response.data.firstName){setFirstName(response.data.firstName)}
      if (response.data.lastName){setLastName(response.data.lastName)}
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
    e.preventDefault()
    console.log('update user submit')
    //input validation first
    axios.put(`http://localhost:3001/user/${currentUser.uid}`, {firstName,  lastName, country, age},{ headers:
      {
        authorization: `Bearer ${currentUser.accessToken}`
      }}).then(response => {
        console.log('updated user')
      }).catch(e => console.log(e))
    } 
  
  return (
    // <>
    //   <Flex
    //     direction="column"
    //     width="100wh"
    //     height="100vh"
    //     backgroundColor="gray.200"
    //     justifyContent="center"
    //     alignItems="center">
    //     <Box>
    //       <Heading textAlign="center">{currentUser.email}</Heading>
    //       <Text>Welcome {firstName} {lastName} from {country} Age for good measure {age}</Text>
    //     </Box>
    //     <Box>
    //       <form onSubmit={updateUserDetails}>
    //         <Input type="text"  isRequired value={firstName} onChange={(event) => {setFirstName(event?.target.value)}}/>
    //         <Input type="text"  isRequired value={lastName} onChange={(event) => {setLastName(event?.target.value)}}/>
    //         <NumberInput isRequired value={age} min={1} max={99} onChange={(e) => setAge(Number(e))}>
    //           <NumberInputField />
    //         </NumberInput>
    //         <Select isRequired value={country} onChange={(e) => setCountry(e.target.value)}>
    //           <option>Denmark</option>
    //           <option>Sweden</option>
    //           <option>Norway</option>
    //           <option>Finland</option>
    //         </Select>
    //         <Button loadingText="Updating" size="lg" colorScheme="teal" type="submit">Update user</Button> 
    //       </form>
    //   </Box>
    //   <Signout/>
      
    //   </Flex>
      <UpdateUser/>
  
    
   // <div>
    //   <button onClick={ () => console.log('hi')}>Get Deets</button>
    //   {data===null? <p>No data</p> : <p>{JSON.stringify(data)}</p>}
      
    //   <h1>Form values</h1>
    //   <p>firstname {firstName} lastname {lastName} country {country}</p>
    // </div>
    
  )
}
