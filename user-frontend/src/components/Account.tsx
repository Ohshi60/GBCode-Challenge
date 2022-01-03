import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Signout from './Signout'
import { useAuth } from '../contexts/AuthContext'

import { Box, Input, Select, FormControl, Heading, 
  Flex,
  NumberInput,
  NumberInputField,
  Text,
  Button } from '@chakra-ui/react'
// import UpdateUser from './UpdateUser'
import userService from '../services/userService'

export default function Account() {

  //TODO: refactor into object
  const [firstName,setFirstName] = useState('Jane')
  const [lastName,setLastName] = useState('Doe')
  const [age,setAge] = useState(1)
  const [country,setCountry] = useState('Denmark') //lets assume they are from dk as default
  const {currentUser}  = useAuth();

  // lets create an effect that fetches data from the api
  const getUserDetails = () => {
    userService.getUser(currentUser).then( response => {
      // this is a hack because if its the first time we receive a user from backend it will have 
      // uninitialized values
      if (response.firstName){setFirstName(response.firstName)}
      if (response.lastName){setLastName(response.lastName)}
      if (response.country){setCountry(response.country)}
      if (response.age){setAge(response.age)}
    }).catch( e => console.log(e))
  }
  
  useEffect(() => {
    getUserDetails()
  }, [])

  const updateUserDetails = async (e: any)=> {
    e.preventDefault()
    
    userService.updateUser(currentUser,{firstName,lastName,age,country}).then(_response => {
        console.log('update user successful')
      }).catch(e => console.error(e))
    } 
  
  return (

      <Flex
        direction="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center">
        <Box>
          <Heading textAlign="center">{currentUser.email}</Heading>
          <Text>Welcome {firstName} {lastName} from {country}, you're {age} years young</Text>
        </Box>
        <Box>
            <Input type="text"  isRequired value={firstName} onChange={(event) => {setFirstName(event?.target.value)}}/>
            <Input type="text"  isRequired value={lastName} onChange={(event) => {setLastName(event?.target.value)}}/>
            <NumberInput isRequired value={age} min={1} max={99} onChange={(e) => setAge(Number(e))}>
              <NumberInputField />
            </NumberInput>
            <Select isRequired value={country} onChange={(e) => setCountry(e.target.value)}>
              <option>Denmark</option>
              <option>Sweden</option>
              <option>Norway</option>
              <option>Finland</option>
            </Select>
            <Button loadingText="Updating" size="lg" colorScheme="teal" onClick={updateUserDetails}>Update user</Button>     
        </Box>
        <Signout/>
      </Flex>
  )
}
