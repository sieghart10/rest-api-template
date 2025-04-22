import { createServer } from 'node:http';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config()

const PORT = parseInt(process.env.PORT);
// const IS_PRODUCTION = process.env.ENV === 'production';

const allowedOrigins = {
    origin: ['*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Content-Type', 
        'Authorization', 
        'X-Requested-With',
        'X-Forwarded-For',
        'X-Real-IP'
      ],
      credentials: true,
      optionsSuccessStatus: 200
};

async function createCustomServer() {
    const app = express();
    app.use(cors(allowedOrigins));
    app.use(express.json());
    app.use(morgan('dev'));

    app.get('/', (req, res) => {
        res.status(200).json({
            message: `API is working!`
        })
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });

}

createCustomServer();