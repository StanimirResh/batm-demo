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
            let priceInEUR;

            if (coinSymbol === "USDT") {
                // Special case for USDT
                const response = await axios.get(
                    "https://api.binance.com/api/v3/ticker/price?symbol=EURUSDT"
                );
                const priceInUSD = parseFloat(response.data.price);
                priceInEUR = (1 / priceInUSD).toFixed(3); // Convert the price to EUR
            } else {
                // General case for other coins
                const response = await axios.get(
                    `https://api.binance.com/api/v3/ticker/price?symbol=${coinSymbol}USDT`
                );
                const priceInUSD = parseFloat(response.data.price);
                priceInEUR = (priceInUSD * conversionRate).toFixed(2);
            }

            await Coin.findOneAndUpdate(
                { symbol: coinSymbol },
                { price: priceInEUR },
                { new: true, upsert: true }
            );

            console.log(
                `Updated ${coinSymbol} to ${priceInEUR} EUR`
            );
        }

        console.log("Prices updated successfully");
    } catch (err) {
        console.error("Error fetching prices:", err.message);
    }
};

module.exports = fetchLatestPrices;
