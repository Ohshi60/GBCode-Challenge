import db from '../db/users.json';


// interface User {
//   uid: number,
//   country: string,
//   firstName: string,
//   lastName: string,
//   age: number
// }
export const getUser = (uid: string) => {
  // find user from our "db" - if we cant find the user we will create one
  // filter worse runtime than find but who cares
  console.log('getUser called for uid', uid );
  try {
    const user = db.find( (user) => {
      return user.uid === uid;
    });
    console.log('user', user)
    if (!user) {
      console.log('user?');
      const newUser= {
        'uid': uid,
        'country': '',
        'firstName': '',
        'lastName': '',
        'age': 1,
      };
      console.log('newUser', newUser)
      db.push(newUser);
      console.log('db push', db)
      return newUser
    } else {return user}
  } catch (e) {
    return e;
  };
};

// export const updateUser = (uid, data) => {
//   const newDb = [...db, db]
// }
