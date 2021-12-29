// Library imports
import express from 'express';
import cors from 'cors';

// Custom Module imports
import userRouter from './routes/userRouter';

// Constants
const PORT = 3001;

// App setup
const app = express();

// apply middleware
app.use(cors());
app.use(express.json());
app.use('/user', userRouter);


app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

/*
Implement from
https://console.firebase.google.com/u/0/project/very-sirius-proyecta/overview
*/


