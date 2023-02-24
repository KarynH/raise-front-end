# Welcome to Raise front-end! 

 Purpose: raise Is to connect parents and caregivers to an open discussion timeline with parenting questions and concerns. This app is ideal for new parents overwhelmed and experienced to connect with each other instantly.

# Getting Started 
In your terminal, cd into your choosen directory, paste the following command.
``` 
git clone https://github.com/KarynH/raise-front-end.git
```
cd into the directory and 
```
npm install
```
this installs all of the dependencies used in the Raise app
next create an .env file
```
touch .env
```
open your text editor and inside of the .env file paste the following command. This is api for raise's backend which is currently deployed on Render.io
```
REACT_APP_API_URL=https://raise-back-end.onrender.com
```
or if you are familiar with git paste this following command into the terminal
```
echo "REACT_APP_API_URL=https://raise-back-end.onrender.com" >> .env
```
you can run the Raise app running this command
```
npm start
```

