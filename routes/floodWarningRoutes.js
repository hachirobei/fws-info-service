const express = require('express');
const validateTokenMiddleware = require('../middlewares/validateTokenMiddleware');
const floodWarningController = require('../controllers/floodWarningController');

const router = express.Router();

router.get('/', validateTokenMiddleware, floodWarningController.getFloodWarning);

module.exports = router;