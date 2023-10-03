const mongoose = require('mongoose');

const waterLevelSchema = new mongoose.Schema({
    station: { type: mongoose.Schema.Types.ObjectId, ref: 'Station' },
    current: Number,
    indicator: String,
    normal_level: Number,
    alert_level: Number,
    warning_level: Number,
    danger_level: Number,
    increment: Number,
    update_datetime: Date,
    trend: String,
    display: String,
    raw_level: Number,
    status: String
});

module.exports = mongoose.model('WaterLevel', waterLevelSchema);