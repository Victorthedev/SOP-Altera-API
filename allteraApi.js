const axios = require('axios');

const allteraApi = axios.create({
    baseURL: process.env.ALLTERA_API_URL,
    timeout: 10000,
});

module.exports = {
    logProcedure: (procedureData) => allteraApi.post('/procedures', procedureData),
}; 