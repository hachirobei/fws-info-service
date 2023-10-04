const Station = require('../models/station');

exports.listStations = async (req, res) => {
    try {
        const stations = await Station.find();
        res.status(200).json(stations);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch stations.' });
    }
};

exports.showStation = async (req, res) => {
    try {
        const station = await Station.findById(req.params.id);
        if (!station) return res.status(404).json({ message: 'Station not found.' });
        res.status(200).json(station);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch the station.' });
    }
};