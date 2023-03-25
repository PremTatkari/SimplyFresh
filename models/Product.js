const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    }
});

module.exports = Product = mongoose.model("product", ProductSchema);