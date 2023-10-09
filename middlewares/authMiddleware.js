const axios = require('axios');

const FWS_AUTH_SERVICE_URL = process.env.FWS_AUTH_SERVICE_URL;

exports.authenticate = async (req, res, next) => {
    const token = req.headers['authorization'];
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    try {
        const response = await axios.post(`${FWS_AUTH_SERVICE_URL}/validate-token`, null, {
            headers: {
                'Authorization': `${token}`
            }
        });
        
        console.log('Response from API:', response.data);

        if (response.status === 200 && response.data.valid) {
            req.user = response.data.user;
            next();
        } else {
            res.status(401).json({ message: 'Token not valid.' });
        }
    } catch (error) {
        // Log the error
        console.error('Error from API:', error);

        if (error.response) {
            console.error('API Response Data:', error.response.data);
            console.error('API Response Status:', error.response.status);
            console.error('API Response Headers:', error.response.headers);
        }

        res.status(500).json({ message: 'Authentication failed.' });
    }
};