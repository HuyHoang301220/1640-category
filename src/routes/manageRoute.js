const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// meController

router.get('/manage/categories', meController.manageCategories);


module.exports = router;