import admin from '../services/adminService';

const getAuthToken = (req: any, _res: any, next: any) => {
  console.log('###');
  if (req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer') {
    req.authToken = req.headers.authorization.split(' ')[1];
  } else {
    req.authToken = null;
  }
  next();
};


const checkAuthCredentials =
(req: any, res: any, next: any) => {
  getAuthToken(req, res, async () => {
    try {
      // destructure token from req object first
      const {authToken} = req;
      const userInfo = await admin.auth().verifyIdToken(authToken);
      // console.log('userinfo fetched ', userInfo);
      req.authid = userInfo.uid;
      return next();
    } catch (e) {
      return res
          .status(401)
          .send({error: 'You are not authorized to make this request'});
    }
  });
};

export {checkAuthCredentials};
