// Library imports
import express, {Request, Response} from 'express'
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const app = express();

//Custom Module imports
import userRouter from './routes/userRouter';
import firebaseConfig from './fb-config'
//refactor into using dotenv environment variables at some point for port etc


const PORT = 3001 

//App setup
const fbApp = initializeApp(firebaseConfig)
const auth = getAuth(fbApp)

app.use('/user', userRouter)

app.get('/', (req: Request,res: Response) => {
  res.send('Welcome to root')
})
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})

/*
Implement from 
https://console.firebase.google.com/u/0/project/very-sirius-proyecta/overview
*/


