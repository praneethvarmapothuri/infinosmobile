const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoolerSchema = new Schema({
	name:String,
	desired_temp:Number,
    observed_temp:[Object],
    continous:Boolean,
    discrete:Boolean,
    fan:Boolean,
    observed_humidity:[Object]
});

module.exports = Cooler = mongoose.model("Cooler", CoolerSchema);
