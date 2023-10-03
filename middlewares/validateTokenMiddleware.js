const axios = require('axios');

const validateTokenMiddleware = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    try {
        const response = await axios.post('http://localhost:3001/auth/validate-token', {}, {
            headers: { 'Authorization': token }
        });

        if (response.status !== 200) {
            return res.status(401).json({ message: 'Unauthorized: Invalid Token' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token validation failed' });
    }
};

module.exports = validateTokenMiddleware;