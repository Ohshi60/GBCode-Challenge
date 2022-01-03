//lib imports
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Flex, 
  Box,
  Divider, 
  Heading, 
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Button, } from '@chakra-ui/react'

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

  const isError = email === ''
  return (
      <Flex 
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center">
          <Box>
            <Heading>
              Sign in
            </Heading>
            <form onSubmit={signInHandler}>
            <FormControl isInvalid={isError}>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel> Password</FormLabel>
              <Input
                isRequired
                pr='4.5rem'
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <InputGroup size='md'>

            </InputGroup>
            <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </form>
            
          </Box>
          <Divider/>
          <Box>
            New to us?{" "}
            <Link color="teal.500" to="/signup">
              Sign Up
            </Link>
          </Box>
      </Flex>
  )
}
