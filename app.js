const express = require('express');
const dotenv = require('dotenv');
const allteraApi = require('./allteraApi');
const sophiaApi = require('./sophiaApi');

const app = express();
app.use(express.json());
dotenv.config();

app.post('/sops', async (req, res) => {
    try {
        const { sop } = req.body;
        const sophiaResponse = await sophiaApi.createSOP(sop);
        const allteraResponse = await sophiaApi.pushSOPToAlltera(sop);
        res.status(200).json({ sophia: sophiaResponse.data, alltera: allteraResponse.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating SOP in SOPHIA and pushing to Alltera' });
    }
});

app.get('/sophia-sops/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await sophiaApi.getSOP(id);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving SOP from Sophia' });
    }
});

app.post('/procedures', async (req, res) => {
    try {
        const {procedureData } = req.body;
        const allteraResponse = await allteraApi.logProcedure(procedureData);
        const sophiaResponse = await sophiaApi.logProcedure(procedureData);
        res.status(200).json({ alltera: allteraResponse.data, sophia: sophiaResponse.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error logging procedure execution data in Alltera and Sophia' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
})