const Station = require('../models/station');
const WaterLevel = require('../models/waterlevel');
const Rainfall = require('../models/rainfall');

exports.saveFloodData = async (data) => {
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
        water_level_current: data.water_level_current,
        water_level_indicator: data.water_level_indicator,
        water_level_normal_level: data.water_level_normal_level,
        water_level_alert_level: data.water_level_alert_level,
        water_level_warning_level: data.water_level_warning_level,
        water_level_danger_level: data.water_level_danger_level,
        water_level_increment: data.water_level_increment,
        water_level_update_datetime: data.water_level_update_datetime,
        water_level_update_date: data.water_level_update_date,
        water_level_trend: data.water_level_trend,
        water_level_display: data.water_level_display,
        raw_water_level: data.raw_water_level,
        water_level_status: data.water_level_status
    };
    const waterLevel = new WaterLevel(waterLevelData);
    await waterLevel.save();

    const rainfallData = {
        rainfall_clean: data.rainfall_clean,
        rainfall_latest_1hr: data.rainfall_latest_1hr,
        rainfall_total_today: data.rainfall_total_today,
        rainfall_indicator: data.rainfall_indicator,
        rainfall_update_datetime: data.rainfall_update_datetime,
        rainfall_update_date: data.rainfall_update_date,
        rainfall_display: data.rainfall_display,
        raw_rainfall: data.raw_rainfall,
        rainfall_status: data.rainfall_status
    };
    const rainfall = new Rainfall(rainfallData);
    await rainfall.save();
};