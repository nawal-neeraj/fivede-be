var express = require("express");
var router = express.Router();
const { addMoment } = require("../controller/momentController");
const { validateMoment } = require("../middleware/validateRequest");

/* GET users listing. */
router.post("/moment", validateMoment, addMoment);

module.exports = router;
