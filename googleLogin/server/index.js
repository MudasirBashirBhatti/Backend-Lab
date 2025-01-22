import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnect } from './src/config/dbConnect.js'

const app = express()
dotenv.config()
app.use(cors())
const port = process.env.PORT
dbConnect()

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
})

app.get('/', (req, res) => {
    res.send('Welcome to website')
})