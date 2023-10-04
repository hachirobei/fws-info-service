const express = require('express');
const router = express.Router();
const floodDataController = require('../controllers/floodDataController');
const stationController = require('../controllers/stationController');
const waterLevelController = require('../controllers/waterLevelController');
const rainfallController = require('../controllers/rainFallController');

router.post('/update-flood-data', async (req, res) => {
    try {
        await floodDataController.saveFloodData(req.body);
        res.json({ message: 'Data updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update data', error: error.message });
    }
});

router.get('/stations', stationController.listStations);
router.get('/stations/:id', stationController.showStation);

router.get('/waterlevels', waterLevelController.listWaterLevels);
router.get('/waterlevels/:id', waterLevelController.showWaterLevel);

router.get('/rainfalls', rainfallController.listRainfalls);
router.get('/rainfalls/:id', rainfallController.showRainfall);

module.exports = router;