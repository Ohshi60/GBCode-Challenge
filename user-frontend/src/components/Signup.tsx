//lib imports
import React, {useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//components
import { useAuth } from '../contexts/AuthContext'
//chakra ui components
import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Text, Stack, useColorModeValue, Alert } from '@chakra-ui/react'


export default function Signup() {
  const [error,setError] = useState('')
  const emailRef = useRef<any |null>()
  const passwordRef = useRef<any |null>()
  const passwordConfirmRef = useRef<any |null>()
  const { registerUser } = useAuth()
  let navigate = useNavigate()
  const registerHandler = (e: any) => {
    e.preventDefault()
    try{
      if (passwordRef.current.value !== passwordConfirmRef.current.value){
        console.log('Passwords do not match');
        setError('Passwords do not match')
      } else if (passwordRef.current.value.length < 8) {
        console.log('Password must be 8 characters long')
        setError('Password must be 8 characters long')
      } else {
        console.log('registeruser', emailRef.current.value, passwordRef.current.value)
        registerUser(emailRef.current.value, passwordRef.current.value)
        navigate('/')
      }
    } catch (e:any){
      console.log('error registering new user')
      setError(e)
    }
  }

  return (
    <>
      {error && <Alert status="error" textAlign="center">{error}</Alert>}
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" ref={emailRef} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="password" min-length="8" isRequired>
                <FormLabel>Password</FormLabel>
                <Input isRequired type="password" ref={passwordRef} />
              </FormControl>
              <FormControl isRequired min-length="8" id="passwordConfirmation">
                <FormLabel>Confirm password</FormLabel>
                <Input   type="password" ref={passwordConfirmRef} />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={registerHandler}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Button>
                      <Link to="/signin" color={'blue.400'}>Login</Link>
                    </Button>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

    </>
  )
}
