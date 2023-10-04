const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://user:password@mongodb-flood:27017/fws-info'; 

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