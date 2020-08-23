# Mix Pack Workout (Work in Progress)
### An app to customize a workout and set a workout schedule.

## React / Redux with backend server
## Login with Google authentication


## (A) To create your own Google Auth sign in for users:
#### 1. Go to console.developers.google.com
#### 2. Create a new project -> name it -> click Create
#### 3. Go to credentials -> choose external -> Create
#### 4. Enter your app name -> click save
#### 5. At root of CLIENT (not API) part of application create a .env file and inside type:
####  a) REACT_APP_GOOGLE_API_CLIENT_ID=Enter your client id here
####  b) REACT_APP_GOOGLE_API_SCOPE=email

## (B) To Run App:
#### 1. From CLIENT directory -> yarn start -> run on Localhost:3000.
#### 2. From API directory (NOT apis directory inside of client folder) -> npm install -> yarn start -> run on Localhost:3001.
