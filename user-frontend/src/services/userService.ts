import axios from 'axios'

const baseUrl = 'http://localhost:3001/user'

const getUser = (currentUser:any) =>{
  const header = {
    authorization: `Bearer ${currentUser.accessToken}`
  } 
  const request = axios.get(`${baseUrl}/${currentUser.uid}`,{ headers: header})
  return request.then(response => response.data)
}
const updateUser = (currentUser:any,updatedData:any) =>{
  const header = {
    authorization: `Bearer ${currentUser.accessToken}`
  } 
  const request =  axios.put(`${baseUrl}/${currentUser.uid}`, updatedData, { headers: header})
  return request.then(response => response.data)
}

export default {getUser, updateUser}