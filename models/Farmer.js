const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    mobile_number:{
        type: String,
        required: true
    },
    farm_name:{
        type: String,
        required: true
    },
    farm_address:{
        type: String,
        required: true
    }
});

module.exports = Farmer = mongoose.model("farmer", FarmerSchema);