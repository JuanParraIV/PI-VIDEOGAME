
require('dotenv').config();

const {
    DB_USER, DB_PASSWORD, DB_HOST,DB_NAME,DB_PORT,YOUR_API_KEY,PORT
} = process.env;
const ENV = {
        host:DB_HOST,
        user:DB_USER,
        password:DB_PASSWORD,
        database:DB_NAME,
        port:DB_PORT,
        api_port:PORT,
        apikey:YOUR_API_KEY,
};

module.exports = {
    ENV
};
