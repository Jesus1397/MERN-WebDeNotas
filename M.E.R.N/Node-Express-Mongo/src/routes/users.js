const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router
  .route("/")
  .get(userController.getUsers)
  .post(userController.createUser);
  
router.route("/:id").delete(userController.deleteUser);

module.exports = router;
