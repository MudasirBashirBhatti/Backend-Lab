import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { dbConnect } from './src/config/db.js';
import { corsOptions } from './src/config/corsOptions.js';
dotenv.config()

const app = express();
const port = process.env.PORT
app.use(cors(corsOptions))

dbConnect()

app.listen(port, () => {
    console.log(`server is listening to port: ${port}`);
})

app.get('/', (req, res) => {
    res.send(`app is running on port:${port}`)
})