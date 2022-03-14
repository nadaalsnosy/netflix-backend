const axios = require('axios');

const dataJson = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000
})

module.exports = dataJson;