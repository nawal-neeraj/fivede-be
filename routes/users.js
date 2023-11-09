var express = require("express");
var router = express.Router();
const { addUser } = require("../controller/userController");
const { validateUser } = require("../middleware/validateRequest");

/* GET users listing. */
router.post("/", validateUser, addUser);

module.exports = router;
