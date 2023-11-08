var express = require("express");
var router = express.Router();
const { addMoment } = require("../controller/momentController");

/* GET users listing. */
router.post("/moment", addMoment);

module.exports = router;
