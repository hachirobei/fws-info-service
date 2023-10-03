const express = require('express');
const cors = require('cors');
const floodWarningRoutes = require('../routes/floodWarningRoutes');
require('dotenv').config();
const app = express();
const PORT = 3002;

app.use(cors());
app.use(floodWarningRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/floodwarning`);
});