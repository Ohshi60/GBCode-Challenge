# README

This is a simple fullstack webapp using React, Firebase-auth, Typescript and Express on the backend



# Installation
I will assume you are running a unix system

Requires `Node.JS` to run
You also need `git`installed

First clone the repo 
`git clone https://github.com/Ohshi60/GBCode-Challenge.git appName && cd appName`

### Firebase setup
You will need to have a firebase account, and create a Firebase Project
    - Create an App for your Project
    - Select Sign in Providers and make sure to enable `email/password`
    - You will need the `firebase-config` for the front-end 
    - Create an service account and download the provided `json`file


### Building frontend
- **IMPORTANT** you will need to create a .env.local file containing the keys to your firebase-config: I suggest you rename the provided .env.example and fill in the values `mv .env.example .env.local`
- Move into the front-end folder `cd user-frontend`
    - Install the dependencies with `npm install `or `yarn install`

### Building the backend
- **IMPORTANT** Remember the service account file from the firebase-setup? You will need to move it into `user-backend/src/config/serviceAccountKey.json`
- Move into the backend folder now `cd ../user-backend`
- Install the dependencies with `npm install `or `yarn install`

### Running in development mode
- #### Backend
    - `yarn run dev`
    - you should see `Server started at port 3001` in your terminal
- #### Frontend
    - `yarn run start`
    - ìf all goes well you should your react app in the browser

### Building for production
- ### Backend
    - Compile src with `yarn run tsc`
    - You can now run the application with `yarn run start`
- ### Frontend
   - Compile src with `yarn run build`
   - Follow instructions in terminal
    -  Mine was  `yarn global add serve`
        `serve -s build`

### Misc

`yarn run lint-fix` can be run on both front and backend

