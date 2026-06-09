import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: '🎮 GameVault API is running!',
        version: '1.0.0',
    });
});

app.listen(PORT, () => {
    console.log('GameVault server running on http://localhost:${PORT}');
});