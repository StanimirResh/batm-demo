const axios = require("axios");
const Coin = require("../models/Coin");

const fetchLatestPrices = async () => {
    try {
        // Fetch all coins of interest from the database
        const coinsInDatabase = await Coin.find({});
        const coinsOfInterest = coinsInDatabase.map((coin) => coin.symbol);

        // Fetch the conversion rate from USD to EUR
        const conversionResponse = await axios.get(
            "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const conversionRate = conversionResponse.data.rates.EUR;

        for (const coinSymbol of coinsOfInterest) {
            // Fetch the latest price for the coin from Binance
            const response = await axios.get(
                `https://api.binance.com/api/v3/ticker/price?symbol=${coinSymbol}USDT`
            );
            const priceInUSD = parseFloat(response.data.price);
            const priceInEUR = (priceInUSD * conversionRate).toFixed(2);

            // Update the database with the latest price
            await Coin.findOneAndUpdate(
                { symbol: coinSymbol },
                { price: priceInEUR },
                { new: true, upsert: true }
            );

            console.log(`Updated ${coinSymbol} to ${priceInEUR} EUR`);
        }

        console.log("Prices updated successfully");
    } catch (err) {
        console.error("Error fetching prices:", err.message);
    }
};

module.exports = fetchLatestPrices;
