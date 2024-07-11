const express = require('express');
const dotenv = require('dotenv');
const sopRoutes = require('./routes/sopRoutes');

const app = express();
app.use(express.json());
dotenv.config();

app.use('/sophia', sopRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});
