const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema({
    farmer_id:{
        type: Number,
        required: true, 
        unique: true  
    },
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

module.exports = Product = mongoose.model("product", ProductSchema);