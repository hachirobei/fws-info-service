const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const floodDataRoutes = require('../routes/floodDataRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

require('../database/mangodb-flood');

app.use(cors());
app.use('/api/data', floodDataRoutes);

app.listen(PORT, () => {
    console.log(`fws-info-service running on port ${PORT}`);
});