import express from 'express';
import mongoose from 'mongoose';

import { } from './src/controllers/routes';

const app = express();
const PORT = 3800;

app.use(express.json());

mongoose.connect()