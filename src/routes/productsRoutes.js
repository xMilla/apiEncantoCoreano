const express = require('express');
const router = express.Router();

const productcontroller = require("../controllers/productsController");

/* GET home page. */
router.get('/', productcontroller.index);

module.exports = router;
