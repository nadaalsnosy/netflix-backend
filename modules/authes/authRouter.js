const express = require("express");
const authRouter = express.Router();
const { signIn, signUp } = require("./authController");
const { preHash } = require("../users/middlewares");

authRouter.post("/signIn", preHash, signIn);
authRouter.post("/signUp", preHash, signUp);

module.exports = authRouter;
