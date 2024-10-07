require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const authRoutes = require('./sriman/auth.js');
const protectedRoutes = require('./sriman/protected.js');

const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(helmet());
app.use(cors({
  origin: 'https://skillmetric.netlify.app',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);

app.get('/', (req, res) => {
  res.send('SkillMetric Backend is Running');
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(cors({
    origin: ['https://skillmetric.netlify.app', 'http://localhost:3000'], 
    credentials: true,
  }));