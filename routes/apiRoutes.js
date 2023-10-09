const express = require('express');
const router = express.Router();
const floodDataController = require('../controllers/floodDataController');
const stationController = require('../controllers/stationController');
const waterLevelController = require('../controllers/waterLevelController');
const rainfallController = require('../controllers/rainFallController');
const relationController = require('../controllers/relationsController')
const authMiddleware = require('../middlewares/authMiddleware');
const alertsController = require('../controllers/alertsController');



router.post('/update-flood-data', async (req, res) => {
    try {
        await floodDataController.saveFloodData(req.body);
        res.json({ message: 'Data updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update data', error: error.message });
    }
});

router.get('/stations', authMiddleware.authenticate, stationController.listStations);
router.get('/stations/:id', authMiddleware.authenticate, stationController.showStation);

router.get('/waterlevels', authMiddleware.authenticate, waterLevelController.listWaterLevels);
router.get('/waterlevels/:id', authMiddleware.authenticate, waterLevelController.showWaterLevel);

router.get('/rainfalls', authMiddleware.authenticate, rainfallController.listRainfalls);
router.get('/rainfalls/:id', authMiddleware.authenticate, rainfallController.showRainfall);

router.get('/all-relations', authMiddleware.authenticate, relationController.getAllRelations);

router.get('/alerts/waterlevels',authMiddleware.authenticate, alertsController.getCriticalWaterLevels);
router.get('/alerts/rainfalls', authMiddleware.authenticate, alertsController.getHeavyRainfall);
router.get('/alerts/summary', authMiddleware.authenticate, alertsController.getAlertSummary);

module.exports = router;