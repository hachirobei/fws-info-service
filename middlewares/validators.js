const { check } = require('express-validator');

exports.infoValidators = [
    check('limit').optional().isInt({ min: 1 }).withMessage('Limit should be a positive integer')
];