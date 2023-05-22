const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeaterSchema = new Schema({
	name:String,
	desired_temp:Number,
    observed_temp:[Number],
    continous:Boolean,
    discrete:Boolean,
    fan:Boolean,
    observed_humidity:[Number]
});

module.exports = Heater = mongoose.model("Heater", HeaterSchema);
