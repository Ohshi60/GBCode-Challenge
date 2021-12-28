// Library imports
import express, {Request, Response} from 'express'
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import cors from 'cors'
//Custom Module imports
import userRouter from './routes/userRouter';
import firebaseConfig from './fb-config'
//Constants
const PORT = 3001 
//App setup
const app = express();
const fbApp = initializeApp(firebaseConfig)
const auth = getAuth(fbApp)
//apply middleware
app.use(cors())
app.use(express.json())
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


