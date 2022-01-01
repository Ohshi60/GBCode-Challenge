import express from 'express';

import createUser from '../services/authService';
import {getUser} from '../services/dbService';

import {checkAuthCredentials} from '../middleware/auth-middle';

const userRouter = express.Router();

// signup
userRouter.post('/signup', createUser);
userRouter.post('/signin', (_req, res) => {
  console.log('Posted data to the signin endpoint');
  res.send('signed in?');
});

// request user profile page - needs to be authenticated to access this
userRouter
    .route('/:id')
    .get( checkAuthCredentials, (req, res) => {
      console.log('get id req', req.params.id)
      try {
        const usr = getUser(req.params.id);
        res.json(usr);
      } catch (e) {
        res.json({message: 'Error - couldnt find user'});
      }
    })
    .put( checkAuthCredentials, (req, res) => {
      console.log('received put req');
      const {fname, lname, country} = req.body;
      console.log(fname, lname, country);
      res.send('todo');
    });

export default userRouter;
