const express = require('express')

const app = express()
const userRouter = require('./routes/userRouter')

//refactor into using dotenv environment variables at some point for port etc

const PORT = 3001 


app.use('/user', userRouter)

app.get('/', (req,res) => {
  res.send('Welcome to root')
})
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})
