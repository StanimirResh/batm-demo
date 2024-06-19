// server/cron/schedule.js
const cron = require("node-cron");
const fetchLatestPrices = require("../services/priceUpdater");

const scheduleTasks = () => {
    // Schedule the task to run every minute
    cron.schedule("* * * * *", fetchLatestPrices);
};

module.exports = scheduleTasks;
