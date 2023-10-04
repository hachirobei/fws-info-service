const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
    station_id: String,
    station_name: String,
    latitude: Number,
    longitude: Number,
    district: String,
    state: String,
    sub_basin: String,
    main_basin: String,
    station_type: String,
    station_code: String,
    station_status: String,
    waterLevels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WaterLevel' }],
    rainfalls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rainfall' }]
});

module.exports = mongoose.model('Station', stationSchema);
