const express = require('express');
const router = express.Router();

const usercontroller = require("../controllers/usersController");

/* GET home page. */
router.get('/', usercontroller.index);

module.exports = router;
