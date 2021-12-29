import express from 'express';

const userRouter = express.Router();

// signup
userRouter.post('/signup', (req, res) => {
  console.log('Signup user with form data', req.body);
  console.log('email', req.body.email);
  console.log('plaintext password', req.body.password);
  res.send('user signed up');
});
// sign in
userRouter.post('/signin', (req, res) => {
  console.log('Posted data to the signin endpoint');
  res.send('signed in?');
});

// request user profile page - needs to be authenticated to access this
userRouter.get('/:id', (req, res) => {
  // if req.params.id === decodedToken.uid;
  console.log('received request frm ', req);
  console.log('user profile for id', req.params.id);
  res.send(`Welcome mr ${req.params.id}`);
});

export default userRouter;
