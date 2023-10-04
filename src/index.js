const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const floodDataRoutes = require('../routes/floodDataRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mangodb-flood'; 

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log('Connected to MongoDB successfully!');
})
.catch(err => {
    console.error('Failed to connect to MongoDB:', err.message);
});

app.use(cors());
app.use('/api/data', floodDataRoutes);

app.listen(PORT, () => {
    console.log(`fws-info-service running on port ${PORT}`);
});