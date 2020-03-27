const express = require('express');
const router = express.Router();

const userController = require("../controllers/usersController");

/* GET home page. */
router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.store);
router.delete('/:id', userController.destroy);

module.exports = router;
