const User = require("./userModel");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.send(user);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    const users = await User.find();

    res.send(users);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

const editUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  const { id } = req.params;
  const user = req.user;

  try {
    if (user.id === id || user.admin) {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { username, email, password },
        { new: true }
      );
      res.send(updatedUser);
    } else {
      res.send("You can only update your account");
    }
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

module.exports = {
  getAllUsers,
  editUser,
  getUser,
  deleteUser,
};
