const axios = require("axios");
const Coin = require("../models/Coin");

const fetchLatestPrices = async () => {
    try {
        // Replace this URL with a real API endpoint that provides cryptocurrency prices
        const response = await axios.get(
            "https://api.example.com/cryptoprices"
        );
        const coins = response.data;

        // Update each coin in the database
        for (const coinData of coins) {
            const { name, symbol, price } = coinData;
            await Coin.findOneAndUpdate(
                { symbol },
                { name, price },
                { new: true, upsert: true }
            );
        }

        console.log("Prices updated successfully");
    } catch (err) {
        console.error("Error fetching prices:", err.message);
    }
};

module.exports = fetchLatestPrices;
