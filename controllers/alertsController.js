const Station = require('../models/station');
const WaterLevel = require('../models/waterLevel');
const Rainfall = require('../models/rainfall');

exports.getCriticalWaterLevels = async (req, res) => {
    try {
        const criticalWaterLevels = await WaterLevel.find({ level: { $gte: req.query.threshold || 50 } }); // assuming level is a field in the WaterLevel model
        res.status(200).json(criticalWaterLevels);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch critical water levels.' });
    }
};

exports.getHeavyRainfall = async (req, res) => {
    try {
        const heavyRainfalls = await Rainfall.find({ amount: { $gte: req.query.threshold || 20 } }); // assuming amount is a field in the Rainfall model
        res.status(200).json(heavyRainfalls);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch heavy rainfalls.' });
    }
};

exports.getAlertSummary = async (req, res) => {
    try {
        const criticalWaterLevelsCount = await WaterLevel.countDocuments({ level: { $gte: 50 } });
        const heavyRainfallsCount = await Rainfall.countDocuments({ amount: { $gte: 20 } });
        res.status(200).json({
            criticalWaterLevelsCount,
            heavyRainfallsCount
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch alert summary.' });
    }
};