const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BatterySchema = new Schema({
	name:String,
    battery_temp:[Number],
    battery_charge_left:[Object],
    fan:Boolean,
    observed_humidity:[Number]
});

module.exports = Battery = mongoose.model("Battery", BatterySchema);
