import express from 'express';

import {getUser, updateUser} from '../services/dbService';

import {checkAuthCredentials} from '../middleware/auth-middle';

const userRouter = express.Router();

// request user profile page - needs to be authenticated to access this
userRouter
    .route('/:id')
    .get( checkAuthCredentials, async (req, res) => {
      try {
        const usr = await getUser(req.params.id);
        res.json(usr);
      } catch (e) {
        res.json({message: 'Error - couldnt find user'});
      }
    })
    .put( checkAuthCredentials, (req, res) => {
      // call our db function to update user details
      try {
        const updatedUser = updateUser(req.params.id, req.body);
        res.json(updatedUser);
      } catch (e) {
        console.error(e);
        res.json({message: 'Error - couldnt update user'});
      }
    });

export default userRouter;
