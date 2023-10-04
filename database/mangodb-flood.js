const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mangodb-flood'; 

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mangodb-flood');
});

mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to mangodb-flood', err);
});