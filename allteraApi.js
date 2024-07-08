const axios = require('axios');

const allteraApi = axios.create({
    baseURL: process.env.ALLTERA_API,
    timeout: 10000,
});

module.exports = {
    logProcedure: (procedureData) => allteraApi.post('/procedures', procedureData),
}; 