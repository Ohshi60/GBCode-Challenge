import express from 'express';

import createUser from '../services/authService';

import {checkAuthCredentials} from '../middleware/auth-middle';
const userRouter = express.Router();

// signup
userRouter.post('/signup', createUser);
// console.log('Signup user with form data', req.body);
// console.log('email', req.body.email);
// console.log('plaintext password', req.body.password);
// createUser()
// res.send('user signed up');
// sign in
userRouter.post('/signin', (_req, res) => {
  console.log('Posted data to the signin endpoint');
  res.send('signed in?');
});

// request user profile page - needs to be authenticated to access this
userRouter.get('/:id', checkAuthCredentials, (req, res) => {
  // if req.params.id === decodedToken.uid;
  console.log('received request frm ', req);
  console.log('user profile for id', req.params.id);
  res.send(`Welcome mr ${req.params.id}`);
});

export default userRouter;
