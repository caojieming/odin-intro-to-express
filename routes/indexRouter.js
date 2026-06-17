const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("All indices"));
indexRouter.get("/:indexId", (req, res) => {
  const { indexId } = req.params;
  res.send(`Author ID: ${indexId}`);
});

module.exports = indexRouter;
