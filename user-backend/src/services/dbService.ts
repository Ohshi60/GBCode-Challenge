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
      const parsedData =JSON.parse(data);
      return resolve(parsedData);
    });
  });
};
// using a blocking operation when our db is a json file is probably better
// const getSyncDb = () => {
//   const data = fs.readFileSync(fileName, 'utf8');
//   console.log('readfile', data);
//   const parsedData =JSON.parse(data);
//   console.log('parsed', parsedData);
//   return parsedData;
// };

interface User {
  uid: string;
  country: string;
  firstName: string;
  lastName: string;
  age: number;
}
export const getUser = async (uid: string) => {
  // find user from our "db" - if we cant find the user we will create one
  // filter worse runtime than find but who cares
  try {
    // const db = await loadDbFromFile();
    const db:any = await refreshDb();

    const user = await db.find( (user: User) => {
      return user.uid === uid;
    });
    if (!user) {
      const newUser= {
        'uid': uid,
        'country': '',
        'firstName': '',
        'lastName': '',
        'age': 1,
      };
      db.push(newUser);
      writeToDb(db);
      return newUser;
    } else return user;
  } catch (e) {
    return e;
  };
};

export const updateUser = async (uid:string, data:any) => {
  const {firstName, lastName, country, age} = data;
  const db:any = await refreshDb();
  const user = db.find( (user:any) => user.uid === uid);
  const updatedUser = {...user, firstName, lastName, country, age};
  const updatedDb = db.map( (user:any) => user.uid!==uid ? user : updatedUser );
  writeToDb(updatedDb);
  return updatedUser;
};
