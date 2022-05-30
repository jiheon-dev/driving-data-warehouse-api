require('dotenv').config();

const env = {
    MONGODB_URL: process.env.MONGODB_URL,
    NODE_ENV: process.env.NODE_ENV
}

module.exports = { env }