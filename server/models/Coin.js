const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoinSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    symbol: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Coin", CoinSchema);
