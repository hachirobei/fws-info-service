const express = require('express');
const router = express.Router();
const floodDataController = require('../controllers/floodDataController');

router.post('/update-flood-data', async (req, res) => {
    try {
        await floodDataController.saveFloodData(req.body);
        res.json({ message: 'Data updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update data', error: error.message });
    }
});

module.exports = router;