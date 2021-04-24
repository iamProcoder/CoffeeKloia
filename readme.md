# CoffeeKloia


## Tech

CoffeeKloia uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [Mocha & Chai] Server Side Testing
- [React.js] - frontend
- [Redux.js] - for State Management
- [MongoDB] - for Database


## Installation

requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and start the app.

```sh
cd CoffeKloia\Server
npm i
node server
```
```sh
cd CoffeKloia\client
npm i
npm start
```

## Server Side Project Structure

- ./config includes configuration files (DB Connection String, Port Number)
- ./controllers contains RESTful Web Service controller files
- ./routers contains Web Service Routes
- ./Middleware contains middleware coffee existence check
-  ./models foldercontains serverside models files
-  ./test folder cointains chai mocha files
-  ./server.js start file for server running

### Server Side Test
Run server.test.js to check server is running properly

Run coffee.test.js to check RESTful Service is running properly
```sh
cd CoffeKloia\Server\
npm run test
```
```sh

## Client Side Project Structure

- ./components includes React component files
- ./helpers contains Web Service Interceptor and error handling files
- ./redux contains state management files
