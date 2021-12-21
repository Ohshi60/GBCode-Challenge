const express = require('express')
const userRouter = express.Router()


userRouter.get('/', (req,res) => {

    console.log('Get user root')
    res.send('user ROot')
})
//request user profile page
userRouter.get('/:id', (req,res) => {
    console.log('user profile for id' , req.params.id)
    res.send('Yeyoooy')

} )

module.exports = userRouter
