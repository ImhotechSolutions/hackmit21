import express from 'express';
import cors from 'cors';
import procedure from './api/procedure.route.js';

const app = express();

app.use(cors());
app.use(express.json());

// create a GET route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// API route
app.use('/api/v1/procedures', procedure);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

export default app;
