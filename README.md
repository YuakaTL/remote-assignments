# AppWorks Campus Program remote-assignments 
## Description
AppWorks Campus Program remote-assignments

## Environment requirements
Before you can use this application, make sure that you have the following requirements installed:
- Node.js (version 16 or higher)
- Express (version 4 or higher)

## How to use
After making sure that your development environment meets the requirements, follow these steps to start the application:

1. Clone this repository.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install all required dependencies:
```bash=
npm install
```
4. Configure the database by copying the `.env.example` file to `.env` and updating the values to match your database configuration.
5. Run the following command to start the application:
```bash=
npm start
```
6. In your browser, enter the following URL to use the application:
```bash=
http://localhost:3000
```
## Features and Routes
This Express application has the following features and routes:

- `GET /`: Returns a JSON response with the server status and the current date and time in UTC format.
- `GET /healthcheck`: Returns a JSON response with the server status.
- `GET /users?id=`: Returns a JSON response with the user information based on the id query parameter. Uses the getUser method from the UserController.
- `POST /users`: Creates a new user with the provided information in the request body. Uses the newUser method from the UserController.

The UserController contains the following methods:
- `getUser`: Retrieves a user from the database based on the id query parameter and returns a JSON response with the user information and the current date and time in UTC format.
- `newUser`: Validates and creates a new user with the provided information in the request body. Returns a JSON response with the new user information and the current date and time in UTC format.