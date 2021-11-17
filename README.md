# Getting Started with Create React TODOApp

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Introduction
ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules.
So this is frontend app  that provide user interactions


## Technology
Nodejs 16 version with react version 17
## Architecture
CRA templating

## CDC Tests
Consumer-Driven Contract tests (CDC tests) are a specialization of mock tests
They work just like mock tests with the specialty that the interface contract is driven by the consumer and not, as one would expect naturally, by the provider.
## Available Scripts

To build docker image:

### `docker-compose up -d --build`

Run the docker with command\
### ` docker-compose start`
Now you can run app by http://localhost:3001
If you want to run without docker then
### ` npm start`
Now you can run app by http://localhost:3000 

 To run tests
### ` npm run test`
To run and for creation of pact by Contract Test
### ` npm run test:pact`

Pack will be created in pacts folder as a json file
Now you can publish this pact by this command
### ` npm run publish:pact`

Now pact is ready for backend service varification.

