const express = require('express');
const router = express.Router();

const productController = require("../controllers/productsController");

/* GET products */
router.get('/', productController.index);
router.get('/:id', productController.show);
router.post('/', productController.store);
router.delete('/:id', productController.destroy);
router.get('/:img', productController.showImg);

module.exports = router;
