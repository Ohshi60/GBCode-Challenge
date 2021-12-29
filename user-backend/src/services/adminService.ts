import admin from 'firebase-admin';

// this hack found at https://github.com/firebase/firebase-admin-node/issues/522

const serviceAccount = require('../../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
