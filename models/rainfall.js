const mongoose = require('mongoose');

const rainfallSchema = new mongoose.Schema({
    station: { type: mongoose.Schema.Types.ObjectId, ref: 'Station' },
    clean: Number,
    latest_1hr: Number,
    total_today: Number,
    indicator: String,
    update_datetime: Date,
    display: String,
    raw_rainfall: Number,
    status: String
});

module.exports = mongoose.model('Rainfall', rainfallSchema);