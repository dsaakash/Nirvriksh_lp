// Netlify serverless function for handling leads
const { createClient } = require('@libsql/client');

// Initialize Turso client (serverless SQLite)
const getClient = () => {
    return createClient({
        url: process.env.TURSO_DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN,
    });
};

exports.handler = async (event, context) => {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    };

    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    const client = getClient();

    try {
        // GET - Retrieve leads (admin only)
        if (event.httpMethod === 'GET') {
            const authHeader = event.headers.authorization;

            // Simple auth check (you should use JWT in production)
            if (!authHeader || !authHeader.includes('Bearer')) {
                return {
                    statusCode: 401,
                    headers,
                    body: JSON.stringify({ error: 'Unauthorized' }),
                };
            }

            const result = await client.execute('SELECT * FROM leads ORDER BY createdAt DESC');

            const leads = result.rows.map(row => ({
                ...row,
                problems: row.problems ? JSON.parse(row.problems) : []
            }));

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify(leads),
            };
        }

        // POST - Create new lead
        if (event.httpMethod === 'POST') {
            const { name, email, mobile, storeName, problems, stage } = JSON.parse(event.body);

            if (!mobile) {
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ error: 'Mobile number is required' }),
                };
            }

            const result = await client.execute({
                sql: 'INSERT INTO leads (name, email, mobile, storeName, problems, stage) VALUES (?, ?, ?, ?, ?, ?)',
                args: [name || null, email || null, mobile, storeName, JSON.stringify(problems || []), stage]
            });

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: true, leadId: result.lastInsertRowid }),
            };
        }

        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
