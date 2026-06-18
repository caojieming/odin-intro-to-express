// load .env file
process.loadEnvFile()

const express = require("express");
// our server
const app = express();


// received a GET request with input "/" -> respond with "Hello, world!"
app.get("/", (req, res) => res.send("Hello, world!"));

// received a POST request with input "/messages" -> respond with "This is where you can see any messages."
app.post("/messages", (req, res) => res.send("This is where you can see any messages."));



// tell our server to listen for incoming requests on whatever port we specify, via localhost
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`listening on port ${PORT}`);
});
