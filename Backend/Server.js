import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import cors from 'cors';
//app.use(cors());
app.use(cors({
  origin: [process.env.CORS1,process.env.CORS2],
  credentials: true,
}));

// console.log(process.env.CORS1,process.env.CORS2);

import connectDB from './code/middleware/MongoDBCon.js';
connectDB();

import 'dotenv/config';

import route from './code/router/RouterUser.js';
app.use('/',route);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

import errorMiddleware from './code/middleware/ErrMiddleware.js';
app.use(errorMiddleware);