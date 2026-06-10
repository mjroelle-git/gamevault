import express from 'express';
import dotenv from 'dotenv';
import gamesRouter from './routes/games';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/games', gamesRouter);

app.get('/', (_req, res) => {
  res.json({
    message: '🎮 GameVault API is running!',
    version: '1.0.0',
    routes: ['/games'],
  });
});

app.listen(PORT, () => {
  console.log(`GameVault server running on http://localhost:${PORT}`);
});