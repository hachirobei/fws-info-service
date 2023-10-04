const axios = require('axios');

const FWS_AUTH_SERVICE_URL = process.env.FWS_AUTH_SERVICE_URL;

exports.authenticate = async (req, res, next) => {
    const token = req.headers['authorization'];
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    try {
        const response = await axios.post(`${FWS_AUTH_SERVICE_URL}/validate-token`, { token });
        
        if (response.status === 200 && response.data.valid) {
            req.user = response.data.user;
            next();
        } else {
            res.status(401).json({ message: 'Token not valid.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Authentication failed.' });
    }
};