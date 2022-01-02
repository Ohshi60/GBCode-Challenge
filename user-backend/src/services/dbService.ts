import fs from 'fs';
// import db from '../db/users.json';


const fileName = './src/db/users.json';
// db helper function to write to our json file and update it
const writeToDb =async (db: any) => {
  try {
    await fs.writeFile(fileName, JSON.stringify(db), (err) => {
      if (err) return console.error(err);
      console.log('updated json file');
    });
  } catch (e) {
    console.log('error updating json file', e);
  }
};
const refreshDb = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return reject(err);
      };
      // console.log('readfile', data);
      const parsedData =JSON.parse(data);
      // console.log('parsed', parsedData);
      return resolve(parsedData);
    });
  });
};
// const getSyncDb = () => {
//   const data = fs.readFileSync(fileName, 'utf8');
//   console.log('readfile', data);
//   const parsedData =JSON.parse(data);
//   console.log('parsed', parsedData);
//   return parsedData;
// };

// interface User {
//   uid: number,
//   country: string,
//   firstName: string,
//   lastName: string,
//   age: number
// }
export const getUser = async (uid: string) => {
  // find user from our "db" - if we cant find the user we will create one
  // filter worse runtime than find but who cares
  console.log('getUser called for uid', uid );
  try {
    // const db = await loadDbFromFile();
    const db:any = await refreshDb();

    console.log('db', db);
    const user = await db.find( (user: any) => {
      return user.uid === uid;
    });
    console.log('user found', user);
    if (!user) {
      console.log('user?');
      const newUser= {
        'uid': uid,
        'country': '',
        'firstName': '',
        'lastName': '',
        'age': 1,
      };
      db.push(newUser);
      console.log('updated db', db);
      writeToDb(db);
      return newUser;
    } else return user;
  } catch (e) {
    return e;
  };
};

export const updateUser = async (uid:string, data:any) => {
  const {firstName, lastName, country,age} = data
  const db:any = await refreshDb();
  const user = db.find( (user:any) => user.uid === uid);
  // const updatedUser = {...user, country: data.country, firstName: data.fname,
  //   lastName: data.lname};
  const updatedUser = {...user, firstName, lastName, country, age};
  const updatedDb = db.map( (user:any) => user.uid!==uid ? user : updatedUser );
  writeToDb(updatedDb);
  console.log('updated user');
  return updatedUser;
};
