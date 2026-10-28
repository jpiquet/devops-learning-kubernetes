require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { Pool } = require('pg');
//Modif for CI 2
const app = express();
app.use(cors());
app.use(morgan('tiny'));

// Sans DATABASE_URL : compteur en mémoire (lundi). Avec : PostgreSQL (mardi).
const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;
let memoryCount = 0;

app.get('/', (req, res) => res.send('Hello depuis mon app Docker !'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/visits', async (req, res) => {
  try {
    if (!pool) {
      memoryCount++;
      return res.json({ visits: memoryCount, storage: 'memory' });
    }
    await pool.query('CREATE TABLE IF NOT EXISTS visits (id SERIAL PRIMARY KEY, at TIMESTAMP DEFAULT NOW())');
    await pool.query('INSERT INTO visits DEFAULT VALUES');
    const r = await pool.query('SELECT COUNT(*) FROM visits');
    res.json({ visits: Number(r.rows[0].count), storage: 'postgres' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur sur le port ${port}`));
