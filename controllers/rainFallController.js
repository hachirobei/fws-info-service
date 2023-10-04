const Rainfall = require('../models/rainfall');

exports.listRainfalls = async (req, res) => {
    try {
        const rainfalls = await Rainfall.find();
        res.status(200).json(rainfalls);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch rainfalls.' });
    }
};

exports.showRainfall = async (req, res) => {
    try {
        const rainfall = await Rainfall.findById(req.params.id);
        if (!rainfall) return res.status(404).json({ message: 'Rainfall not found.' });
        res.status(200).json(rainfall);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch the rainfall.' });
    }
};