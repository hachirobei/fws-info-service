const Station = require('../models/station');
const WaterLevel = require('../models/waterlevel');
const Rainfall = require('../models/rainfall');

exports.saveFloodData = async (data) => {
    const station = new Station(data.station);
    await station.save();
 
    const waterLevel = new WaterLevel(data.waterLevel);
    await waterLevel.save();

    const rainfall = new Rainfall(data.rainfall);
    await rainfall.save();
};