const express = require('express');
const router = express.Router();

const categoryController = require('../app/controllers/CategoryController')

router.get('/create', categoryController.create);
router.post('/manage', categoryController.manage);
router.get('/:id/edit', categoryController.edit);
router.put('/:id', categoryController.update);
router.get('/', categoryController.index)

module.exports = router;