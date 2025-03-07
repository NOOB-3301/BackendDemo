import cors from 'cors';
import express from 'express';
import { authRoutes } from '../routes/auth.routes.js';
import { nftRoutes } from '../routes/nft.routes.js'; // New NFT routes

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/', authRoutes);
app.use('/nft', nftRoutes); // Add NFT routes

export { app };