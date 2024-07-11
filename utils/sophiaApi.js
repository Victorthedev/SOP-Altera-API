const axios = require('axios');

const sophiaApi = axios.create({
    baseURL: process.env.SOPHIA_API_URL,
    timeout: 10000,
});

module.exports = {
    createSOP: (sop) => sophiaApi.post('/sops', sop),
    getSOP: (id) => sophiaApi.get(`/sops/${id}`),
    logProcedure: (procedureData) => sophiaApi.post('/procedures', procedureData),
    pushSOPToAltera: (sop) => axios.post(`${process.env.ALTERA_API_URL}/sops`, sop),
};
