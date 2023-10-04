const express = require('express');
const cors = require('cors');

const floodDataRoutes = require('../routes/apiRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

require('../database/mangodb-flood');

app.use(cors());
app.use('/api', floodDataRoutes);

app.listen(PORT, () => {
    console.log(`fws-info-service running on port ${PORT}`);
});