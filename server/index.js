const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const db = require('./db');

const app = express();
const PORT = 3001;
const JWT_SECRET = 'super-secret-nirvriksh-key'; // For simplicity

app.use(cors());
app.use(bodyParser.json());

// API health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Capture a new lead from RCA Game
app.post('/api/leads', (req, res) => {
  const { mobile, storeName, problems, stage } = req.body;
  if (!mobile) {
    return res.status(400).json({ error: 'Mobile number is required' });
  }

  const query = `INSERT INTO leads (mobile, storeName, problems, stage) VALUES (?, ?, ?, ?)`;
  db.run(query, [mobile, storeName, JSON.stringify(problems || []), stage], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true, leadId: this.lastID });
  });
});

// Admin Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  if (email === 'admin@nirvriksh.com' && password === 'Aakash@9353') {
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }
  
  return res.status(401).json({ error: 'Invalid credentials' });
});

// Middleware to verify Admin Token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Admin retrieve leads
app.get('/api/leads', authenticateToken, (req, res) => {
  const query = `SELECT * FROM leads ORDER BY createdAt DESC`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    // Parse json back to array for problems
    const leads = rows.map(r => ({
      ...r,
      problems: r.problems ? JSON.parse(r.problems) : []
    }));
    
    res.json(leads);
  });
});

app.listen(PORT, () => {
  console.log(`Backend Server running on http://localhost:${PORT}`);
});
