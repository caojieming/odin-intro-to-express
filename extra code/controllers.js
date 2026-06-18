// this file mostly contains example code, and is not intended to be run

const express = require("express");
// our server
const app = express();


// res.send, json, redirect, render are all response enders: they cannot be called twice
app.use((req, res) => {
  // This works and this ends the request-response cycle
  res.send("Hello");

  // However, it does not exit the function so this will still run
  console.log('will still run!!');

  // This will then throw an error that we cannot send again after sending to the client already
  res.send("Bye");
});


// Middleware functions operate between the incoming request and the final intended route handler
function myMiddleware(req, res, next) {
  // Perform some operations
  console.log("Middleware function called");

  // Modify the request object
  req.customProperty = "Hello from myMiddleware";

  // Call the next middleware/route handler
  next();
}
app.use(myMiddleware);