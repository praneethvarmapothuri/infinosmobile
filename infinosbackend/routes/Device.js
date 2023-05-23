var express = require("express");
var router = express.Router();


const Device = require("../models/Device");
const Battery = require("../models/Battery") ;
const Heater = require("../models/Heater") ;
const Cooler = require("../models/Cooler") ;

router.get("/", function(req, res) {
    Device.find(function(err, data) {
		if (err) {
			console.log(err);
		} else {
			res.json(data);
		}
	})
});

router.post("/add_device", (req, res) => {
    const newDevice = new Device({
        name: req.body.name,
		status: req.body.status,
		heating: req.body.heating,
		cooling: req.body.cooling,
		battery: req.body.battery,
		safety_low_temp: req.body.safety_low_temp,
		safety_high_temp:req.body.safety_high_temp,
		bag_temp:req.body.bag_temp
    });
    console.log(newDevice) ;
    newDevice.save()
        .then(device => {
            res.status(200).json(device);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/add_heater",(req,res)=>{
	const newHeater = new Heater({
		name:req.body.name,
		desired_temp:req.body.desired_temp,
		observed_temp:req.body.observed_temp,
		continous:req.body.continous,
		discrete:req.body.discrete,
		fan:req.body.fan,
		observed_humidity:req.body.observed_humidity,
	})

    console.log(newHeater) ;
    newHeater.save()
        .then(heater => {
            res.status(200).json(heater);
        })
        .catch(err => {
            res.status(400).send(err);
        });	
})

router.post("/add_cooler",(req,res)=>{
	const newCooler = new Cooler({
		name:req.body.name,
		desired_temp:req.body.desired_temp,
		observed_temp:req.body.observed_temp,
		continous:req.body.continous,
		discrete:req.body.discrete,
		fan:req.body.fan,
		observed_humidity:req.body.observed_humidity,
	})

    console.log(newCooler) ;
    newCooler.save()
        .then(cooler => {
            res.status(200).json(cooler);
        })
        .catch(err => {
            res.status(400).send(err);
        });	
})

router.post("/add_battery",(req,res)=>{
	const newBattery = new Battery({
		name:req.body.name,
		battery_temp:req.body.battery_temp,
		fan:req.body.fan,
		battery_charge_left:req.body.battery_charge_left,
		observed_humidity:req.body.observed_humidity,
	})

    console.log(newBattery) ;
    newBattery.save()
        .then(battery => {
            res.status(200).json(battery);
        })
        .catch(err => {
            res.status(400).send(err);
        });	
})

router.post("/ass_heater",(req,res)=>{
	const heater_id=req.body.heater_id
	const device_id=req.body.device_id
    Device.updateOne({"_id":device_id},{$push:{heating:heater_id}})
        .then(heater => {
            res.status(200).json(heater);
        })
        .catch(err => {
            res.status(400).send(err);
        });	
})

router.post("/ass_cooler",(req,res)=>{
	const cooler_id=req.body.cooler_id
	const device_id=req.body.device_id
    Device.updateOne({"_id":device_id},{$push:{cooling:cooler_id}})
        .then(heater => {
            res.status(200).json(heater);
        })
        .catch(err => {
            res.status(400).send(err);
        });	
})

router.post("/ass_battery",(req,res)=>{
	const battery_id=req.body.battery_id
	const device_id=req.body.device_id
    Device.updateOne({"_id":device_id},{$push:{battery:battery_id}})
        .then(heater => {
            res.status(200).json(heater);
        })
        .catch(err => {
            res.status(400).send(err);
        });	
})

router.post("/update_heater",(req,res)=>{
	const heater_id=req.body.heater_id
	const desired_temp=req.body.desired_temp
	const cont = req.body.cont ;
	const disc=req.body.disc ;
	const fan = req.body.fan ;
	Heater.updateOne({"_id":heater_id},{$set:{desired_temp:desired_temp,continous:cont,discrete:disc,fan:fan}}).then(heater=>{
		res.status(200).json(heater);
	}).catch(err => {
		res.status(400).send(err);
	});	

})

router.post("/update_heater_temp",(req,res)=>{
	const heater_id=req.body.heater_id
	const obs_temp=req.body.obs_temp ;
	Heater.updateOne({"_id":heater_id},{$push:{observed_temp:obs_temp}}).then(heater=>{
		res.status(200).json(heater);
	}).catch(err => {
		res.status(400).send(err);
	});	
})

router.post("/update_heater_humidity",(req,res)=>{
	const heater_id=req.body.heater_id
	const obs_humidity=req.body.obs_humidity ;
	Heater.updateOne({"_id":heater_id},{$push:{observed_humidity:obs_humidity}}).then(heater=>{
		res.status(200).json(heater);
	}).catch(err => {
		res.status(400).send(err);
	});	
})

router.post("/update_cooler_temp",(req,res)=>{
	const heater_id=req.body.cooler_id
	const obs_temp=req.body.obs_temp ;
	Cooler.updateOne({"_id":heater_id},{$push:{observed_temp:obs_temp}}).then(heater=>{
		res.status(200).json(heater);
	}).catch(err => {
		res.status(400).send(err);
	});	
})

router.post("/update_cooler_humidity",(req,res)=>{
	const heater_id=req.body.cooler_id
	const obs_humidity=req.body.obs_humidity ;
	Cooler.updateOne({"_id":heater_id},{$push:{observed_humidity:obs_humidity}}).then(heater=>{
		res.status(200).json(heater);
	}).catch(err => {
		res.status(400).send(err);
	});	
})


router.post("/update_device",(req,res)=>{
	const device_id=req.body.device_id
	const status = req.body.status ;

	Device.updateOne({"_id":device_id},{$set:{status:status}}).then(device=>{
		res.status(200).json(device);
	}).catch(err => {
		res.status(400).send(err);
	});
})

router.post("/update_cooler",(req,res)=>{
	const cooler_id=req.body.cooler_id
	const desired_temp=req.body.desired_temp
	const cont = req.body.cont ;
	const disc=req.body.disc ;
	const fan = req.body.fan ;

	Cooler.updateOne({"_id":cooler_id},{$set:{desired_temp:desired_temp,continous:cont,discrete:disc,fan:fan}}).then(heater=>{
		res.status(200).json(heater);
	}).catch(err => {
		res.status(400).send(err);
	});	

})

router.post("/update_battery",(req,res) =>{
	const battery_id=req.body.battery_id
	const fan=req.body.fan ;
	Battery.updateOne({"_id":battery_id},{$set:{fan:fan}}).then(heater=>{
		res.status(200).json(heater);
	}).catch(err => {
		res.status(400).send(err);
	});		
})


router.get("/get_device",(req,res)=>{
	const id=req.query.device_id ;
	Device.findById(id,function(err,data){
		if (err) {
			console.log(err);
		} else {
			console.log(data) ;
			res.json(data);
		}		
	})
})

router.get("/get_heaters",(req,res)=>{
	const ids = req.query.heater_ids ;
	Heater.find({_id : { $in: ids }}).then(data=>{
		res.status(200).json(data);
	}).catch(err=>{
		res.status(400).send(err) ;
	})
})


router.get("/get_coolers",(req,res)=>{
	const ids = req.query.cooler_ids ;
	Cooler.find({_id : { $in: ids }}).then(data=>{
		res.status(200).json(data);
	}).catch(err=>{
		res.status(400).send(err) ;
	})
})


router.get("/get_batteries",(req,res)=>{
	const ids = req.query.battery_ids ;
	Battery.find({_id : { $in: ids }}).then(data=>{
		res.status(200).json(data);
	}).catch(err=>{
		res.status(400).send(err) ;
	})
})







module.exports = router ;

