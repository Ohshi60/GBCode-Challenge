import admin from 'firebase-admin';

// cant use import
// read more  at https://github.com/firebase/firebase-admin-node/issues/522
const serviceAccount = require('../config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
