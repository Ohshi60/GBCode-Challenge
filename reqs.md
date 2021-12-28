Frontend:
Create a React app application with the following features:
- Signup page: a page for new users to sign up with email and password. The signed up
user should be stored in Firebase.
- Login page: a page where signed up users can log in. Once logged in the application
should show the logged in user’s account in a user account page.
- The user account page: should show the logged in user’s email, and a form to add/edit
their full name, age and country. Countries should be displayed as a Select box, with only the following options: Denmark, Norway, Sweden and Finland.


Backend:
Create a Node.js - Express server with the following features:
- Create an authenticated endpoint to store the signed up users.
- Create an authenticated endpoint for updating users account: full name, age and
country.
- Data persistence: feel free to use any type of database system you are most familiar
with. Some basic examples: Postgres/SQlite/MongoDB. 

##MUST HAVES
[x] The solution should be accessible through one Github repository for both back end and frontend parts.
[x]- The main project folder should be split into a backend folder and frontend folder separately.
[] - Please provide instructions on how to run the application in fullstack.
[x]- The application must use: React, NodeJS, TypeScript with integration with Firebase
Authentication (for Firebase you should be able to create a free account).
##Nice to have
 For the front end: styled-components, form inputs validation - for example: password must be 8 or more characters. You can also demonstrate this by adding more fields in the users’ data that can be validated, such as date of birth, phone number, etc.
- Authentication with Firebase using Google - you can configure the Firebase project so that one can also sign up using Google authentication. Feel free to use Firebase’s builtin UI component: FirebaseUI
- Deployment: It’s not a requirement to deploy the app but it will be a great bonus point if you can deploy on Github.io or with a cloud service provider.
[x]- TypeScript and linting: It’s not a requirement to apply all the strict rules of TypeScript, but it’s a great bonus point if you can set up some prettier or linter, for example eslint and include it in script and can be run with “npm run lint” in order to check TS errors and format the code properly.