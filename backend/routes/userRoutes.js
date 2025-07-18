const express = require("express");
const {
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.use(protect);
router.use(authorize("admin"));

router.route("/").get(getUsers);

router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
