const api = require("express").Router();
const { routerV1 } = require("./v1");
// split up route handling
api.use("/v1", routerV1);
api.get("/v2", (req, res) => {
  res.send("this is v2 router!");
});
// etc.

module.exports.api = api;
