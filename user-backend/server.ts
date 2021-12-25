import express, {Request, Response} from 'express'

const app = express();
import userRouter from './routes/userRouter';

//refactor into using dotenv environment variables at some point for port etc

const PORT = 3001 


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