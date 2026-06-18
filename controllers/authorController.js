/*
  Let’s break down what’s happening in this controller:

  The route path contains a route parameter (/authors/:authorId). The controller extracts the authorId from req.params.

  It then invokes a database query function getAuthorById to retrieve the author data based on the authorId.

  If the controller doesn’t find the author, it sends a response with a 404 status code and the message "Author not found", using res.status(404).send(...). It then returns from the controller function to avoid invoking any other logic in the controller, as sending a response doesn’t automatically stop the function execution.

  If the controller finds the author, it sends a response with a 200 status code with the text showing the author name using res.send(...).

*/

const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getAuthorById = async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author Name: ${author.name}`);
};
module.exports = { getAuthorById };
