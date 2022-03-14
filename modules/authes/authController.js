const bcrypt = require("bcrypt");
const util = require("util");
const jwt = require("jsonwebtoken");
const User = require("../users/userModel");

const asyncSign = util.promisify(jwt.sign);

const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("invalid email or password");

    const result = await bcrypt.compare(password, user.password);
    if (!result) throw new Error("invalid email or password");

    const token = await asyncSign(
      {
        id: user._id.toString(),
        admin: user.admin.toString(),
      },
      process.env.SECRET_KEY
    );

    res.send({ user, token });
  } catch (error) {
    next(error);
  }
};

const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const existedUser = await User.findOne({ email });
    if (existedUser) return res.status(400).json({ msg: "User exists" });

    const user = new User({ username, email, password});
    const createdUser = await user.save();

    const token = await asyncSign(
      {
        id: user._id.toString(),
      },
      process.env.SECRET_KEY
    );

    res.send({ user: createdUser, token });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};


module.exports = { signIn, signUp };
