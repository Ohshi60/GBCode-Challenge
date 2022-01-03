//lib imports
import React, {useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//components
import { useAuth } from '../contexts/AuthContext'
//chakra ui components
import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, InputGroup, Text, InputRightElement, Stack, useColorModeValue } from '@chakra-ui/react'


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
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
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
              Already a user? <Link to="/signin" color={'blue.400'}>Login</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>

  )
}
