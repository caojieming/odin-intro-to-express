// load .env file
process.loadEnvFile()

const express = require("express");
// our server
const app = express();

// route received, what the server is GETting -> what the server responds with
app.get("/", (req, res) => res.send("Hello, world!"));

// tell our server to listen for incoming requests on whatever port we specify, via localhost
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
