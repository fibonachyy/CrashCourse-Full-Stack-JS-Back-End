const routerV1 = require("express").Router();
const { UserRouter } = require("./UserRouter/UserRouter");

// split up route handling
routerV1.use("/user", UserRouter);

// etc.

module.exports.routerV1 = routerV1;
