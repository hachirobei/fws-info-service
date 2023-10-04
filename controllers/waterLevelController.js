const WaterLevel = require('../models/waterLevel');

exports.listWaterLevels = async (req, res) => {
    try {
        const waterLevels = await WaterLevel.find();
        res.status(200).json(waterLevels);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch water levels.' });
    }
};

exports.showWaterLevel = async (req, res) => {
    try {
        const waterLevel = await WaterLevel.findById(req.params.id);
        if (!waterLevel) return res.status(404).json({ message: 'Water level not found.' });
        res.status(200).json(waterLevel);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch the water level.' });
    }
};