const User = require("../models/User");

const userController = {};

userController.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userController.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  await newUser.save();
  res.send("User Created");
};

userController.deleteUser = async (req, res) => {
  await User.findOneAndDelete(req.params.id);
  res.send("User Deleted");
};

module.exports = userController;
