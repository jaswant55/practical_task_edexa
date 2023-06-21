require('dotenv').config();
const config = {
    PORT: process.env.PORT || 8000,
    MONGODB_URL: process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/test",
}
module.exports = config;