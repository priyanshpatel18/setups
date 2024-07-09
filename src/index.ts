import cookieParser from 'cookie-parser';
import 'dotenv/config';
import express, { Request, Response } from 'express';
import connectDB from './db/db';
import { router } from './routes/router';

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/health', (req: Request, res: Response) => {
  return res.json({ message: 'Service Healthy' });
});
app.use('/api/v1', router);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on PORT ${PORT}`);
});
