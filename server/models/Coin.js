const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoinSchema = new Schema({
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    price: { type: Number, required: true },
    canPurchase: { type: Boolean, default: true },
    canSell: { type: Boolean, default: false },
});

module.exports = mongoose.model("Coin", CoinSchema);
