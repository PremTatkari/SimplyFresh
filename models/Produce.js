const mongoose = require("mongoose");

const ProduceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    class:{
        type: String,
        required: true
    }
});

modules.exports = Produce = mongoose.model("produce", ProduceSchema);