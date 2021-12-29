import admin from './adminService';
import {Request, Response} from 'express';

const createUser = async (req: Request, res: Response) => {
  // destructure variables
  const {email, password} = req.body;
  try {
    const newUser = await admin.auth().createUser({
      email,
      password,
    });
    return res.send(newUser);
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default createUser;
