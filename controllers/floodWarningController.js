const axios = require('axios');
const { validationResult } = require('express-validator');
const Station = require('../models/station');
const WaterLevel = require('../models/waterLevel');
const Rainfall = require('../models/rainfall');

const FLOOD_API_URL = 'http://api.data.gov.my/flood-warning';

exports.getFloodWarningData = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const response = await axios.get(FLOOD_API_URL, { params: req.query });
        const data = response.data;

        // Extracting and saving station details
        const stationData = {
            station_id: data.station_id,
            station_name: data.station_name,
            latitude: data.latitude,
            longitude: data.longitude,
            district: data.district,
            state: data.state,
            sub_basin: data.sub_basin,
            main_basin: data.main_basin,
            station_type: data.station_type,
            station_code: data.station_code,
            station_status: data.station_status
        };
        const station = new Station(stationData);
        await station.save();

        // Extracting and saving water level details
        const waterLevelData = {
            station: station._id,
            current_level: data.water_level_current,
            indicator: data.water_level_indicator,
            normal_level: data.water_level_normal_level,
            alert_level: data.water_level_alert_level,
            warning_level: data.water_level_warning_level,
            danger_level: data.water_level_danger_level,
            increment: data.water_level_increment,
            update_datetime: data.water_level_update_datetime,
            trend: data.water_level_trend,
            display: data.water_level_display,
            raw_level: data.raw_water_level,
            status: data.water_level_status
        };
        const waterLevel = new WaterLevel(waterLevelData);
        await waterLevel.save();

        // Extracting and saving rainfall details
        const rainfallData = {
            station: station._id,
            clean: data.rainfall_clean,
            latest_1hr: data.rainfall_latest_1hr,
            total_today: data.rainfall_total_today,
            indicator: data.rainfall_indicator,
            update_datetime: data.rainfall_update_datetime,
            display: data.rainfall_display,
            raw_rainfall: data.raw_rainfall,
            status: data.rainfall_status
        };
        const rainfall = new Rainfall(rainfallData);
        await rainfall.save();

        res.json({ message: 'Flood warning data saved successfully.' });

    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json(error.response.data);
        } else if (error.request) {
            return res.status(500).json({ message: 'No response from Flood Warning API.' });
        } else {
            return res.status(500).json({ message: 'Failed to fetch flood warning data.' });
        }
    }
};
