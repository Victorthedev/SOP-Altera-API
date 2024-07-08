const axios = require('axios');

const sophiaApi = axios.create({
    baseURL: process.env.SOPHIA_API,
    timeout: 10000,
});

module.exports = {
    createSOP: (sop) => sophiaApi.post('/sops', sop),
    getSOP: (id) => sophiaApi.get(`/sops/${id}`),
    logProcedure: (procedureData) => sophiaApi.post('/procedures', procedureData),
    pushSOPToAlltera: (sop) => axios.post(`${process.env.ALLTERA_API_URL}/sops`, sop),
};