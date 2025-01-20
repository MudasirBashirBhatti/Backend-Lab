import dotenv from 'dotenv'
import express from 'express'
import { dbConnect } from './config/db.js';
dotenv.config()

const app = express();
const port = process.env.PORT

dbConnect()

app.listen(port, () => {
    console.log(`server is listening to port: ${port}`);
})

app.get('/', (req, res) => {
    res.send(`app is running on port:${port}`)
})