const sophiaApi = require('../utils/sophiaApi');

const createSOP = async (req, res) => {
    try {
        const { sop } = req.body;
        const sophiaResponse = await sophiaApi.createSOP(sop);
        const alteraResponse = await sophiaApi.pushSOPToAltera(sop);
        res.status(200).json({ sophia: sophiaResponse.data, altera: alteraResponse.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating SOP in SOPHIA and pushing to Alltera' });
    }
};

const getSOP = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await sophiaApi.getSOP(id);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving SOP from Sophia' });
    }
};

const logProcedure = async (req, res) => {
    try {
        const { procedureData } = req.body;
        const sophiaResponse = await sophiaApi.logProcedure(procedureData);
        res.status(200).json({ sophia: sophiaResponse.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error logging procedure execution data in Sophia' });
    }
};

module.exports = {
    createSOP,
    getSOP,
    logProcedure,
};
