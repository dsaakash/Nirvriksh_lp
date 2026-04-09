// Netlify serverless function for admin login
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-nirvriksh-key';

exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    try {
        const { email, password } = JSON.parse(event.body);

        // Check credentials (use environment variables in production)
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@nirvriksh.com';
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Aakash@9353';

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '2h' });
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ token }),
            };
        }

        return {
            statusCode: 401,
            headers,
            body: JSON.stringify({ error: 'Invalid credentials' }),
        };

    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
