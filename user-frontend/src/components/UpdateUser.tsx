// import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, InputGroup, Text, InputRightElement, Link, Stack, useColorModeValue, NumberInput, NumberInputField, Select } from '@chakra-ui/react'
// import React, { useRef } from 'react'
// import axios from 'axios'
// import {useAuth} from '../contexts/AuthContext'
// import userService  from '../services/userService'

// export default function UpdateUser() {
//   const {currentUser} = useAuth()
//   const firstNameRef = useRef()
//   const lastNameRef = useRef()
//   const countryRef = useRef()
//   const ageRef = useRef()

//   const updateUserDetails = async (e: any)=> {
//     //call api backend with form data
//     e.preventDefault()
//     console.log('update user submit')
//     //input validation first
//     userService.updateUser(currentUser, {firstName, lastName, country, age})
//       .then(response => {
//         console.log('updated user')
//       })
//       .catch(e => console.log(e))
//   }
//   return (
//     <Flex
//     minH={'100vh'}
//     align={'center'}
//     justify={'center'}
//     bg={useColorModeValue('gray.50', 'gray.800')}>
//     <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//       <Stack align={'center'}>
//         <Heading fontSize={'4xl'} textAlign={'center'}>
//           Edit Details
//         </Heading>
//         <Text fontSize={'lg'} color={'gray.600'}>
//           to enjoy all of our cool features ✌️
//         </Text>
//       </Stack>
//       <form onSubmit={updateUserDetails}>
//       <Box
//         rounded={'lg'}
//         bg={useColorModeValue('white', 'gray.700')}
//         boxShadow={'lg'}
//         p={8}>
//         <Stack spacing={4}>
//           <HStack>
//             <Box>
//               <FormControl id="firstName" isRequired>
//                 <FormLabel>First Name</FormLabel>
//                 <Input type="text" />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl id="lastName">
//                 <FormLabel>Last Name</FormLabel>
//                 <Input type="text" />
//               </FormControl>
//             </Box>            
//           </HStack>
//           <Stack spacing={10} pt={2}>
//           <Box>
//               <FormControl id="">
//                 <FormLabel >Age</FormLabel>
//                 <NumberInput isRequired>
//                   <NumberInputField />
//                 </NumberInput>
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl id="country">
//                 <FormLabel >Country</FormLabel>
//                 <Select>
//                   <option>Denmark</option>
//                   <option>Sweden</option>
//                   <option>Norway</option>
//                   <option>Finland</option>
//                 </Select>
//               </FormControl>
//             </Box>
//             <Button
//               loadingText="Submitting"
//               size="lg"
//               bg={'blue.400'}
//               color={'white'}
//               _hover={{
//                 bg: 'blue.500',
//               }}>
//               Update my details!
//             </Button>
//           </Stack>
//         </Stack>
//       </Box>
//       </form>
//     </Stack>
//   </Flex>
//   )
// }
export {}
