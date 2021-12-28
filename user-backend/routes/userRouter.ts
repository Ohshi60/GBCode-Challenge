import express = require('express')

const userRouter = express.Router()

//signup
userRouter.post('/signup', (req,res) => {

    console.log('Signup user with form data', req.body)
    res.send('user signed up')
})
//sign in
userRouter.post('/signin', (req,res) => {

    console.log('Posted data to the signin endpoint')
    res.send('signed in?')
})

//request user profile page
userRouter.get('/:id', (req,res) => {
    console.log('received request frm ' , req)
    console.log('user profile for id' , req.params.id)
    res.send(`Welcome mr ${req.params.id}`)

} )

export default userRouter