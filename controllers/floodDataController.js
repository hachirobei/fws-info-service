const Station = require('../models/station');
const WaterLevel = require('../models/waterlevel');
const Rainfall = require('../models/rainfall');

exports.saveSingleFloodData = async (data) => {
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
        station_status: data.station_status,
        station_code: data.station_code
    };
    const station = new Station(stationData);
    await station.save();

    const waterLevelData = {
        station: station._id,
        current: data.water_level_current,
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

    station.waterLevels.push(waterLevel._id);
    station.rainfalls.push(rainfall._id);
    await station.save();
};

exports.saveFloodData = async (dataArray) => {
    for (const data of dataArray) {
        await exports.saveSingleFloodData(data); // Reference it using exports.
    }
};