import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname=path.resolve();

// Middlewares
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api/auth', authRoutes); 

// Serve frontend
app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.resolve(__dirname,'frontend', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
