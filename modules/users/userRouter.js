const express = require("express");
const userRouter = express.Router();
const {
  getAllUsers,
  editUser,
  getUser,
  deleteUser,
} = require("./userController");
const { validateData, verifyToken, preHash } = require("./middlewares");

userRouter.get("/", getAllUsers);

userRouter.patch("/:id", verifyToken, validateData, preHash, editUser);
userRouter.get("/:id", getUser);
userRouter.delete("/:id", verifyToken, deleteUser);

module.exports = userRouter;
