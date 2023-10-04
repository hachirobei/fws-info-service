const Station = require('../models/station');

exports.getAllRelations = async (req, res) => {
    try {
        const stations = await Station.find().populate('waterLevels rainfalls');
        res.json({
            stations: stations
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
};