const UserRouter = require("express").Router();
const { UserController } = require("../../../Controller");
// api/products
UserRouter.get("/", UserController.userList);

UserRouter.post("/register", UserController.registerUser);
// // api/products/:id
// UserRouter.get("/:id", function (req, res) {
//   res.json({ id: req.params.id });
// });

module.exports.UserRouter = UserRouter;
